const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("cartable", {
  cours: () => ipcRenderer.invoke("cartable:cours"),
  ouvrir: (id) => ipcRenderer.send("cartable:ouvrir", id),
  etagere: () => ipcRenderer.send("cartable:etagere"),
  version: () => ipcRenderer.invoke("cartable:version"),
});

/* ---- bandeau de mise à jour (toutes les pages) ---- */
{
  const UCSS = `
#ct-upd{position:fixed;right:16px;bottom:16px;z-index:2147483001;display:flex;align-items:center;gap:12px;max-width:380px;padding:12px 14px 12px 16px;border-radius:18px;
  font:600 14.5px/1.25 "Bricolage Grotesque","DM Sans",system-ui,sans-serif;color:#5b4a6b;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);
  box-shadow:0 14px 34px -10px rgba(91,74,107,.38),inset 0 0 0 1.5px rgba(215,201,242,.9);animation:ct-upin .5s cubic-bezier(.2,.8,.2,1)}
@keyframes ct-upin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
#ct-upd .tx{flex:1}#ct-upd small{display:block;font-weight:500;color:#9a8ba8;margin-top:2px}
#ct-upd .pg{height:5px;border-radius:9px;background:rgba(155,139,168,.2);overflow:hidden;margin-top:7px}
#ct-upd .pg i{display:block;height:100%;border-radius:9px;background:linear-gradient(90deg,#f8c8d4,#a08de6);transition:width .4s}
#ct-upd button{border:0;border-radius:999px;padding:9px 15px;font:700 13.5px/1 inherit;font-family:inherit;color:#fff;cursor:pointer;background:linear-gradient(135deg,#e58aa5,#a08de6 60%,#7fb5e8)}
#ct-upd button:hover{filter:brightness(1.06)}
@media print{#ct-upd{display:none}}`;
  let box = null;
  function render(s) {
    if (!s || (s.etat !== "downloading" && s.etat !== "ready")) { if (box) { box.remove(); box = null; } return; }
    if (!document.body) return;
    if (!box) {
      const st = document.createElement("style"); st.textContent = UCSS; document.head.appendChild(st);
      box = document.createElement("div"); box.id = "ct-upd"; document.body.appendChild(box);
    }
    box.textContent = "";
    const tx = document.createElement("div"); tx.className = "tx";
    const v = s.version ? " " + String(s.version).replace(/[<>&]/g, "") : "";
    if (s.etat === "downloading") {
      tx.textContent = "Mise à jour" + v + " en cours…";
      const pg = document.createElement("div"); pg.className = "pg";
      const bar = document.createElement("i"); bar.style.width = (s.pct || 0) + "%"; pg.appendChild(bar); tx.appendChild(pg);
      box.appendChild(tx);
    } else {
      tx.textContent = "Mise à jour" + v + " prête";
      const sm = document.createElement("small"); sm.textContent = "Ta progression est conservée."; tx.appendChild(sm);
      const b = document.createElement("button"); b.type = "button"; b.textContent = "Redémarrer";
      b.addEventListener("click", () => ipcRenderer.send("cartable:update-install"));
      box.appendChild(tx); box.appendChild(b);
    }
  }
  ipcRenderer.on("cartable:update", (_e, s) => render(s));
  window.addEventListener("DOMContentLoaded", () => { ipcRenderer.invoke("cartable:update-state").then(render).catch(() => {}); });
}

/* ---------------------------------------------------------------------------
   Dans un cours (hôte ≠ shell) :
   1. écran d'ouverture animé, monté dès le début du chargement puis effacé en fondu ;
   2. bouton « Étagère » en haut à gauche (dans l'en-tête du site, dont le contenu est décalé).
--------------------------------------------------------------------------- */
if (location.protocol === "cartable:" && location.hostname !== "shell") {
  let info = {};
  try { info = ipcRenderer.sendSync("cartable:info", location.hostname) || {}; } catch (e) { /* ignore */ }
  const c1 = info.couleur || "#bddcf5";
  const c2 = info.couleurDos || "#8fbbe3";
  const ICONS = {
    pi: "π",
    git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="2.4"/><circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="9" r="2.4"/><path d="M6 7.4v9.2M18 11.4c0 4-6 3-11 6"/></svg>',
    livre: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5"/></svg>',
  };
  const iconHtml = ICONS[info.icone || "livre"] || String(info.icone || "").replace(/[<>&]/g, "");
  const esc = (s) => String(s || "").replace(/[<>&]/g, "");

  const CSS = `
#ct-load{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;overflow:hidden;
  font-family:"Bricolage Grotesque","Segoe UI",system-ui,sans-serif;color:#5b4a6b;
  background:radial-gradient(900px 600px at 20% 15%,${c1}88,transparent 62%),radial-gradient(900px 600px at 85% 90%,#e6f3f1,transparent 62%),linear-gradient(160deg,#fff4e8,#fdeef0);
  transition:opacity .6s ease,transform .6s cubic-bezier(.2,.8,.2,1),filter .6s ease}
html.ct-loading{overflow:hidden!important}
#ct-load.out{opacity:0;transform:scale(1.05);filter:blur(6px);pointer-events:none}
#ct-load .box{display:flex;flex-direction:column;align-items:center;gap:14px;animation:ct-pop .6s cubic-bezier(.2,.8,.2,1) both}
@keyframes ct-pop{from{opacity:0;transform:translateY(14px) scale(.92)}to{opacity:1;transform:none}}
#ct-load .tile{position:relative;width:104px;height:104px;border-radius:30px;display:grid;place-items:center;
  font:400 66px/1 "Instrument Serif",Georgia,serif;background:linear-gradient(145deg,#fff,${c1});box-shadow:0 18px 40px -14px ${c2},inset 0 0 0 2px rgba(255,255,255,.8);
  animation:ct-float 2.2s ease-in-out infinite}
#ct-load .tile svg{width:54px;height:54px}
#ct-load .tile::before,#ct-load .tile::after{content:"";position:absolute;inset:-8px;border-radius:38px;border:2px solid ${c2};opacity:0;animation:ct-ring 2s ease-out infinite}
#ct-load .tile::after{animation-delay:1s}
@keyframes ct-ring{0%{transform:scale(.9);opacity:.55}100%{transform:scale(1.45);opacity:0}}
@keyframes ct-float{50%{transform:translateY(-8px) rotate(-2deg)}}
#ct-load .t{font-weight:800;font-size:34px;letter-spacing:-.03em;margin-top:6px}
#ct-load .s{font:italic 400 21px "Instrument Serif",Georgia,serif;color:#9a8ba8;margin-top:-8px}
#ct-load .bar{width:210px;height:6px;border-radius:99px;background:rgba(155,139,168,.22);overflow:hidden;margin-top:10px}
#ct-load .bar i{display:block;height:100%;width:40%;border-radius:99px;background:linear-gradient(90deg,#f8c8d4,#d7c9f2,${c1});animation:ct-slide 1.1s cubic-bezier(.6,0,.4,1) infinite}
@keyframes ct-slide{0%{transform:translateX(-110%)}100%{transform:translateX(260%)}}
@media (prefers-reduced-motion:reduce){#ct-load *{animation-duration:.01s!important}}

#cartable-home{position:fixed;left:14px;top:13px;z-index:2147483000;display:flex;align-items:center;gap:9px;height:44px;
  padding:0 20px 0 12px;border:0;border-radius:999px;cursor:pointer;font:700 15.5px/1 "Bricolage Grotesque","DM Sans",system-ui,sans-serif;letter-spacing:-.01em;
  color:#fff;background:linear-gradient(135deg,#e58aa5,#a08de6 60%,#7fb5e8);
  box-shadow:0 8px 22px -6px rgba(143,121,220,.7),inset 0 0 0 2px rgba(255,255,255,.45);
  transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s,filter .2s}
#cartable-home:hover{transform:translateY(-2px) scale(1.04);filter:saturate(1.1) brightness(1.04);box-shadow:0 14px 28px -8px rgba(143,121,220,.8),inset 0 0 0 2px rgba(255,255,255,.55)}
#cartable-home:active{transform:scale(.97)}
#cartable-home .ar{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.28);display:grid;place-items:center;transition:transform .25s cubic-bezier(.2,.8,.2,1)}
#cartable-home:hover .ar{transform:translateX(-3px)}
#cartable-home svg{width:17px;height:17px}
#cartable-home:focus-visible{outline:3px solid #5b4a6b;outline-offset:3px}
.site-header .nav{padding-left:168px!important}
@media print{#cartable-home,#ct-load{display:none!important}}`;

  // --- écran d'ouverture (dès que le document existe) ---
  const t0 = Date.now();
  const load = document.createElement("div");
  load.id = "ct-load";
  load.innerHTML = `<div class="box"><div class="tile">${iconHtml}</div><div class="t">${esc(info.titre)}</div><div class="s">J’ouvre ton cours…</div><div class="bar"><i></i></div></div>`;
  const style = document.createElement("style");
  style.textContent = CSS;
  let mounted = false;
  function mount() {
    if (mounted || !document.documentElement) return;
    mounted = true;
    (document.head || document.documentElement).appendChild(style);
    document.documentElement.classList.add("ct-loading");
    document.documentElement.appendChild(load);
  }
  mount();
  if (!mounted) {
    const mo = new MutationObserver(() => { mount(); if (mounted) mo.disconnect(); });
    mo.observe(document, { childList: true, subtree: true });
  }
  function hide() {
    const wait = Math.max(0, 1000 - (Date.now() - t0)); // visible au moins ~1 s : pas de flash
    setTimeout(() => { load.classList.add("out"); setTimeout(() => { load.remove(); document.documentElement.classList.remove("ct-loading"); }, 700); }, wait);
  }
  window.addEventListener("load", hide, { once: true });
  setTimeout(hide, 8000); // garde-fou

  // --- bouton retour ---
  window.addEventListener("DOMContentLoaded", () => {
    mount();
    const b = document.createElement("button");
    b.id = "cartable-home"; b.type = "button"; b.title = "Retour à l'étagère (Alt + Accueil)";
    b.setAttribute("aria-label", "Retour à l'étagère");
    b.innerHTML = '<span class="ar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></span><span>Étagère</span>';
    b.addEventListener("click", () => ipcRenderer.send("cartable:etagere"));
    document.body.appendChild(b);
  });
}
