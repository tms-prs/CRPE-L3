/* Moteur commun quiz / exercices / test de positionnement. La page définit window.PAGE. */
(function () {
  "use strict";
  if (window.CRPE_LOCKED) return;
  var P = window.PAGE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };
  var isTest = !!P.test;

  /* ---------- normalisation des réponses ---------- */
  function norm(s) {
    return String(s).trim().toLowerCase()
      .replace(/[−–—]/g, "-").replace(/,/g, ".").replace(/\s+/g, "");
  }
  function toNumber(s) {
    s = norm(s);
    var m = /^([+-]?\d+(?:\.\d+)?)\/([+-]?\d+(?:\.\d+)?)$/.exec(s);
    if (m) { var d = parseFloat(m[2]); return d === 0 ? NaN : parseFloat(m[1]) / d; }
    if (/^[+-]?\d+(?:\.\d+)?$/.test(s)) return parseFloat(s);
    return NaN;
  }
  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  function isCorrect(item, raw) {
    if (item.type === "text") {
      var n = norm(raw);
      return item.accept.some(function (a) { return n.indexOf(norm(a)) !== -1; });
    }
    var v = toNumber(raw);
    if (isNaN(v)) return false;
    var targets = [].concat(item.answer).map(toNumber);
    var tol = item.tol || 1e-9;
    var ok = targets.some(function (t) { return Math.abs(t - v) <= tol; });
    if (ok && item.irreducible) {
      var m = /^([+-]?\d+)\/([+-]?\d+)$/.exec(norm(raw));
      if (m && (gcd(Math.abs(+m[1]), Math.abs(+m[2])) !== 1 || +m[2] < 0)) return "irr";
    }
    return ok;
  }
  function show(v) { return String(v).replace(/-/g, "−").replace(/\./g, ","); }
  function fr(n) { return String(n).replace(".", ","); }

  /* ---------- état ---------- */
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  if (P.mix) {
    /* test « mélangé » : toutes les questions dans un seul ordre aléatoire, sans titre de sous-thème */
    var pool = [];
    P.sections.forEach(function (sec) {
      sec.items.forEach(function (it) { if (!it.part && sec.part) it.part = sec.part; pool.push(it); });
    });
    P.sections = [{ title: "", items: shuffle(pool) }];
  }
  P.sections.forEach(function (sec) { if (sec.shuffle) shuffle(sec.items); });
  var items = [];
  P.sections.forEach(function (sec) {
    sec.items.forEach(function (it) { it._part = it.part || sec.part || null; it._idx = items.length; items.push(it); });
  });
  var total = items.length;
  var done = 0, good = 0;
  var outcome = [];
  var key = "crpe:" + P.id;

  var root = $("#app");
  var bar = el("div", "bar");
  var prog = el("div", "progress"); var fill = el("div"); prog.appendChild(fill);
  var count = el("small"); bar.appendChild(prog); bar.appendChild(count);
  root.appendChild(bar);
  var qs = el("div"); qs.id = "qs";
  root.appendChild(qs);

  function refresh() {
    fill.style.width = (total ? (done / total) * 100 : 0) + "%";
    count.textContent = isTest
      ? done + " / " + total + " répondues"
      : done + " / " + total + " traités · " + good + " réussis";
    if (done === total) (isTest ? finishTest : finishPractice)();
  }

  function saveBest(pct) {
    var prev = parseInt(store.get(key + ":best") || "-1", 10);
    var best = Math.max(prev, pct);
    store.set(key + ":best", String(best));
    return best;
  }

  /* ---------- fin d'un quiz / d'exercices ---------- */
  function finishPractice() {
    var r = $("#result");
    r.classList.remove("hidden");
    var pct = Math.round((good / total) * 100);
    var best = saveBest(pct);
    $(".score", r).textContent = good + " / " + total + " (" + pct + " %)";
    $(".msg", r).textContent = pct >= 80 ? "Très bien. Passe à la suite."
      : pct >= 50 ? "Correct, mais relis les points ratés dans la leçon."
      : "À retravailler : reprends la leçon, puis recommence.";
    $(".best", r).textContent = "Meilleur score enregistré : " + best + " %";
    r.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function mark(card, ok, item) {
    done++; if (ok) good++;
    outcome[item._idx] = !!ok;
    card.classList.add(ok ? "ok" : "ko");
    refresh();
  }

  /* ---------- rendus : mode entraînement ---------- */
  function renderQCM(card, item) {
    var opts = el("div", "opts");
    var fb = el("div", "fb hidden");
    var btns = [];
    item.options.forEach(function (o, i) {
      var b = el("button", "opt"); b.type = "button";
      b.appendChild(el("span", "k", String.fromCharCode(65 + i)));
      b.appendChild(el("span", "t", o));
      b.addEventListener("click", function () {
        btns.forEach(function (x) { x.disabled = true; });
        var ok = i === item.answer;
        b.classList.add(ok ? "good" : "bad");
        if (!ok) btns[item.answer].classList.add("good");
        fb.className = "fb " + (ok ? "ok" : "ko");
        fb.textContent = (ok ? "Correct. " : "Raté. ") + (item.explain || "");
        mark(card, ok, item);
      });
      btns.push(b); opts.appendChild(b);
    });
    card.appendChild(opts); card.appendChild(fb);
  }

  function renderInput(card, item) {
    var row = el("div", "row");
    var inp = el("input"); inp.type = "text"; inp.autocomplete = "off";
    inp.setAttribute("aria-label", "Ta réponse");
    inp.placeholder = item.type === "text" ? "ta réponse" : "ex. −3 ou 1/2";
    var chk = el("button", "btn", "Vérifier"); chk.type = "button";
    row.appendChild(inp); row.appendChild(chk);
    var hintBtn, hintBox;
    if (item.hint) {
      hintBtn = el("button", "btn ghost", "Indice"); hintBtn.type = "button";
      hintBox = el("div", "fb hint hidden", item.hint);
      hintBtn.addEventListener("click", function () { hintBox.classList.toggle("hidden"); });
      row.appendChild(hintBtn);
    }
    var solBtn = el("button", "btn ghost", "Voir la correction"); solBtn.type = "button";
    row.appendChild(solBtn);
    var fb = el("div", "fb hidden");
    var sol = el("div", "fb sol hidden", item.solution || "");
    var counted = false;

    function finishItem(ok) {
      if (counted) return;
      counted = true;
      mark(card, ok, item);
    }
    function check() {
      if (!inp.value.trim() || counted) return;
      var res = isCorrect(item, inp.value);
      var ok = res === true;
      fb.className = "fb " + (ok ? "ok" : "ko");
      fb.textContent = ok ? "Correct."
        : res === "irr" ? "Bonne valeur, mais la fraction n'est pas irréductible : simplifie-la."
        : "Pas tout à fait. Réessaie, regarde l'indice, ou ouvre la correction.";
      if (ok) {
        inp.disabled = true; chk.disabled = true;
        sol.classList.remove("hidden");
        finishItem(true);
      }
    }
    chk.addEventListener("click", check);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
    solBtn.addEventListener("click", function () {
      sol.classList.remove("hidden");
      if (!counted) {
        fb.className = "fb ko";
        fb.textContent = "Réponse : " + item.shown + ". Correction vue, comptée comme ratée.";
        inp.disabled = true; chk.disabled = true;
        finishItem(false);
      }
    });
    card.appendChild(row);
    if (hintBox) card.appendChild(hintBox);
    card.appendChild(fb); card.appendChild(sol);
  }

  /* ---------- rendus : mode test (une seule tentative, pas de correction) ---------- */
  function answered(card, item, ok, note) {
    done++; if (ok) good++;
    outcome[item._idx] = !!ok;
    card.classList.add("answered");
    var tag = card.querySelector(".qtag");
    if (tag) tag.textContent = note || "Réponse enregistrée";
    refresh();
  }

  function renderTestQCM(card, item) {
    var opts = el("div", "opts");
    var btns = [];
    var skip = el("button", "btn ghost skip", "Je ne sais pas"); skip.type = "button";
    function lock(i) {
      btns.forEach(function (x) { x.disabled = true; });
      skip.disabled = true;
      if (i >= 0) btns[i].classList.add("picked");
      answered(card, item, i === item.answer, i < 0 ? "Passée" : null);
    }
    item.options.forEach(function (o, i) {
      var b = el("button", "opt"); b.type = "button";
      b.appendChild(el("span", "k", String.fromCharCode(65 + i)));
      b.appendChild(el("span", "t", o));
      b.addEventListener("click", function () { lock(i); });
      btns.push(b); opts.appendChild(b);
    });
    skip.addEventListener("click", function () { lock(-1); });
    card.appendChild(opts);
    var row = el("div", "row"); row.appendChild(skip); card.appendChild(row);
  }

  function renderTestInput(card, item) {
    var row = el("div", "row");
    var inp = el("input"); inp.type = "text"; inp.autocomplete = "off";
    inp.setAttribute("aria-label", "Ta réponse");
    inp.placeholder = "ex. −3 ou 1/2";
    var ok = el("button", "btn", "Valider"); ok.type = "button";
    var skip = el("button", "btn ghost skip", "Je ne sais pas"); skip.type = "button";
    row.appendChild(inp); row.appendChild(ok); row.appendChild(skip);
    var counted = false;
    function lock(correct, note) {
      if (counted) return;
      counted = true;
      inp.disabled = true; ok.disabled = true; skip.disabled = true;
      answered(card, item, correct, note);
    }
    function submit() {
      if (!inp.value.trim()) return;
      lock(isCorrect(item, inp.value) === true);
    }
    ok.addEventListener("click", submit);
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    skip.addEventListener("click", function () { lock(false, "Passée"); });
    card.appendChild(row);
  }

  /* ---------- construction de la page ---------- */
  $("#title").textContent = P.title;
  $("#subtitle").textContent = P.subtitle.replace(/\s*Leçon : \S+\.md\s*$/, "").replace(/\b\d+ questions\b/, total + " questions");
  document.title = P.title;

  var n = 0;
  P.sections.forEach(function (sec) {
    var s = el("section");
    if (sec.title) {
      var h2 = el("h2", null, sec.title);
      h2.appendChild(el("small", null, sec.statement ? "problème · " + sec.items.length + (sec.items.length > 1 ? " questions" : " question") : sec.items.length + (sec.items.length > 1 ? " questions" : " question")));
      s.appendChild(h2);
    }
    if (sec.statement) {
      var stm = el("div", "statement");
      stm.appendChild(el("b", null, "Énoncé"));
      stm.appendChild(el("div", "stm-text", sec.statement));
      s.appendChild(stm);
    }
    sec.items.forEach(function (item) {
      n++;
      var card = el("div", "card");
      var head = el("div", "qnum", "Question " + n + (item.label ? " · " + item.label : ""));
      if (isTest) {
        if (item.problem) head.appendChild(el("span", "ptag", "Problème"));
        head.appendChild(el("span", "qtag"));
      }
      card.appendChild(head);
      card.appendChild(el("div", "q", item.q));
      if (item.type === "num" && !item.shown) item.shown = show([].concat(item.answer)[0]);
      if (item.type === "text" && !item.shown) item.shown = item.accept[0];
      if (item.type === "qcm") (isTest ? renderTestQCM : renderQCM)(card, item);
      else (isTest ? renderTestInput : renderInput)(card, item);
      s.appendChild(card);
    });
    qs.appendChild(s);
  });

  /* ---------- outils du mode admin : répondre automatiquement ---------- */
  if (window.CRPE_IS_ADMIN === true) {
    var tools = el("span", "admin-tools");
    function adminFill(right) {
      var cards = qs.querySelectorAll("section .card");
      items.forEach(function (it, k) {
        var card = cards[k];
        if (!card || card.classList.contains("ok") || card.classList.contains("ko") || card.classList.contains("answered")) return;
        if (!right && isTest) { var sk = card.querySelector(".skip"); if (sk) sk.click(); return; }
        if (it.type === "qcm") {
          var opts = card.querySelectorAll(".opt");
          var pick = right ? it.answer : (it.answer + 1) % opts.length;
          if (opts[pick]) opts[pick].click();
          return;
        }
        if (right) {
          var inp = card.querySelector("input");
          inp.value = it.type === "text" ? it.accept[0] : [].concat(it.answer)[0];
          inp.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
        } else {
          var btns = card.querySelectorAll("button");
          for (var b = 0; b < btns.length; b++) { if (btns[b].textContent.indexOf("correction") !== -1) { btns[b].click(); break; } }
        }
      });
    }
    var okBtn = el("button", "admin-btn", "⚡ Tout juste"); okBtn.type = "button";
    var koBtn = el("button", "admin-btn", "⚡ Tout faux"); koBtn.type = "button";
    okBtn.addEventListener("click", function () { adminFill(true); });
    koBtn.addEventListener("click", function () { adminFill(false); });
    tools.appendChild(okBtn); tools.appendChild(koBtn);
    bar.appendChild(tools);
  }

  /* ---------- test de positionnement : résultats ---------- */
  var diag = el("div"); diag.id = "diag"; diag.hidden = true;
  var res = el("div", "card hidden"); res.id = "result";
  res.appendChild(el("div", "score"));
  res.appendChild(el("p", "msg"));
  res.appendChild(el("p", "best hint-text"));
  var again = el("button", "btn", "Recommencer"); again.type = "button";
  again.addEventListener("click", function () { location.reload(); });
  res.appendChild(again);
  root.appendChild(diag);
  root.appendChild(res);

  function level(pct) {
    return pct >= 80 ? { cls: "ok", label: "Acquis" } : pct >= 50 ? { cls: "mid", label: "À consolider" } : { cls: "low", label: "À travailler" };
  }
  function partKeys() { return Object.keys(P.parts || {}).sort(); }

  function computeResult() {
    var parts = {};
    partKeys().forEach(function (k) { parts[k] = { ok: 0, total: 0 }; });
    var wrong = [];
    items.forEach(function (it) {
      var p = parts[it._part] || (parts[it._part] = { ok: 0, total: 0 });
      p.total++;
      if (outcome[it._idx]) p.ok++; else wrong.push(it._idx);
    });
    return { v: 1, date: Date.now(), correct: good, total: total, parts: parts, wrong: wrong };
  }

  function finishTest() {
    var result = computeResult();
    if (P.placement) store.set("crpe:placement:" + P.placement.domain, JSON.stringify(result));
    saveBest(Math.round((result.correct / result.total) * 100));
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* ignore */ }
    showDiagnostic(result, true);
  }

  function showDiagnostic(r, fresh) {
    qs.hidden = true; bar.hidden = true; diag.hidden = false;
    diag.textContent = "";
    var note20 = Math.round((r.correct / r.total) * 200) / 10;
    var pct = Math.round((r.correct / r.total) * 100);
    var lvl = note20 >= 16 ? "Très solide : tu peux avancer vite."
      : note20 >= 12 ? "Bon niveau, avec quelques points à consolider."
      : note20 >= 8 ? "Des bases à consolider avant d'avancer."
      : "Des bases à reconstruire : pars de la première leçon.";

    var top = el("div", "diag-top");
    top.appendChild(el("div", "kicker", "Ton diagnostic"));
    var big = el("div", "diag-score");
    big.appendChild(document.createTextNode(fr(note20)));
    big.appendChild(el("small", null, " / 20"));
    top.appendChild(big);
    top.appendChild(el("p", "diag-msg", lvl));
    top.appendChild(el("p", "diag-sub", r.correct + " bonnes réponses sur " + r.total + " (" + pct + " %)" + (r.date ? " · test du " + new Date(r.date).toLocaleDateString("fr-FR") : "")));
    diag.appendChild(top);

    /* détail par sous-thème */
    var keys = partKeys();
    diag.appendChild(el("h2", "diag-h", "Détail par sous-thème"));
    var list = el("div", "parts");
    keys.forEach(function (k) {
      var p = r.parts[k] || { ok: 0, total: 0 };
      var pc = p.total ? Math.round((p.ok / p.total) * 100) : 0;
      var lv = level(pc);
      var row = el("div", "part " + lv.cls);
      var head = el("div", "part-head");
      head.appendChild(el("span", "part-num", k));
      head.appendChild(el("span", "part-name", P.parts[k].label));
      head.appendChild(el("span", "part-tag", lv.label));
      row.appendChild(head);
      var b = el("div", "part-bar"); var i = el("i"); i.style.width = pc + "%"; b.appendChild(i); row.appendChild(b);
      var foot = el("div", "part-foot");
      foot.appendChild(el("span", null, p.ok + " / " + p.total + " · " + pc + " %"));
      var a = el("a", null, pc >= 80 ? "Revoir la leçon" : "Étudier la leçon →");
      a.href = P.parts[k].lesson;
      foot.appendChild(a);
      row.appendChild(foot);
      list.appendChild(row);
    });
    diag.appendChild(list);

    /* priorités */
    var weak = keys.map(function (k) {
      var p = r.parts[k] || { ok: 0, total: 0 };
      return { k: k, pc: p.total ? Math.round((p.ok / p.total) * 100) : 0 };
    }).filter(function (x) { return x.pc < 80; }).sort(function (a, b) { return a.pc - b.pc; });
    var prio = el("div", "prio");
    if (weak.length) {
      prio.appendChild(el("h3", null, "À travailler en priorité"));
      var ol = el("ol");
      weak.slice(0, 3).forEach(function (x) {
        var li = el("li");
        var a = el("a", null, x.k + " · " + P.parts[x.k].label);
        a.href = P.parts[x.k].lesson;
        li.appendChild(a);
        li.appendChild(document.createTextNode(" (" + x.pc + " %)"));
        ol.appendChild(li);
      });
      prio.appendChild(ol);
    } else {
      prio.appendChild(el("h3", null, "Aucun point faible repéré"));
      prio.appendChild(el("p", null, "Tous les sous-thèmes sont acquis. Les leçons restent disponibles pour réviser et le bilan pour te tester."));
    }
    diag.appendChild(prio);

    /* actions */
    var actions = el("div", "diag-actions");
    var first = weak.length ? P.parts[weak[0].k].lesson : P.parts[keys[0]].lesson;
    var go = el("a", "btn blue", weak.length ? "Commencer par la leçon " + weak[0].k + " →" : "Accéder aux leçons →");
    go.href = first;
    actions.appendChild(go);
    var retry = el("button", "btn ghost", "Refaire le test"); retry.type = "button";
    retry.addEventListener("click", function () { location.hash = "refaire"; location.reload(); });
    actions.appendChild(retry);
    diag.appendChild(actions);
    diag.appendChild(el("p", "diag-note", "Les leçons, quiz, exercices et le bilan de ce thème sont maintenant déverrouillés."));

    /* corrections */
    if (r.wrong && r.wrong.length) {
      var rev = el("details", "review");
      var sm = el("summary", null, "Voir la correction des " + r.wrong.length + " questions ratées ou passées");
      rev.appendChild(sm);
      r.wrong.forEach(function (idx) {
        var it = items[idx];
        if (!it) return;
        var c = el("div", "rev-item");
        var hd = el("div", "rev-head");
        hd.appendChild(el("span", "part-num", it._part || ""));
        hd.appendChild(document.createTextNode(" " + (it._part && P.parts[it._part] ? P.parts[it._part].label : "") + (it.problem ? " · problème" : "")));
        c.appendChild(hd);
        c.appendChild(el("div", "rev-q", it.q));
        var exp = it.type === "qcm" ? it.options[it.answer] : it.shown;
        c.appendChild(el("div", "rev-a", "Réponse attendue : " + exp));
        var why = it.type === "qcm" ? it.explain : it.solution;
        if (why) c.appendChild(el("div", "rev-w", why));
        rev.appendChild(c);
      });
      diag.appendChild(rev);
    }
    if (!fresh) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (isTest && P.placement && location.hash !== "#refaire") {
    var saved = null;
    try { saved = JSON.parse(store.get("crpe:placement:" + P.placement.domain) || "null"); } catch (e) { saved = null; }
    if (saved && saved.parts) showDiagnostic(saved, false);
  }
  refresh();
})();
