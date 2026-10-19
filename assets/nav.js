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
  function placementOf(d) {
    try { return JSON.parse(load("crpe:placement:" + d.id) || "null"); } catch (e) { return null; }
  }
  /* ---------- mode admin protégé par mot de passe ----------
     assets/admin-config.js (généré par build.py depuis creds.txt, absent du dépôt) contient
     un sel et check = SHA-256(jeton) avec jeton = SHA-256(sel + mot de passe). Le mot de passe
     n'est jamais écrit dans le site ; sans ce fichier le mode admin n'existe pas. */
  var ADMIN_CFG = window.CRPE_ADMIN || null;
  var K256 = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  function ror(x, n) { return (x >>> n) | (x << (32 - n)); }
  function sha256hex(msg) {
    var bytes = new TextEncoder().encode(msg);
    var l = bytes.length, padded = Math.ceil((l + 9) / 64) * 64;
    var buf = new Uint8Array(padded);
    buf.set(bytes);
    buf[l] = 0x80;
    var dv = new DataView(buf.buffer);
    dv.setUint32(padded - 4, (l * 8) >>> 0);
    dv.setUint32(padded - 8, Math.floor((l * 8) / 4294967296));
    var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    var w = new Uint32Array(64);
    for (var o = 0; o < padded; o += 64) {
      var i;
      for (i = 0; i < 16; i++) w[i] = dv.getUint32(o + i * 4);
      for (i = 16; i < 64; i++) {
        var s0 = ror(w[i - 15], 7) ^ ror(w[i - 15], 18) ^ (w[i - 15] >>> 3);
        var s1 = ror(w[i - 2], 17) ^ ror(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
      }
      var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
      for (i = 0; i < 64; i++) {
        var S1 = ror(e, 6) ^ ror(e, 11) ^ ror(e, 25);
        var ch = (e & f) ^ (~e & g);
        var t1 = (h + S1 + ch + K256[i] + w[i]) >>> 0;
        var S0 = ror(a, 2) ^ ror(a, 13) ^ ror(a, 22);
        var maj = (a & b) ^ (a & c) ^ (b & c);
        var t2 = (S0 + maj) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
      }
      H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
      H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
    }
    return H.map(function (x) { return ("00000000" + x.toString(16)).slice(-8); }).join("");
  }
  var storedToken = load("crpe:admin");
  var isAdmin = !!(ADMIN_CFG && storedToken && sha256hex(storedToken) === ADMIN_CFG.check);
  window.CRPE_IS_ADMIN = isAdmin;
  function cleanUrl() { return location.href.split("?")[0].split("#")[0]; }
  function adminLogout() { store("crpe:admin", "0"); location.href = cleanUrl(); }
  function openAdminLogin() {
    if (!ADMIN_CFG || document.getElementById("admin-modal")) return;
    var scrim = el("div", "modal-scrim");
    scrim.id = "admin-modal";
    var box = el("form", "modal");
    box.setAttribute("autocomplete", "off");
    box.appendChild(el("h2", null, "Mode admin"));
    box.appendChild(el("p", null, "Saisis le mot de passe administrateur."));
    var inp = el("input"); inp.type = "password"; inp.setAttribute("aria-label", "Mot de passe administrateur"); inp.autocomplete = "off";
    var err = el("p", "modal-err"); err.setAttribute("role", "alert");
    var row = el("div", "row");
    var ok = el("button", "btn", "Valider"); ok.type = "submit";
    var cancel = el("button", "btn ghost", "Annuler"); cancel.type = "button";
    row.appendChild(ok); row.appendChild(cancel);
    box.appendChild(inp); box.appendChild(err); box.appendChild(row);
    scrim.appendChild(box);
    document.body.appendChild(scrim);
    inp.focus();
    function close() { scrim.remove(); if (/[?&]admin/.test(location.search)) { try { history.replaceState(null, "", cleanUrl()); } catch (e) { /* ignore */ } } }
    cancel.addEventListener("click", close);
    scrim.addEventListener("click", function (ev) { if (ev.target === scrim) close(); });
    box.addEventListener("keydown", function (ev) { if (ev.key === "Escape") close(); });
    box.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var token = sha256hex(ADMIN_CFG.salt + inp.value);
      if (sha256hex(token) === ADMIN_CFG.check) {
        store("crpe:admin", token);
        location.href = cleanUrl();
      } else {
        err.textContent = "Mot de passe incorrect.";
        inp.value = "";
        inp.focus();
      }
    });
  }
  function unlocked(d) {
    return isAdmin || !d.placement || !!placementOf(d);
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
    ic.href = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='#2754d9'/><text x='32' y='41' font-size='38' text-anchor='middle' fill='#f6f0e1' font-family='Georgia,serif' font-style='italic'>π</text></svg>");
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

  if (isAdmin) {
    var badge0 = el("button", "admin-badge", "ADMIN ✕");
    badge0.type = "button";
    badge0.title = "Mode admin actif : tout est déverrouillé. Cliquer pour quitter.";
    badge0.addEventListener("click", adminLogout);
    nav.appendChild(badge0);
  }

  var prog = el("div", "nav-progress");
  prog.title = "Quiz, exercices et tests commencés";
  var circ = 2 * Math.PI * 16;
  prog.innerHTML = "<svg class='ring' viewBox='0 0 38 38' aria-hidden='true'><circle class='bg' cx='19' cy='19' r='16'/><circle class='fg' cx='19' cy='19' r='16' stroke-dasharray='" + circ.toFixed(1) + "' stroke-dashoffset='" + (circ * (1 - pct / 100)).toFixed(1) + "'/></svg>";
  prog.appendChild(el("span", "txt", done + " / " + ids.length + " activités"));
  nav.appendChild(prog);

  header.appendChild(nav);
  header.appendChild(mega);
  document.body.insertBefore(header, document.body.firstChild);

  /* ?admin ouvre la saisie du mot de passe ; ?admin=0 ferme la session admin */
  var qAdmin = /[?&]admin(=([^&]*))?(&|$)/.exec(location.search);
  if (qAdmin && ADMIN_CFG) {
    if (qAdmin[2] === "0" || qAdmin[2] === "off") { if (isAdmin) adminLogout(); }
    else if (!isAdmin) openAdminLogin();
  }

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
    var adminBtn = document.querySelector("[data-admin]");
    if (adminBtn) {
      if (!ADMIN_CFG) {
        adminBtn.hidden = true;   /* pas de creds.txt au build : le mode admin n'existe pas */
      } else {
        adminBtn.textContent = isAdmin ? "Quitter le mode admin" : "Mode admin";
        adminBtn.addEventListener("click", function () { if (isAdmin) adminLogout(); else openAdminLogin(); });
      }
    }
    var resetBtn = document.querySelector("[data-reset]");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (!window.confirm("Effacer toute ta progression (scores, tests de positionnement, déverrouillages) ? Cette action est définitive.")) return;
        try {
          Object.keys(localStorage).filter(function (k) { return k.indexOf("crpe:") === 0 && k !== "crpe:admin"; }).forEach(function (k) { localStorage.removeItem(k); });
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
        } else if (card.hasAttribute("data-first")) {
          card.href = abs(card.getAttribute("data-first"));
          var done2 = card.querySelector("[data-lock-note]");
          if (done2 && r) done2.textContent = "Diagnostic : " + fr(note20(r)) + " / 20";
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
