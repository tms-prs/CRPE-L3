/* Vide app/release/ avant un build : évite l'accumulation des anciens installateurs (1.0.1, 1.0.2, ...). */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "release");
fs.rmSync(dir, { recursive: true, force: true });
console.log("Dossier release/ vidé.");
