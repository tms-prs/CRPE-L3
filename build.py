#!/usr/bin/env python3
"""Génère le site de révision à partir des fichiers du projet.

Usage :  python build.py          (génère les pages dans le dossier du projet)
         python build.py --dist   (génère puis copie le site publiable dans dist/)

- convertit chaque leçon `lecons/<domaine>/NN-sujet.md` en `NN-sujet.html` ;
- écrit `assets/nav-data.js` (arborescence du menu de navigation) ;
- ajoute le menu de navigation aux pages quiz / exercices / tests blancs ;
- génère la page d'accueil `index.html` ;
- génère `assets/admin-config.js` si un mot de passe admin est fourni (creds.txt ou variable
  d'environnement ADMIN_PASSWORD) ;
- avec --dist : copie uniquement les fichiers à publier (pas les sources, scripts ni secrets).

Aucune dépendance externe. Les fichiers .md restent la source des leçons :
relancer ce script après toute modification ou ajout.
"""
import hashlib
import html
import json
import os
import re
import secrets
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent

DOMAINS = [
    ("nombres-et-calculs", "Nombres et calculs"),
    ("espace-et-geometrie", "Espace et géométrie"),
    ("donnees-et-probabilites", "Données et probabilités"),
    ("proportionnalite-et-fonctions", "Proportionnalité et fonctions"),
    ("pensee-informatique", "Pensée informatique"),
]

ADMIN_TAG = '<script src="../../assets/admin-config.js"></script>\n'
NAV_DATA_TAG = '<script src="../../assets/nav-data.js"></script>\n'
NAV_TAGS = (
    ADMIN_TAG
    + NAV_DATA_TAG
    + '<script src="../../assets/nav.js"></script>\n'
)
APP_TAG = '<script src="../../assets/app.js"></script>'

DESCRIPTIONS = {
    "nombres-et-calculs": "Relatifs, fractions, puissances, calcul littéral, équations.",
    "espace-et-geometrie": "Pythagore, Thalès, trigonométrie, transformations, solides.",
    "donnees-et-probabilites": "Statistiques, moyenne, médiane, probabilités.",
    "proportionnalite-et-fonctions": "Proportionnalité, pourcentages, fonctions linéaires et affines.",
    "pensee-informatique": "Algorithmes, variables, boucles, programmation par blocs.",
}

warnings = []


# ---------------------------------------------------------------- markdown
def esc(s):
    return html.escape(s, quote=False)


def fix_link(url):
    return re.sub(r"\.md(#|$)", r".html\1", url)


def inline(s):
    codes = []

    def stash(m):
        codes.append("<code>" + esc(m.group(1)) + "</code>")
        return "%d" % (len(codes) - 1)

    t = esc(re.sub(r"`([^`]+)`", stash, s))
    t = re.sub(
        r"\[([^\]]+)\]\(([^)]+)\)",
        lambda m: '<a href="%s">%s</a>' % (fix_link(m.group(2)), m.group(1)),
        t,
    )
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*(?!\s)([^*\n]+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", t)
    return re.sub("(\\d+)", lambda m: codes[int(m.group(1))], t)


def split_cells(line):
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    cells, cur, in_code = [], "", False
    for ch in line:
        if ch == "`":
            in_code = not in_code
        if ch == "|" and not in_code:
            cells.append(cur.strip())
            cur = ""
        else:
            cur += ch
    cells.append(cur.strip())
    return cells


BLOCK_START = re.compile(r"^(#{1,4} |```|>|\s*[-*] |\s*\d+\. |\|)")
HR = re.compile(r"^-{3,}\s*$")
TABLE_SEP = re.compile(r"^\s*\|(\s*:?-+:?\s*\|)+\s*$")
LIST_ITEM = re.compile(r"^(\s*)([-*]|\d+\.) (.*)")


def md_to_html(md, name=""):
    lines = md.split("\n")
    i, out, title = 0, [], None
    while i < len(lines):
        l = lines[i]
        if not l.strip():
            i += 1
            continue
        if l.startswith("```"):
            lang = l[3:].strip()
            i += 1
            buf = []
            while i < len(lines) and not lines[i].startswith("```"):
                buf.append(lines[i])
                i += 1
            i += 1
            if lang.startswith("svg"):
                caption = lang[3:].strip()
                cap = "<figcaption>%s</figcaption>" % inline(caption) if caption else ""
                out.append('<figure class="fig">%s%s</figure>' % ("\n".join(buf), cap))
            else:
                out.append("<pre><code>" + esc("\n".join(buf)) + "</code></pre>")
            continue
        m = re.match(r"^(#{1,4}) (.*)", l)
        if m:
            level = len(m.group(1))
            if level == 1 and title is None:
                title = m.group(2)
            out.append("<h%d>%s</h%d>" % (level, inline(m.group(2)), level))
            i += 1
            continue
        if HR.match(l):
            out.append("<hr>")
            i += 1
            continue
        if l.lstrip().startswith("|") and i + 1 < len(lines) and TABLE_SEP.match(lines[i + 1]):
            head = split_cells(l)
            i += 2
            rows = []
            while i < len(lines) and lines[i].lstrip().startswith("|"):
                rows.append(split_cells(lines[i]))
                i += 1
            for r in rows:
                if len(r) != len(head):
                    warnings.append("%s : ligne de tableau à %d cellules (attendu %d) : %s" % (name, len(r), len(head), r[:2]))
            h = "".join("<th>%s</th>" % inline(c) for c in head)
            b = "".join(
                "<tr>" + "".join("<td>%s</td>" % inline(c) for c in (r + [""] * len(head))[: len(head)]) + "</tr>"
                for r in rows
            )
            out.append('<div class="table-wrap"><table><thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>' % (h, b))
            continue
        if l.startswith(">"):
            paras, cur = [], []
            while i < len(lines) and lines[i].startswith(">"):
                t = re.sub(r"^> ?", "", lines[i])
                if t.strip():
                    cur.append(t)
                elif cur:
                    paras.append(cur)
                    cur = []
                i += 1
            if cur:
                paras.append(cur)
            out.append("<blockquote>" + "".join("<p>%s</p>" % inline("\n".join(p)).replace("\n", "<br>") for p in paras) + "</blockquote>")
            continue
        m = LIST_ITEM.match(l)
        if m:
            ordered = m.group(2)[0].isdigit()
            items = []
            while i < len(lines):
                lm = LIST_ITEM.match(lines[i])
                if lm and (lm.group(2)[0].isdigit() == ordered) and len(lm.group(1)) == 0:
                    items.append([lm.group(3)])
                    i += 1
                elif lines[i].strip() and lines[i].startswith(" ") and items:
                    items[-1].append(lines[i].strip())
                    i += 1
                elif not lines[i].strip():
                    j = i
                    while j < len(lines) and not lines[j].strip():
                        j += 1
                    nm = LIST_ITEM.match(lines[j]) if j < len(lines) else None
                    if nm and (nm.group(2)[0].isdigit() == ordered) and len(nm.group(1)) == 0:
                        i = j
                    else:
                        break
                else:
                    break
            tag = "ol" if ordered else "ul"
            out.append("<%s>%s</%s>" % (tag, "".join("<li>%s</li>" % inline(" ".join(it)) for it in items), tag))
            continue
        buf = [l]
        i += 1
        while i < len(lines) and lines[i].strip() and not BLOCK_START.match(lines[i]) and not HR.match(lines[i]):
            buf.append(lines[i])
            i += 1
        out.append("<p>%s</p>" % inline("\n".join(buf)).replace("\n", "<br>"))
    return out, title


# ---------------------------------------------------------------- pages
LESSON_TEMPLATE = """<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<link rel="stylesheet" href="../../assets/style.css">
</head>
<body class="lesson">
<main>
<div class="lesson-hero">
<nav class="crumbs" aria-label="Fil d'Ariane"><a href="../../index.html">Accueil</a><span>›</span><span>{domain}</span><span>›</span><span>{kicker}</span></nav>
<span class="kicker">{kicker}</span>
<h1>{h1}</h1>
<div class="meta-row">{pills}</div>
<div class="infos">{infos}</div>
</div>
<div class="lesson-layout">
<article class="prose">
{body}
</article>
<aside class="toc" aria-label="Sommaire"><h4>Sur cette page</h4><ol>{toc}</ol></aside>
</div>
</main>
{nav}</body>
</html>
"""

META_RE = re.compile(r"^\*\*(Domaine|Programme|Prérequis|Durée conseillée)\*\* : (.*)$")


def split_meta(md):
    """Retire du markdown les lignes de métadonnées du haut de la leçon."""
    lines, meta, out = md.split("\n"), {}, []
    for i, l in enumerate(lines):
        m = META_RE.match(l) if i < 14 else None
        if m:
            meta[m.group(1)] = m.group(2)
        else:
            out.append(l)
    return "\n".join(out), meta


def sec_class(title):
    t = title.lower()
    if "objectifs" in t:
        return "sec-objectifs"
    if "retenir" in t:
        return "sec-retenir"
    if "erreurs types" in t:
        return "sec-didactic"
    if "entraîner" in t or "entrainer" in t:
        return "sec-practice"
    if "prolongement" in t:
        return "sec-extra"
    return ""


def build_lesson_body(blocks, practice_html):
    intro, sections, cur = [], [], None
    for b in blocks:
        if b.startswith("<h1"):
            continue
        if b.startswith("<h2"):
            cur = {"h": b, "body": []}
            sections.append(cur)
        elif b == "<hr>":
            continue
        elif cur is None:
            intro.append(b)
        else:
            cur["body"].append(b)

    def callout(b):
        if b.startswith("<blockquote>"):
            inner = b[len("<blockquote>"):-len("</blockquote>")]
            return '<div class="callout"><span class="ic">i</span><div>%s</div></div>' % inner
        return b

    parts = [callout(b) for b in intro]
    toc = []
    for n, sec in enumerate(sections, 1):
        title = html.unescape(re.sub(r"<[^>]+>", "", sec["h"]))
        sid = "s%d" % n
        toc.append('<li><a href="#%s">%s</a></li>' % (sid, esc(title)))
        h = sec["h"].replace("<h2>", '<h2 id="%s">' % sid, 1)
        cls = sec_class(title)
        body = [callout(b) for b in sec["body"]]
        if cls == "sec-practice" and practice_html:
            body = [practice_html]
        parts.append('<section class="%s">%s%s</section>' % (cls, h, "\n".join(body)))
    return "\n".join(parts), "".join(toc)


def accent_title(t):
    words = t.split(" ")
    if len(words) >= 2:
        return esc(" ".join(words[:-1])) + " <em>" + esc(words[-1]) + "</em>"
    return esc(t)


def page_title(path):
    m = re.search(r"<title>(.*?)</title>", path.read_text(encoding="utf-8"), re.S)
    return html.unescape(m.group(1)).strip() if m else path.stem


def page_id(path):
    m = re.search(r'window\.PAGE\s*=\s*\{\s*id:\s*"([^"]+)"', path.read_text(encoding="utf-8"))
    return m.group(1) if m else None


def inject_nav(path):
    txt = path.read_text(encoding="utf-8")
    if "nav-data.js" in txt:
        if "admin-config.js" in txt:
            return False
        path.write_text(txt.replace(NAV_DATA_TAG, ADMIN_TAG + NAV_DATA_TAG, 1), encoding="utf-8", newline="\n")
        return True
    if APP_TAG not in txt:
        warnings.append("%s : balise app.js introuvable, menu non ajouté" % path.relative_to(ROOT))
        return False
    path.write_text(txt.replace(APP_TAG, NAV_TAGS + APP_TAG), encoding="utf-8", newline="\n")
    return True


# ---------------------------------------------------------------- mode admin
def sha256_hex(s):
    return hashlib.sha256(s.encode("utf-8")).hexdigest()


def write_admin_config():
    """Lit creds.txt et écrit assets/admin-config.js (sel + empreinte du jeton).

    Le mot de passe n'est jamais écrit dans le site : on publie seulement
    check = SHA-256(SHA-256(sel + mot de passe)). Sans creds.txt, le mode admin
    est désactivé et le fichier de configuration est supprimé.
    """
    cfg = ROOT / "assets" / "admin-config.js"
    creds = ROOT / "creds.txt"
    password = None
    if creds.exists():
        for line in creds.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line.startswith("ADMIN_PASSWORD="):
                password = line.split("=", 1)[1].strip()
    if not password:
        # hébergement (Vercel…) : le mot de passe vient d'une variable d'environnement
        password = os.environ.get("ADMIN_PASSWORD", "").strip() or None
    if not password:
        if cfg.exists():
            cfg.unlink()
        return False
    salt = secrets.token_hex(16)
    token = sha256_hex(salt + password)
    cfg.write_text(
        "/* Généré par build.py à partir de creds.txt : ne pas commiter (voir .gitignore). */\n"
        'window.CRPE_ADMIN = { salt: "%s", check: "%s" };\n' % (salt, sha256_hex(token)),
        encoding="utf-8",
        newline="\n",
    )
    return True


def count_questions(path):
    return len(re.findall(r'\{\s*type:\s*"', path.read_text(encoding="utf-8")))


def practice_cards(ch):
    cards = []
    if ch["quiz"]:
        cards.append(
            '<a class="mode-card blue" href="../../%s"><h3>Quiz</h3><p>Questions courtes avec correction immédiate pour vérifier que c’est acquis.</p>'
            '<span class="go">Lancer le quiz <span>→</span></span></a>' % ch["quiz"]
        )
    if ch["exo"]:
        cards.append(
            '<a class="mode-card sky" href="../../%s"><h3>Exercices</h3><p>Réponses à saisir, indices et corrections détaillées.</p>'
            '<span class="go">Commencer <span>→</span></span></a>' % ch["exo"]
        )
    return '<div class="practice">%s</div>' % "".join(cards) if cards else ""


INDEX_TEMPLATE = """<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Maths CRPE — apprends pas à pas</title>
<meta name="description" content="Leçons, quiz et exercices de mathématiques pour préparer le CRPE (concours externe bac+3).">
<meta name="theme-color" content="#f6f0e1">
<link rel="stylesheet" href="assets/style.css">
</head>
<body class="home">
<main>
<section class="hero">
<span class="kicker">CRPE · concours externe bac+3</span>
<h1><span class="line"><span>Les maths,</span></span><span class="line"><span><em>pas à pas.</em></span></span></h1>
<div class="hero-row">
<div>
<p class="hero-sub">Des leçons claires, des quiz corrigés tout de suite et des exercices avec indices : tout le programme de cycle 4, pensé pour enseigner ensuite à l’école.</p>
<div class="hero-cta"><a class="btn blue" href="@FIRST@">Commencer <span class="arr">→</span></a><a class="btn ghost" data-resume hidden>Reprendre <span class="arr">→</span></a></div>
</div>
<div class="stats">
<div class="stat"><b>@LESSONS@</b><span>leçons</span></div>
<div class="stat"><b>@QUIZ@</b><span>quiz</span></div>
<div class="stat"><b>@EXO@</b><span>séries d’exercices</span></div>
<div class="stat"><b>@QUESTIONS@</b><span>questions</span></div>
</div>
</div>
<div class="sticker"><div class="disc">π</div>@STICKER@</div>
</section>
<div class="marquee" aria-hidden="true"><div class="marquee-track">@MARQ@@MARQ@@MARQ@@MARQ@@MARQ@@MARQ@@MARQ@@MARQ@</div></div>
<section class="section">
<div class="section-head"><h2>Cinq <span class="nw"><em>thèmes</em>,</span> un seul objectif.</h2><p>Chaque thème se termine par un bilan. Avance à ton rythme : ta progression est enregistrée dans ton navigateur.</p></div>
<div class="levels">@CARDS@</div>
</section>
<div class="cta-band">
<div class="cta-big">Chaque exercice te rapproche du <em>concours.</em></div>
<div class="cta-row"><a class="btn" href="@FIRST@">C’est parti <span class="arr">→</span></a><small>@BILANS@ bilan(s) de thème · programme officiel de cycle 4</small></div>
<div class="foot"><span>Maths CRPE</span><span>Fait pour apprendre sans stress</span><span class="foot-btns"><button type="button" class="reset-btn" data-export>Exporter ma progression</button><button type="button" class="reset-btn" data-import>Importer…</button><input type="file" accept="application/json,.json" data-import-file hidden aria-label="Fichier de progression à importer"><button type="button" class="reset-btn" data-admin>Mode admin</button><button type="button" class="reset-btn" data-reset>Réinitialiser ma progression</button></span></div>
</div>
</main>
<script src="assets/admin-config.js"></script>
<script src="assets/nav-data.js"></script>
<script src="assets/nav.js"></script>
</body>
</html>
"""


def plural(n, word):
    return "%d %s%s" % (n, word, "s" if n > 1 else "")


def build_index(nav, stats):
    domain_cards, lists = [], []
    for i, d in enumerate(nav["domains"], 1):
        pl = d.get("placement")
        has = bool(d["chapters"] or d["tests"] or pl)
        ids = [x for c in d["chapters"] for x in (c["quizId"], c["exoId"]) if x] + [t["id"] for t in d["tests"] if t["id"]]
        if pl and pl["id"]:
            ids.append(pl["id"])
        target = pl["path"] if pl else (d["chapters"][0]["lesson"] if d["chapters"] else "#")
        desc = DESCRIPTIONS.get(d["id"], "")
        if not has:
            domain_cards.append(
                '<div class="level-card soon"><div><div class="level-num">%02d</div><h3>%s</h3><p>%s</p></div>'
                '<div class="level-meta"><span>Bientôt</span></div></div>' % (i, esc(d["label"]), esc(desc))
            )
            continue
        domain_cards.append(
            '<a class="level-card" href="%s" data-ids="%s" data-domain="%s" data-first="%s"><div><div class="level-num">%02d</div><h3>%s</h3><p>%s</p></div>'
            '<div><div class="level-meta"><span>%s</span><span class="level-arrow">→</span></div>'
            '<div class="dbar"><i></i></div><div class="level-meta" style="margin-top:8px;font-weight:500;font-size:13px">'
            '<span data-count>0 / %d activités</span><span data-lock-note></span></div></div></a>'
            % (target, ",".join(ids), d["id"], d["chapters"][0]["lesson"] if d["chapters"] else target, i, esc(d["label"]), esc(desc), plural(len(d["chapters"]), "chapitre"), len(ids))
        )
        cards = []
        if pl:
            cards.append(
                '<article class="lesson-card placement" data-domain="%s"><div class="top">Test de positionnement</div>'
                '<h3><a href="%s">Où en es-tu ?</a></h3>'
                '<p class="card-text">Un test de %d questions pour repérer tes points forts et faibles, sous-thème par sous-thème.</p>'
                '<p class="card-text" data-placement-status></p>'
                '<div class="chips"><a class="chip" data-id="%s" data-placement-chip href="%s">Faire le test</a></div></article>'
                % (d["id"], pl["path"], pl["count"], pl["id"], pl["path"])
            )
        for c in d["chapters"]:
            quiz = '<a class="chip" data-id="%s" href="%s">Quiz</a>' % (c["quizId"], c["quiz"]) if c["quiz"] else ""
            exo = '<a class="chip" data-id="%s" href="%s">Exercices</a>' % (c["exoId"], c["exo"]) if c["exo"] else ""
            cards.append(
                '<article class="lesson-card" data-domain="%s" data-num="%s"><div class="top">%s</div><h3><a href="%s">%s</a></h3>'
                '<div class="chips"><a class="chip" href="%s">Leçon</a>%s%s</div></article>'
                % (d["id"], c["num"], c["num"], c["lesson"], esc(c["title"]), c["lesson"], quiz, exo)
            )
        for t in d["tests"]:
            cards.append(
                '<article class="lesson-card bilan" data-domain="%s"><div class="top">Bilan</div><h3><a href="%s">%s</a></h3>'
                '<div class="chips"><a class="chip" data-id="%s" href="%s">Faire le bilan</a></div></article>'
                % (d["id"], t["path"], esc(t["title"]), t["id"], t["path"])
            )
        lists.append(
            '<div class="level-title"><h2>%s</h2><span>%s</span></div><div class="lesson-grid">%s</div>'
            % (esc(d["label"]), plural(len(d["chapters"]), "chapitre"), "".join(cards))
        )
    symbols = ["π", "√", "∑", "÷", "×", "∞", "≠", "≤", "x²", "%", "∆", "∫"]
    marq = "".join("<span>%s</span><i>✦</i>" % x for x in symbols)
    sticker = (
        '<svg viewBox="0 0 200 200" aria-hidden="true"><defs><path id="c" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"/></defs>'
        '<text><textPath href="#c">concours externe · bac+3 · mathématiques · concours externe · bac+3 · </textPath></text></svg>'
    )
    out = INDEX_TEMPLATE
    for key, val in {
        "@FIRST@": stats["first"],
        "@LESSONS@": str(stats["lessons"]),
        "@QUIZ@": str(stats["quiz"]),
        "@EXO@": str(stats["exo"]),
        "@QUESTIONS@": str(stats["questions"]),
        "@STICKER@": sticker,
        "@MARQ@": marq,
        "@CARDS@": "\n".join(domain_cards),
        "@LISTS@": "\n".join(lists),
        "@BILANS@": str(stats["bilans"]),
    }.items():
        out = out.replace(key, val)
    return out


# ---------------------------------------------------------------- publication
PUBLISH_GLOBS = [
    "index.html",
    "assets/*.js",
    "assets/*.css",
    "lecons/**/*.html",
    "quiz/**/*.html",
    "exercices/**/*.html",
    "tests-blancs/**/*.html",
]


def publish_dist():
    """Copie le site publiable dans dist/ (pour un hébergement statique comme Vercel)."""
    dist = ROOT / "dist"
    if dist.exists():
        shutil.rmtree(dist)
    n = 0
    for pattern in PUBLISH_GLOBS:
        for src in sorted(ROOT.glob(pattern)):
            if not src.is_file() or src.name.startswith("_"):
                continue
            target = dist / src.relative_to(ROOT)
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, target)
            n += 1
    print("Dossier dist/ : %d fichiers" % n)


def main():
    nav = {"domains": []}
    n_lessons = n_injected = n_questions = 0
    for dom, label in DOMAINS:
        chapters = []
        for md_path in sorted((ROOT / "lecons" / dom).glob("*.md")):
            stem = md_path.stem
            quiz = ROOT / "quiz" / dom / (stem + ".html")
            exo = ROOT / "exercices" / dom / (stem + ".html")
            md, meta = split_meta(md_path.read_text(encoding="utf-8"))
            blocks, title = md_to_html(md, md_path.name)
            title = title or stem
            m = re.match(r"Leçon (\d+) — (.*)", title)
            num, short = (m.group(1), m.group(2)) if m else (stem.split("-")[0], title)
            ch = {
                "num": num,
                "title": short,
                "lesson": "lecons/%s/%s.html" % (dom, stem),
                "quiz": "quiz/%s/%s.html" % (dom, stem) if quiz.exists() else None,
                "exo": "exercices/%s/%s.html" % (dom, stem) if exo.exists() else None,
                "quizId": page_id(quiz) if quiz.exists() else None,
                "exoId": page_id(exo) if exo.exists() else None,
            }
            body, toc = build_lesson_body(blocks, practice_cards(ch))
            pills = ""
            if "Domaine" in meta:
                pills += '<span class="pill-tag blue">%s</span>' % inline(meta["Domaine"])
            if "Durée conseillée" in meta:
                pills += '<span class="pill-tag">⏱ %s</span>' % inline(meta["Durée conseillée"])
            infos = "".join(
                '<div class="info"><b>%s</b>%s</div>' % (k, inline(meta[k])) for k in ("Programme", "Prérequis") if k in meta
            )
            md_path.with_suffix(".html").write_text(
                LESSON_TEMPLATE.format(
                    title=esc(title),
                    domain=esc(label),
                    kicker="Leçon %s" % num,
                    h1=accent_title(short),
                    pills=pills,
                    infos=infos,
                    body=body,
                    toc=toc,
                    nav=NAV_TAGS,
                ),
                encoding="utf-8",
                newline="\n",
            )
            n_lessons += 1
            for p in (quiz, exo):
                if p.exists():
                    n_questions += count_questions(p)
                    if inject_nav(p):
                        n_injected += 1
            chapters.append(ch)

        placement = None
        pp = ROOT / "tests-blancs" / dom / "positionnement.html"
        if pp.exists():
            placement = {"title": page_title(pp), "path": "tests-blancs/%s/positionnement.html" % dom, "id": page_id(pp), "count": count_questions(pp)}
            n_questions += count_questions(pp)
            if inject_nav(pp):
                n_injected += 1

        tests = []
        for t in sorted((ROOT / "tests-blancs" / dom).glob("*.html")):
            if t.name == "positionnement.html":
                continue
            tests.append({"title": page_title(t), "path": "tests-blancs/%s/%s" % (dom, t.name), "id": page_id(t)})
            n_questions += count_questions(t)
            if inject_nav(t):
                n_injected += 1
        nav["domains"].append({"id": dom, "label": label, "chapters": chapters, "placement": placement, "tests": tests})

    (ROOT / "assets" / "nav-data.js").write_text(
        "/* Généré par build.py : ne pas modifier à la main. */\nwindow.CRPE_NAV = "
        + json.dumps(nav, ensure_ascii=False, indent=1)
        + ";\n",
        encoding="utf-8",
        newline="\n",
    )

    stats = {
        "lessons": n_lessons,
        "quiz": sum(1 for d in nav["domains"] for c in d["chapters"] if c["quiz"]),
        "exo": sum(1 for d in nav["domains"] for c in d["chapters"] if c["exo"]),
        "questions": n_questions,
        "bilans": sum(len(d["tests"]) for d in nav["domains"]),
        "first": next(
            (d["placement"]["path"] if d["placement"] else d["chapters"][0]["lesson"] for d in nav["domains"] if d["chapters"]),
            "#",
        ),
    }
    (ROOT / "index.html").write_text(build_index(nav, stats), encoding="utf-8", newline="\n")
    admin_on = write_admin_config()

    print("Leçons converties : %d" % n_lessons)
    print("Pages avec menu ajouté : %d" % n_injected)
    print("Questions au total : %d" % n_questions)
    print("Accueil : index.html")
    print("Mode admin : %s" % ("active" if admin_on else "desactive (ni creds.txt ni ADMIN_PASSWORD)"))
    for w in warnings:
        print("ATTENTION", w)
    if "--dist" in sys.argv:
        publish_dist()


if __name__ == "__main__":
    main()
