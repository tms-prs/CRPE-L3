/* En-tête (navigation), verrouillage par test de positionnement, progression.
   Lit window.CRPE_NAV (généré par build.py). */
(function () {
  "use strict";
  var data = window.CRPE_NAV;
  var me = document.currentScript;
  if (!data || !me) return;

  var root = new URL("../", me.src).href;
  var here = norm(location.href.split("#")[0].split("?")[0]);
  var isHome = document.body.classList.contains("home");

  function norm(u) { try { return decodeURIComponent(u); } catch (e) { return u; } }
  function abs(p) { return root + p; }
  function isHere(p) { return !!p && norm(abs(p)) === here; }
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function best(id) {
    if (!id) return null;
    var v = load("crpe:" + id + ":best");
    var n = v === null ? NaN : parseInt(v, 10);
    return isNaN(n) ? null : n;
  }
  function fr(n) { return String(n).replace(".", ","); }

  /* ---------- test de positionnement : résultat et verrouillage ---------- */
  if (/[?&]deverrouiller/.test(location.search)) {
    data.domains.forEach(function (d) { store("crpe:unlock:" + d.id, "1"); });
  }
  function placementOf(d) {
    try { return JSON.parse(load("crpe:placement:" + d.id) || "null"); } catch (e) { return null; }
  }
  function unlocked(d) {
    return !d.placement || !!placementOf(d) || load("crpe:unlock:" + d.id) === "1";
  }
  function note20(r) { return Math.round((r.correct / r.total) * 200) / 10; }
  function partLevel(d, num) {
    var r = placementOf(d);
    if (!r || !r.parts || !r.parts[num] || !r.parts[num].total) return null;
    var pc = Math.round((r.parts[num].ok / r.parts[num].total) * 100);
    return { pc: pc, cls: pc >= 80 ? "ok" : pc >= 50 ? "mid" : "low", label: pc >= 80 ? "Acquis" : pc >= 50 ? "À consolider" : "À travailler" };
  }
  function dot(lv) {
    var s = el("span", "lvl " + lv.cls);
    s.title = lv.label + " (" + lv.pc + " %)";
    return s;
  }

  /* icône de l'onglet */
  if (!document.querySelector("link[rel~=icon]")) {
    var ic = el("link");
    ic.rel = "icon";
    ic.href = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='#2754d9'/><text x='32' y='45' font-size='38' text-anchor='middle' fill='#f6f0e1' font-family='Georgia,serif' font-style='italic'>π</text></svg>");
    document.head.appendChild(ic);
  }

  /* ---------- données : chapitres, page courante, progression ---------- */
  var flat = [];
  var currentChap = null;
  var currentKind = null;
  var currentDomain = null;
  var ids = [];
  data.domains.forEach(function (d) {
    if (d.placement && d.placement.id) ids.push(d.placement.id);
    if (d.placement && isHere(d.placement.path)) { currentKind = "test"; currentDomain = d; }
    d.chapters.forEach(function (c) {
      flat.push(c);
      c.domain = d;
      if (c.quizId) ids.push(c.quizId);
      if (c.exoId) ids.push(c.exoId);
      [["lesson", c.lesson], ["quiz", c.quiz], ["exo", c.exo]].forEach(function (k) {
        if (isHere(k[1])) { currentChap = c; currentKind = k[0]; currentDomain = d; }
      });
    });
    d.tests.forEach(function (t) {
      if (t.id) ids.push(t.id);
      if (isHere(t.path)) { currentKind = "test"; currentDomain = d; }
    });
  });
  var done = ids.filter(function (id) { return best(id) !== null; }).length;
  var pct = ids.length ? Math.round((done / ids.length) * 100) : 0;

  /* ---------- en-tête ---------- */
  var header = el("header", "site-header");
  var nav = el("div", "nav");

  var brand = el("a", "brand");
  brand.href = abs("index.html");
  brand.setAttribute("aria-label", "Maths CRPE, accueil");
  brand.appendChild(el("span", "brand-mark", "π"));
  brand.appendChild(el("span", "brand-text", "Maths CRPE"));
  nav.appendChild(brand);

  var KINDS = [
    { key: "lesson", label: "Leçons" },
    { key: "quiz", label: "Quiz" },
    { key: "exo", label: "Exercices" },
    { key: "test", label: "Tests" }
  ];
  var links = el("nav", "nav-links");
  links.setAttribute("aria-label", "Navigation principale");
  var mega = el("div", "mega");
  mega.id = "mega";
  mega.hidden = true;
  var openKind = null;
  var tabBtns = {};

  function megaLink(label, href, opts) {
    var a = el("a", "mega-link" + (opts.cls ? " " + opts.cls : ""));
    a.href = href;
    if (opts.num) a.appendChild(el("span", "num", opts.num));
    a.appendChild(el("span", "t", (opts.locked ? "🔒 " : "") + label));
    if (opts.lv) a.appendChild(dot(opts.lv));
    if (opts.sc) a.appendChild(el("span", "sc", opts.sc));
    return a;
  }

  function renderPanel(kind) {
    mega.textContent = "";
    var grid = el("div", "mega-grid");
    data.domains.forEach(function (d, di) {
      var col = el("div", "mega-col");
      var h = el("div", "mega-title");
      h.appendChild(el("span", "dnum", String(di + 1).padStart(2, "0")));
      h.appendChild(document.createTextNode(d.label));
      col.appendChild(h);
      var open = unlocked(d);
      var n = 0;
      if (kind === "test") {
        if (d.placement) {
          n++;
          var r = placementOf(d);
          col.appendChild(megaLink("Test de positionnement", abs(d.placement.path), {
            cls: (isHere(d.placement.path) ? "current " : "") + (r ? "done" : "todo"),
            sc: r ? "✓ " + fr(note20(r)) + "/20" : "À faire"
          }));
        }
        d.tests.forEach(function (t) {
          n++;
          var b = best(t.id);
          col.appendChild(megaLink(t.title, open ? abs(t.path) : abs(d.placement.path), {
            cls: (isHere(t.path) ? "current " : "") + (open ? "" : "locked ") + (b !== null ? "done" : ""),
            locked: !open,
            sc: b !== null ? "✓ " + b + " %" : ""
          }));
        });
      } else {
        if (!open) {
          var warn = el("a", "mega-lock");
          warn.href = abs(d.placement.path);
          warn.textContent = "🔒 Verrouillé : fais d'abord le test de positionnement →";
          col.appendChild(warn);
        }
        d.chapters.forEach(function (c) {
          var path = c[kind];
          if (!path) return;
          n++;
          var b = best(kind === "quiz" ? c.quizId : kind === "exo" ? c.exoId : null);
          col.appendChild(megaLink(c.title, open ? abs(path) : abs(d.placement.path), {
            num: c.num,
            cls: (isHere(path) ? "current " : "") + (open ? "" : "locked ") + (b !== null ? "done" : ""),
            locked: !open,
            lv: open ? partLevel(d, c.num) : null,
            sc: b !== null ? "✓ " + b + " %" : ""
          }));
        });
      }
      if (!n) col.appendChild(el("p", "soon", "Bientôt"));
      grid.appendChild(col);
    });
    mega.appendChild(grid);
  }

  function setOpen(kind) {
    openKind = kind;
    KINDS.forEach(function (k) {
      var b = tabBtns[k.key];
      b.setAttribute("aria-expanded", k.key === kind ? "true" : "false");
      b.classList.toggle("open", k.key === kind);
    });
    if (kind) { renderPanel(kind); mega.hidden = false; } else { mega.hidden = true; }
  }

  KINDS.forEach(function (k) {
    var b = el("button", "nav-tab", k.label);
    b.type = "button";
    b.setAttribute("aria-haspopup", "true");
    b.setAttribute("aria-expanded", "false");
    b.setAttribute("aria-controls", "mega");
    if (k.key === currentKind) b.classList.add("on");
    b.appendChild(el("span", "caret", "▾"));
    b.addEventListener("click", function (ev) {
      ev.stopPropagation();
      setOpen(openKind === k.key ? null : k.key);
    });
    tabBtns[k.key] = b;
    links.appendChild(b);
  });
  nav.appendChild(links);

  var prog = el("div", "nav-progress");
  prog.title = "Quiz, exercices et tests commencés";
  var circ = 2 * Math.PI * 16;
  prog.innerHTML = "<svg class='ring' viewBox='0 0 38 38' aria-hidden='true'><circle class='bg' cx='19' cy='19' r='16'/><circle class='fg' cx='19' cy='19' r='16' stroke-dasharray='" + circ.toFixed(1) + "' stroke-dashoffset='" + (circ * (1 - pct / 100)).toFixed(1) + "'/></svg>";
  prog.appendChild(el("span", "txt", done + " / " + ids.length + " activités"));
  nav.appendChild(prog);

  header.appendChild(nav);
  header.appendChild(mega);
  document.body.insertBefore(header, document.body.firstChild);

  document.addEventListener("click", function (ev) {
    if (openKind && !header.contains(ev.target)) setOpen(null);
  });
  mega.addEventListener("click", function (ev) { ev.stopPropagation(); });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && openKind) { var k = openKind; setOpen(null); tabBtns[k].focus(); }
  });

  var main = document.querySelector("main");

  /* ---------- page verrouillée : test de positionnement requis ---------- */
  var onPlacementPage = currentDomain && currentDomain.placement && isHere(currentDomain.placement.path);
  if (main && currentDomain && !onPlacementPage && !unlocked(currentDomain)) {
    window.CRPE_LOCKED = true;
    document.body.classList.add("locked-page");
    main.textContent = "";
    var lock = el("section", "lockscreen");
    lock.appendChild(el("div", "lock-ic", "🔒"));
    lock.appendChild(el("h1", null, "Chapitre verrouillé"));
    lock.appendChild(el("p", null, "Avant de commencer le thème « " + currentDomain.label + " », fais le test de positionnement : environ 40 minutes, des exercices types et des problèmes sur tous les sous-thèmes."));
    lock.appendChild(el("p", null, "À la fin, tu obtiens une note et un pourcentage par sous-thème pour savoir sur quelles notions te concentrer. Ensuite, les leçons, quiz, exercices et le bilan s'ouvrent."));
    var go = el("a", "btn blue", "Faire le test de positionnement ");
    go.href = abs(currentDomain.placement.path);
    go.appendChild(el("span", "arr", "→"));
    lock.appendChild(go);
    main.appendChild(lock);
    return;
  }

  /* ---------- dernière page visitée ---------- */
  if (!isHome) {
    var rel = norm(location.href.split("#")[0]).replace(norm(root), "");
    store("crpe:last", JSON.stringify({ path: rel, title: document.title }));
  }

  /* ---------- accueil : reprise, progression, verrous ---------- */
  if (isHome) {
    var resetBtn = document.querySelector("[data-reset]");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (!window.confirm("Effacer toute ta progression (scores, tests de positionnement, déverrouillages) ? Cette action est définitive.")) return;
        try {
          Object.keys(localStorage).filter(function (k) { return k.indexOf("crpe:") === 0; }).forEach(function (k) { localStorage.removeItem(k); });
        } catch (e) { /* ignore */ }
        location.reload();
      });
    }
    var resume = document.querySelector("[data-resume]");
    if (resume) {
      try {
        var last = JSON.parse(load("crpe:last") || "null");
        if (last && last.path) {
          resume.href = abs(last.path);
          resume.title = last.title || "";
          resume.hidden = false;
        }
      } catch (e) { /* ignore */ }
    }
    document.querySelectorAll("[data-ids]").forEach(function (box) {
      var list = box.getAttribute("data-ids").split(",").filter(Boolean);
      var n = list.filter(function (id) { return best(id) !== null; }).length;
      var bar = box.querySelector(".dbar > i");
      if (bar) bar.style.width = (list.length ? Math.round((n / list.length) * 100) : 0) + "%";
      var txt = box.querySelector("[data-count]");
      if (txt) txt.textContent = n + " / " + list.length + " activités";
    });
    document.querySelectorAll("[data-id]").forEach(function (chip) {
      var b = best(chip.getAttribute("data-id"));
      if (b !== null && !chip.hasAttribute("data-placement-chip")) { chip.classList.add("done"); chip.textContent = chip.textContent + " ✓ " + b + " %"; }
    });
    data.domains.forEach(function (d) {
      if (!d.placement) return;
      var open = unlocked(d);
      var r = placementOf(d);
      document.querySelectorAll('[data-domain="' + d.id + '"]').forEach(function (card) {
        if (card.classList.contains("placement")) {
          var st = card.querySelector("[data-placement-status]");
          var chip = card.querySelector("[data-placement-chip]");
          if (r) {
            card.classList.add("done");
            if (st) st.textContent = "Dernier résultat : " + fr(note20(r)) + " / 20. Tu peux le refaire quand tu veux.";
            if (chip) chip.textContent = "Voir mon diagnostic ✓";
          } else if (st) {
            st.textContent = "À faire en premier : il déverrouille les leçons de ce thème.";
          }
          return;
        }
        if (!open) {
          card.classList.add("locked");
          card.querySelectorAll("a").forEach(function (a) {
            a.href = abs(d.placement.path);
            if (a.classList.contains("chip")) a.textContent = "🔒 " + a.textContent;
          });
          var note = card.querySelector("[data-lock-note]");
          if (note) note.textContent = "🔒 Test de positionnement d'abord";
        } else if (card.getAttribute("data-num")) {
          var lv = partLevel(d, card.getAttribute("data-num"));
          var top = card.querySelector(".top");
          if (lv && top) { top.appendChild(dot(lv)); top.appendChild(el("span", "lvl-label", lv.label)); }
        }
      });
    });
  }

  if (!main) return;

  /* ---------- onglets de chapitre et pager ---------- */
  if (currentChap) {
    var kind = currentKind;
    var kindLabel = { lesson: "Leçon", quiz: "Quiz", exo: "Exercices" }[kind];

    var tabs = el("nav", "chapbar");
    tabs.setAttribute("aria-label", "Parties du chapitre");
    tabs.appendChild(el("span", "chap-name", "Chapitre " + currentChap.num + " · " + currentChap.title));
    var tabRow = el("span", "tabs");
    [["Leçon", "lesson"], ["Quiz", "quiz"], ["Exercices", "exo"]].forEach(function (t) {
      var path = currentChap[t[1]];
      var a;
      if (!path) { a = el("span", "tab off", t[0]); }
      else { a = el("a", "tab", t[0]); a.href = abs(path); if (isHere(path)) a.className += " current"; }
      tabRow.appendChild(a);
    });
    tabs.appendChild(tabRow);
    main.insertBefore(tabs, main.firstChild);

    var lv0 = partLevel(currentChap.domain, currentChap.num);
    if (lv0) {
      var badge = el("span", "chap-level " + lv0.cls, "Ton niveau : " + lv0.label + " (" + lv0.pc + " %)");
      tabs.insertBefore(badge, tabs.firstChild.nextSibling);
    }

    /* sur quiz / exercices : surtitre dans l'en-tête */
    var h = main.querySelector(":scope > header");
    if (h && kind !== "lesson") {
      h.insertBefore(el("span", "kicker", kindLabel + " · Chapitre " + currentChap.num), h.firstChild);
    }

    var idx = flat.indexOf(currentChap);
    var neighbour = function (step) {
      for (var j = idx + step; j >= 0 && j < flat.length; j += step) { if (flat[j][kind]) return flat[j]; }
      return null;
    };
    var prev = neighbour(-1), next = neighbour(1);
    if (prev || next) {
      var pager = el("nav", "pager");
      pager.setAttribute("aria-label", "Chapitre précédent ou suivant");
      [[prev, "prev", "← Précédent"], [next, "next", "Suivant →"]].forEach(function (p) {
        if (!p[0]) return;
        var a = el("a", p[1]);
        a.href = abs(p[0][kind]);
        a.appendChild(el("small", null, p[2] + " · " + kindLabel));
        a.appendChild(el("b", null, p[0].num + " " + p[0].title));
        pager.appendChild(a);
      });
      main.appendChild(pager);
    }
  } else if (!isHome) {
    var hb = main.querySelector(":scope > header");
    if (hb) hb.insertBefore(el("span", "kicker", onPlacementPage ? "Test de positionnement" : "Bilan"), hb.firstChild);
  }

  /* ---------- barre de lecture et sommaire (leçons) ---------- */
  if (document.body.classList.contains("lesson")) {
    var bar2 = el("div", "reading-progress");
    document.body.appendChild(bar2);
    var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
    var heads = tocLinks.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
    var onScroll = function () {
      var d = document.documentElement;
      var max = d.scrollHeight - d.clientHeight;
      bar2.style.width = (max > 0 ? Math.min(100, (d.scrollTop / max) * 100) : 0) + "%";
      var active = -1;
      heads.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < 140) active = i; });
      tocLinks.forEach(function (a, i) { a.classList.toggle("on", i === active); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
