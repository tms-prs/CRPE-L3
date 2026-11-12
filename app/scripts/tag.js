/* Crée et pousse le tag git v<version> (GitHub exige un tag valide pour publier une release).
   Si le tag existe déjà sur GitHub (relance d'une publication interrompue), on le garde tel quel. */
const { execSync } = require("child_process");
const version = require("../package.json").version;
const tag = "v" + version;
const run = (c) => execSync(c, { cwd: __dirname, stdio: ["ignore", "pipe", "pipe"] }).toString().trim();

if (run("git status --porcelain -- ..")) { console.error("! Des changements de app/ ne sont pas commités : commite avant de publier."); process.exit(1); }
run("git push origin HEAD");
if (run(`git ls-remote --tags origin refs/tags/${tag}`)) { console.log(`Tag ${tag} déjà présent sur GitHub : conservé.`); process.exit(0); }
if (!run(`git tag --list ${tag}`)) run(`git tag ${tag}`);
run(`git push origin ${tag}`);
console.log("Tag", tag, "poussé.");
