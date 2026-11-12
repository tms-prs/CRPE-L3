/* Prépare les cours embarqués dans l'app.
   Cours "maths-crpe" : régénère le site (python build.py --dist), copie dist/ dans
   cours/maths-crpe/site/ et remplace les polices Google par des polices locales (hors ligne). */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const APP = path.resolve(__dirname, "..");
const ROOT = path.resolve(APP, "..");
const SITE = path.join(APP, "cours", "maths-crpe", "site");

function build() {
  for (const py of ["python", "py", "python3"]) {
    const r = spawnSync(py, ["build.py", "--dist"], { cwd: ROOT, stdio: "inherit", shell: process.platform === "win32" });
    if (r.status === 0) return;
  }
  throw new Error("Impossible d'exécuter `python build.py --dist` (Python est requis pour régénérer le cours).");
}

function copyDir(src, dst) { fs.cpSync(src, dst, { recursive: true }); }

function fonts() {
  const nm = path.join(APP, "node_modules");
  const out = path.join(SITE, "assets", "fonts");
  fs.mkdirSync(out, { recursive: true });
  const defs = [
    { fam: "Bricolage Grotesque", pkg: "@fontsource-variable/bricolage-grotesque", file: "bricolage-grotesque-latin-wght-normal.woff2", w: "200 800", style: "normal" },
    { fam: "DM Sans", pkg: "@fontsource-variable/dm-sans", file: "dm-sans-latin-wght-normal.woff2", w: "100 1000", style: "normal" },
    { fam: "DM Sans", pkg: "@fontsource-variable/dm-sans", file: "dm-sans-latin-wght-italic.woff2", w: "100 1000", style: "italic" },
    { fam: "Instrument Serif", pkg: "@fontsource/instrument-serif", file: "instrument-serif-latin-400-normal.woff2", w: "400", style: "normal" },
    { fam: "Instrument Serif", pkg: "@fontsource/instrument-serif", file: "instrument-serif-latin-400-italic.woff2", w: "400", style: "italic" },
    { fam: "JetBrains Mono", pkg: "@fontsource/jetbrains-mono", file: "jetbrains-mono-latin-400-normal.woff2", w: "400", style: "normal" },
    { fam: "JetBrains Mono", pkg: "@fontsource/jetbrains-mono", file: "jetbrains-mono-latin-500-normal.woff2", w: "500", style: "normal" },
    { fam: "JetBrains Mono", pkg: "@fontsource/jetbrains-mono", file: "jetbrains-mono-latin-700-normal.woff2", w: "700", style: "normal" },
  ];
  let css = "";
  for (const d of defs) {
    fs.copyFileSync(path.join(nm, d.pkg, "files", d.file), path.join(out, d.file));
    css += `@font-face{font-family:'${d.fam}';font-style:${d.style};font-weight:${d.w};font-display:swap;src:url('fonts/${d.file}') format('woff2');}\n`;
  }
  const cssPath = path.join(SITE, "assets", "style.css");
  let s = fs.readFileSync(cssPath, "utf8");
  const next = s.replace(/@import url\('https:\/\/fonts\.googleapis\.com[^']*'\);/, css);
  if (next === s) console.warn("! @import Google Fonts introuvable dans style.css (déjà remplacé ?)");
  fs.writeFileSync(cssPath, next + fs.readFileSync(path.join(__dirname, "theme-pastel.css"), "utf8"));
}

function shellFonts() {
  const nm = path.join(APP, "node_modules");
  const out = path.join(APP, "shell", "fonts");
  fs.mkdirSync(out, { recursive: true });
  for (const [pkg, f] of [
    ["@fontsource-variable/bricolage-grotesque", "bricolage-grotesque-latin-wght-normal.woff2"],
    ["@fontsource/instrument-serif", "instrument-serif-latin-400-italic.woff2"],
    ["@fontsource/instrument-serif", "instrument-serif-latin-400-normal.woff2"],
  ]) fs.copyFileSync(path.join(nm, pkg, "files", f), path.join(out, f));
}

build();
shellFonts();
fs.rmSync(SITE, { recursive: true, force: true });
copyDir(path.join(ROOT, "dist"), SITE);
fonts();

/* Dans l'app, la progression est déjà enregistrée localement : on retire export / import / réinitialisation
   du pied de page (le mode admin reste). Le site web d'origine n'est pas modifié. */
{
  const idx = path.join(SITE, "index.html");
  const html = fs.readFileSync(idx, "utf8");
  const out = html
    .replace(/<button[^>]*data-export[^>]*>.*?<\/button>/s, "")
    .replace(/<button[^>]*data-import[^>]*>.*?<\/button>/s, "")
    .replace(/<input[^>]*data-import-file[^>]*>/s, "")
    .replace(/<button[^>]*data-reset[^>]*>.*?<\/button>/s, "");
  if (out === html) console.warn("! boutons export/import/reset introuvables dans index.html");
  fs.writeFileSync(idx, out);
}
console.log("Cours maths-crpe synchronisé :", SITE);
