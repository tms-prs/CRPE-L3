/* Supprime les anciennes releases GitHub (et leur tag) pour ne garder que les N plus récentes versions.
   Usage : node scripts/clean-releases.js [--dry]   (GH_TOKEN requis, sauf avec --dry)
   Les mises à jour lisent uniquement la dernière release : supprimer les anciennes est sans risque pour elles. */
const KEEP = 2; // version courante + la précédente (pour pouvoir revenir en arrière)
const OWNER = "tms-prs", REPO = "CRPE-L3";
const dry = process.argv.includes("--dry");
const token = process.env.GH_TOKEN;
if (!dry && !token) { console.log("GH_TOKEN absent : nettoyage des anciennes releases ignoré."); process.exit(0); }

const api = (p, opt = {}) => fetch(`https://api.github.com/repos/${OWNER}/${REPO}${p}`, {
  ...opt, headers: { Accept: "application/vnd.github+json", "User-Agent": "cartable-clean", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
});
const semver = (t) => t.replace(/^v/, "").split(".").map((n) => parseInt(n, 10) || 0);
const cmp = (a, b) => { const x = semver(a), y = semver(b); for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return y[i] - x[i]; return 0; };

(async () => {
  const res = await api("/releases?per_page=100");
  if (!res.ok) { console.error("Liste des releases impossible :", res.status); process.exit(1); }
  let all = (await res.json()).filter((r) => /^v\d+\.\d+\.\d+$/.test(r.tag_name) && !r.draft);

  /* 1. Doublons : plusieurs releases pour un même tag. Le tag pointe vers l'une d'elles ; si elle n'a pas latest.yml,
        la mise à jour automatique échoue (404). On garde celle qui contient latest.yml (sinon celle qui a le plus de fichiers). */
  const dups = [];
  for (const t of new Set(all.map((r) => r.tag_name))) {
    const group = all.filter((r) => r.tag_name === t);
    if (group.length < 2) continue;
    const score = (r) => (r.assets.some((a) => a.name === "latest.yml") ? 1000 : 0) + r.assets.length;
    group.sort((a, b) => score(b) - score(a));
    dups.push(...group.slice(1));
  }
  for (const r of dups) {
    const files = r.assets.map((a) => a.name).join(", ");
    if (dry) console.log("[dry] doublon : supprimerait la release", r.id, r.tag_name, `(${files})`);
    else console.log("Doublon supprimé", r.tag_name, r.id, (await api(`/releases/${r.id}`, { method: "DELETE" })).status);
  }
  all = all.filter((r) => !dups.includes(r));

  /* 2. Anciennes versions */
  const tags = [...new Set(all.map((r) => r.tag_name))].sort(cmp); // une version peut avoir plusieurs releases (doublons)
  const keep = tags.slice(0, KEEP);
  const old = all.filter((r) => !keep.includes(r.tag_name));
  const delTags = [...new Set(old.map((r) => r.tag_name))];
  console.log(`Versions : ${tags.join(", ")} — on garde ${keep.join(", ")}`);
  if (!old.length) { console.log("Rien à supprimer."); return; }
  for (const r of old) {
    if (dry) { console.log("[dry] supprimerait la release", r.id, r.tag_name); continue; }
    const d = await api(`/releases/${r.id}`, { method: "DELETE" });
    console.log("Release supprimée", r.tag_name, r.id, d.status);
  }
  for (const t of delTags) {
    if (dry) { console.log("[dry] supprimerait le tag", t); continue; }
    const d = await api(`/git/refs/tags/${t}`, { method: "DELETE" });
    console.log("Tag supprimé", t, d.status);
  }
})();
