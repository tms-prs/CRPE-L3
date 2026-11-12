/* Mise à jour automatique (electron-updater + GitHub Releases du dépôt tms-prs/CRPE-L3).
   - vérifie au démarrage puis toutes les 4 h (uniquement dans l'app installée) ;
   - télécharge en arrière-plan ; l'installation se fait au prochain redémarrage (ou tout de suite via le bandeau) ;
   - l'état est poussé aux pages (preload.js affiche le bandeau). */
const { app, ipcMain } = require("electron");

let state = { etat: "idle" }; // idle | checking | downloading | ready | error
let getWin = () => null;

function push(next) {
  state = { ...state, ...next };
  const w = getWin();
  if (w && !w.isDestroyed()) w.webContents.send("cartable:update", state);
}

function init(winGetter) {
  getWin = winGetter;
  ipcMain.handle("cartable:update-state", () => state);
  ipcMain.on("cartable:update-install", () => {
    try { require("electron-updater").autoUpdater.quitAndInstall(false, true); } catch (e) { /* ignore */ }
  });
  if (!app.isPackaged) return; // pas de mise à jour en développement

  let autoUpdater;
  try { ({ autoUpdater } = require("electron-updater")); } catch (e) { return; }
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.logger = null;

  autoUpdater.on("update-available", (i) => push({ etat: "downloading", version: i.version, pct: 0 }));
  autoUpdater.on("download-progress", (p) => push({ etat: "downloading", pct: Math.round(p.percent) }));
  autoUpdater.on("update-downloaded", (i) => push({ etat: "ready", version: i.version }));
  autoUpdater.on("update-not-available", () => push({ etat: "idle" }));
  autoUpdater.on("error", () => { if (state.etat !== "ready") push({ etat: "idle" }); }); // hors ligne : silencieux

  const check = () => { if (state.etat !== "downloading" && state.etat !== "ready") autoUpdater.checkForUpdates().catch(() => {}); };
  setTimeout(check, 4000);
  setInterval(check, 4 * 60 * 60 * 1000);
}

module.exports = { init, push };
