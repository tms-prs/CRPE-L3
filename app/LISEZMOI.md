# Cartable

Application de bureau (Electron, Windows) : une étagère de cours, hors ligne.

## Commandes (dans `app/`)

| Commande | Effet |
|---|---|
| `npm install` | installe les dépendances (une fois) |
| `npm start` | régénère le cours Maths puis lance l'app en mode développement |
| `npm run dist` | génère l'installateur `release/Cartable-Installation-<version>.exe` |
| `npm run icon` | régénère `build/icon.png` (icône de l'app) |

Le `.exe` produit est à donner tel quel : double-clic = installation (raccourci bureau + menu démarrer).

## Où est stockée la progression ?

Dans le profil de l'utilisateur Windows (`%APPDATA%\Cartable`), séparée par cours. Elle survit aux mises à jour de l'app.
Le cours Maths garde son export / import de progression (menu du site) pour passer d'un ordinateur à l'autre.

## Ajouter un cours (ex. Git)

1. Créer `app/cours/<id>/manifest.json` :

```json
{
  "id": "git",
  "titre": "Git",
  "sousTitre": "Versionner son code",
  "icone": "git",
  "couleur": "#f8c8d4",
  "couleurDos": "#e79bb0",
  "entree": "index.html",
  "ordre": 2
}
```

2. Mettre le contenu (HTML/CSS/JS autonomes, liens relatifs) dans `app/cours/<id>/site/` (l'entrée est `site/<entree>`).
3. `npm run dist`. Le livre apparaît tout seul sur l'étagère.

`icone` : `pi`, `git`, `livre`, ou n'importe quel emoji / lettre.
Chaque cours a sa propre origine (`cartable://<id>/`) : son stockage local est isolé des autres.

Le cours `maths-crpe` est régénéré depuis le site à la racine du dépôt par `scripts/sync-cours.js`
(lance `python build.py --dist`, copie `dist/`, remplace les polices Google par des polices locales).
Un cours qui n'a pas de génération automatique doit être retiré de ce script ou y être ajouté.

## Mise à jour automatique (GitHub Releases)

L'app installée vérifie au démarrage (puis toutes les 4 h) s'il existe une version plus récente publiée sur
`github.com/tms-prs/CRPE-L3/releases`. Si oui, elle la télécharge en arrière-plan, affiche un bandeau
« Mise à jour X prête — Redémarrer » et l'installe aussi toute seule à la fermeture. La progression est conservée.
Aucune vérification en mode développement (`npm start`) ni hors ligne.

### Publier une nouvelle version
1. Le dépôt doit être **public** (réglages GitHub > General > Danger Zone > Change visibility).
2. Créer un jeton GitHub (Settings > Developer settings > Personal access tokens > Tokens (classic), case `repo`).
3. Augmenter `"version"` dans `app/package.json` (ex. `1.0.0` -> `1.1.0`) : obligatoire, sinon rien n'est détecté.
4. Dans `app/` :

```bash
export GH_TOKEN=ghp_xxx   # PowerShell : $env:GH_TOKEN="ghp_xxx"
npm run publier
```

Cela construit l'installateur et crée la release `v1.1.0` avec `Cartable-Installation-1.1.0.exe` et `latest.yml`.
Les utilisateurs déjà installés se mettent à jour tout seuls. Ne jamais commiter le jeton.
Les nouveaux utilisateurs téléchargent l'exe depuis la page Releases. La 1re installation reste manuelle.
