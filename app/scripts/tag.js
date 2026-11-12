/* Crée et pousse le tag git v<version> (GitHub exige un tag valide pour publier une release). */
const { execSync } = require("child_process");
const version = require("../package.json").version;
const tag = "v" + version;
const run = (c) => execSync(c, { cwd: __dirname, stdio: ["ignore", "pipe", "pipe"] }).toString().trim();

if (run("git status --porcelain -- ..")) { console.error("! Des changements de app/ ne sont pas commités : commite et pousse avant de publier."); process.exit(1); }
run("git push origin HEAD");
const existing = run(`git tag --list ${tag}`);
if (!existing) run(`git tag ${tag}`);
else if (run(`git rev-list -n 1 ${tag}`) !== run("git rev-parse HEAD")) { console.error(`! Le tag ${tag} existe déjà sur un autre commit : augmente "version" dans package.json.`); process.exit(1); }
run(`git push origin ${tag}`);
console.log("Tag", tag, "poussé.");
