/* Génère build/icon.png (512x512) depuis un SVG, avec Electron : `npm run icon`. */
const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbd5e0"/><stop offset=".55" stop-color="#d9cdf5"/><stop offset="1" stop-color="#bfe0f6"/></linearGradient>
<linearGradient id="wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2d7bd"/><stop offset="1" stop-color="#d2aa87"/></linearGradient>
</defs>
<rect width="512" height="512" rx="116" fill="url(#bg)"/>
<g>
<rect x="104" y="170" width="68" height="212" rx="12" fill="#f8c8d4"/><rect x="118" y="196" width="40" height="8" rx="4" fill="#fff" opacity=".85"/><rect x="118" y="214" width="26" height="8" rx="4" fill="#fff" opacity=".65"/>
<rect x="182" y="118" width="64" height="264" rx="12" fill="#bddcf5"/><circle cx="214" cy="170" r="15" fill="#fff" opacity=".8"/><rect x="196" y="334" width="36" height="8" rx="4" fill="#fff" opacity=".7"/>
<rect x="256" y="196" width="76" height="186" rx="12" fill="#c4e8d4"/><rect x="272" y="222" width="44" height="8" rx="4" fill="#fff" opacity=".85"/><rect x="272" y="240" width="44" height="8" rx="4" fill="#fff" opacity=".6"/>
<g transform="rotate(14 372 382)"><rect x="342" y="150" width="62" height="232" rx="12" fill="#fbeaa8"/><rect x="356" y="176" width="34" height="8" rx="4" fill="#fff" opacity=".9"/><rect x="356" y="194" width="22" height="8" rx="4" fill="#fff" opacity=".65"/></g>
</g>
<rect x="76" y="376" width="360" height="30" rx="10" fill="url(#wood)"/>
</svg>`;

app.whenReady().then(async () => {
  const win = new BrowserWindow({ width: 512, height: 512, show: false, frame: false, transparent: true, webPreferences: { offscreen: true } });
  await win.loadURL("data:text/html;charset=utf-8," + encodeURIComponent(`<body style="margin:0;background:transparent">${SVG}</body>`));
  await new Promise((r) => setTimeout(r, 400));
  const img = await win.webContents.capturePage({ x: 0, y: 0, width: 512, height: 512 });
  const out = path.join(__dirname, "..", "build");
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, "icon.png"), img.toPNG());
  console.log("icône écrite :", path.join(out, "icon.png"));
  app.quit();
});
