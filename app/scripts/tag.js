/* Prépare la publication : pousse le commit, crée et pousse le tag git v<version>, puis crée la release GitHub.
   - GitHub exige un tag valide pour publier une release ;
   - la release est créée ICI, avant electron-builder : sinon ses envois en parallèle créent des releases en double.
   Si le tag / la release existent déjà (relance d'une publication interrompue), ils sont conservés. */
const { execSync } = require("child_process");
const version = require("../package.json").version;
const tag = "v" + version;
const run = (c) => execSync(c, { cwd: __dirname, stdio: ["ignore", "pipe", "pipe"] }).toString().trim();

if (run("git status --porcelain -- ..")) { console.error("! Des changements de app/ ne sont pas commités : commite avant de publier."); process.exit(1); }
run("git push origin HEAD");
if (run(`git ls-remote --tags origin refs/tags/${tag}`)) console.log(`Tag ${tag} déjà présent sur GitHub : conservé.`);
else {
  if (!run(`git tag --list ${tag}`)) run(`git tag ${tag}`);
  run(`git push origin ${tag}`);
  console.log("Tag", tag, "poussé.");
}

(async () => {
  const token = process.env.GH_TOKEN;
  if (!token) { console.log("GH_TOKEN absent : release non créée (electron-builder échouera à l'envoi)."); return; }
  const h = { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "User-Agent": "cartable-tag" };
  const base = "https://api.github.com/repos/tms-prs/CRPE-L3/releases";
  const got = await fetch(`${base}/tags/${tag}`, { headers: h });
  if (got.ok) { console.log(`Release ${tag} déjà créée.`); return; }
  const made = await fetch(base, { method: "POST", headers: h, body: JSON.stringify({ tag_name: tag, name: tag, draft: false, prerelease: false }) });
  if (!made.ok) { console.error("Création de la release impossible :", made.status, await made.text()); process.exit(1); }
  console.log(`Release ${tag} créée.`);
})();
