/* Test de fumée (CARTABLE_SMOKE=<dossier de sortie>) : parcourt splash -> étagère -> cours, prend des captures, journalise les erreurs. */
const fs = require("fs");
const path = require("path");

module.exports = async function smoke(win, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const log = [];
  win.webContents.on("console-message", (_e, level, msg, line, src) => log.push(`[console ${level}] ${msg} (${src}:${line})`));
  win.webContents.on("did-fail-load", (_e, code, desc, url) => log.push(`[fail] ${code} ${desc} ${url}`));
  win.webContents.on("render-process-gone", (_e, d) => log.push("[gone] " + d.reason));
  const shot = async (name) => {
    const img = await win.webContents.capturePage();
    fs.writeFileSync(path.join(outDir, name + ".png"), img.toPNG());
  };
  const js = (code) => win.webContents.executeJavaScript(code);

  await wait(1500); await shot("1-splash-debut");
  await wait(1500); await shot("2-splash-titre");
  await wait(2800); // passage auto vers l'étagère
  log.push("url après splash : " + win.webContents.getURL());
  await wait(1800); await shot("3-etagere");
  log.push("livres : " + (await js("document.querySelectorAll('.cours').length")) + ", ghosts : " + (await js("document.querySelectorAll('.ghost').length")));
  await js("document.querySelector('.cours').dispatchEvent(new MouseEvent('mouseover',{bubbles:true}))");
  await js("document.querySelector('.cours').click()");
  await wait(2500);
  log.push("url après clic : " + win.webContents.getURL());
  await shot("4-cours-accueil");
  log.push("bouton etagere : " + (await js("!!document.getElementById('cartable-home')")));
  log.push("police display : " + (await js("getComputedStyle(document.querySelector('h1')).fontFamily")) + " / chargée : " + (await js("document.fonts.check('700 20px \"Bricolage Grotesque\"')")));
  // une leçon
  await win.loadURL("cartable://maths-crpe/lecons/nombres-et-calculs/01-nombres-relatifs.html");
  await wait(1500); await shot("5-lecon");
  await js("localStorage.setItem('crpe:test','1')");
  log.push("localStorage ok : " + (await js("localStorage.getItem('crpe:test')")));
  // retour étagère
  await js("document.getElementById('cartable-home').click()");
  await wait(1500);
  log.push("url après retour : " + win.webContents.getURL());
  fs.writeFileSync(path.join(outDir, "log.txt"), log.join("\n"));
  require("electron").app.quit();
};
