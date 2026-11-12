const { app, BrowserWindow, protocol, net, ipcMain, shell, Menu } = require("electron");
const path = require("path");
const fs = require("fs");
const { pathToFileURL } = require("url");

const SCHEME = "cartable";
const COURS_DIR = path.join(__dirname, "cours");
const SHELL_DIR = path.join(__dirname, "shell");

protocol.registerSchemesAsPrivileged([
  { scheme: SCHEME, privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true } },
]);

// tests automatisés : profil isolé (n'écrase pas la progression réelle, et pas de conflit avec une instance ouverte)
if (process.env.CARTABLE_USERDATA) app.setPath("userData", process.env.CARTABLE_USERDATA);
if (!process.env.CARTABLE_USERDATA && !app.requestSingleInstanceLock()) app.quit();

let win = null;

/* ---------- cours disponibles (un dossier = un cours, décrit par manifest.json) ---------- */
function listCours() {
  if (!fs.existsSync(COURS_DIR)) return [];
  const out = [];
  for (const id of fs.readdirSync(COURS_DIR)) {
    const dir = path.join(COURS_DIR, id);
    const mf = path.join(dir, "manifest.json");
    if (!fs.statSync(dir).isDirectory() || !fs.existsSync(mf)) continue;
    try {
      const m = JSON.parse(fs.readFileSync(mf, "utf8"));
      const entree = m.entree || "index.html";
      if (!fs.existsSync(path.join(dir, "site", entree))) continue; // cours pas encore synchronisé
      out.push({ ...m, id });
    } catch (e) { console.error("manifest invalide :", id, e.message); }
  }
  return out.sort((a, b) => (a.ordre ?? 99) - (b.ordre ?? 99) || a.titre.localeCompare(b.titre, "fr"));
}

/* ---------- protocole cartable://<hôte>/<chemin> ----------
   cartable://shell/...      -> app/shell/...
   cartable://<id-cours>/... -> app/cours/<id-cours>/site/...
   Chaque cours a sa propre origine : son localStorage (progression) est donc isolé. */
function resolveFile(url) {
  const u = new URL(url);
  const host = u.hostname;
  let base;
  if (host === "shell") base = SHELL_DIR;
  else if (/^[a-z0-9-]+$/.test(host)) base = path.join(COURS_DIR, host, "site");
  else return null;
  let rel = decodeURIComponent(u.pathname);
  if (rel.endsWith("/")) rel += "index.html";
  const file = path.normalize(path.join(base, rel));
  if (file !== base && !file.startsWith(base + path.sep)) return null; // anti path-traversal
  return fs.existsSync(file) && fs.statSync(file).isFile() ? file : null;
}

function createWindow() {
  win = new BrowserWindow({
    width: 1320, height: 860, minWidth: 900, minHeight: 600,
    show: false, backgroundColor: "#fdf6ec", title: "Cartable",
    icon: path.join(__dirname, "build", "icon.png"),
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true, nodeIntegration: false, sandbox: true,
    },
  });
  win.once("ready-to-show", () => win.show());
  win.loadURL(`${SCHEME}://shell/splash.html`);
  if (process.env.CARTABLE_SMOKE) require("./scripts/smoke.js")(win, process.env.CARTABLE_SMOKE);

  // liens externes -> navigateur système ; jamais de nouvelle fenêtre dans l'app
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: "deny" };
  });
  win.webContents.on("will-navigate", (e, url) => {
    if (!url.startsWith(SCHEME + "://")) { e.preventDefault(); if (/^https?:/i.test(url)) shell.openExternal(url); }
  });
  // raccourcis : Alt+Accueil = étagère, F11 = plein écran, Ctrl+± = zoom
  win.webContents.on("before-input-event", (e, i) => {
    if (i.type !== "keyDown") return;
    if (i.alt && i.key === "Home") { e.preventDefault(); goShelf(); }
    else if (i.key === "F11") { e.preventDefault(); win.setFullScreen(!win.isFullScreen()); }
    else if (i.control && (i.key === "+" || i.key === "=")) { e.preventDefault(); zoom(+0.5); }
    else if (i.control && i.key === "-") { e.preventDefault(); zoom(-0.5); }
    else if (i.control && i.key === "0") { e.preventDefault(); win.webContents.setZoomLevel(0); }
  });
}
function zoom(d) { const w = win.webContents; w.setZoomLevel(Math.max(-3, Math.min(5, w.getZoomLevel() + d))); }
function goShelf() { if (win) win.loadURL(`${SCHEME}://shell/shelf.html`); }

ipcMain.handle("cartable:cours", () => listCours());
ipcMain.on("cartable:ouvrir", (_e, id) => {
  const c = listCours().find((x) => x.id === id);
  if (c && win) win.loadURL(`${SCHEME}://${c.id}/${c.entree || "index.html"}`);
});
ipcMain.on("cartable:info", (e, id) => { e.returnValue = listCours().find((x) => x.id === id) || null; });
ipcMain.on("cartable:etagere", goShelf);
ipcMain.handle("cartable:version", () => app.getVersion());

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  protocol.handle(SCHEME, (req) => {
    const file = resolveFile(req.url);
    return file ? net.fetch(pathToFileURL(file).toString()) : new Response("Introuvable", { status: 404 });
  });
  createWindow();
  require("./updater").init(() => win);
});
app.on("second-instance", () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.on("window-all-closed", () => app.quit());
