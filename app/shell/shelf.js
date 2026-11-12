(function () {
  "use strict";
  var PER_ROW = window.innerWidth <= 1100 ? 3 : 4;
  var MIN_SLOTS = PER_ROW * 2;

  /* icônes disponibles pour un manifest ("icone") ; sinon le texte du champ est affiché tel quel (emoji, lettre…) */
  var ICONS = {
    pi: "π",
    git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="2.4"/><circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="9" r="2.4"/><path d="M6 7.400v9.200M18 11.400c0 4-6 3-11 6"/></svg>',
    livre: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.500A2.500 2.500 0 0 1 6.500 3H20v16H6.500A2.500 2.500 0 0 0 4 21.500z"/><path d="M4 21.500V5.500"/></svg>'
  };
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function text(tag, cls, s) { var e = el(tag, cls); e.textContent = s; return e; }

  function book(c, i) {
    var b = el("button", "cours");
    b.type = "button";
    b.style.setProperty("--c", c.couleur || "#bddcf5");
    b.style.setProperty("--d", c.couleurDos || "#8fbbe3");
    b.style.setProperty("--i", i);
    b.setAttribute("aria-label", "Ouvrir : " + c.titre);
    var body = el("span", "body");
    var ico = el("span", "ico");
    var key = c.icone || "livre";
    if (ICONS[key]) ico.innerHTML = ICONS[key]; else ico.textContent = key;
    body.appendChild(ico);
    body.appendChild(text("span", "t", c.titre));
    if (c.sousTitre) body.appendChild(text("span", "s", c.sousTitre));
    b.appendChild(body);
    b.addEventListener("click", function () {
      if (b.classList.contains("open")) return;
      b.classList.add("open"); document.querySelector(".app").classList.add("leaving");
      setTimeout(function () { window.cartable.ouvrir(c.id); }, 420);
    });
    return b;
  }
  function ghost(i) {
    var g = el("div", "ghost", "<b>+</b><span>Bientôt</span>");
    g.style.setProperty("--i", i);
    return g;
  }

  function render(list) {
    var root = document.getElementById("shelves");
    var slots = Math.max(MIN_SLOTS, Math.ceil((list.length + 1) / PER_ROW) * PER_ROW);
    var row = null;
    for (var i = 0; i < slots; i++) {
      if (i % PER_ROW === 0) { row = el("div", "row"); root.appendChild(row); }
      var slot = el("div", "slot");
      slot.appendChild(i < list.length ? book(list[i], i) : ghost(i));
      row.appendChild(slot);
    }
    var first = root.querySelector(".cours");
    if (first) first.focus({ preventScroll: true });
  }

  window.cartable.cours().then(render).catch(function () { render([]); });
  window.cartable.version().then(function (v) {
    document.getElementById("foot").textContent = "Cartable v" + v + " · ta progression est enregistrée sur cet ordinateur.";
  });
})();
