# Leçon 09 — Solides, volumes et sections

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — représentation de l'espace : perspective cavalière, patrons, volumes du cube, du pavé, du prisme, du cylindre (5e), de la pyramide et du cône (4e), de la boule, sphère, grands cercles et sections (3e) ; aire du disque, unités de volume et de capacité (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 02 et 03 (aires), conversions d'unités
**Durée conseillée** : 2 h (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- nommer et décrire les solides usuels (faces, arêtes, sommets, base, hauteur) ;
- lire et construire une perspective cavalière, un patron ;
- calculer les volumes des solides usuels ;
- convertir volumes et capacités ;
- reconnaître la section d'un solide par un plan particulier ;
- repérer les erreurs types d'élèves.

---

## 1. Solides usuels

| Solide | Description | Volume |
|---|---|---|
| **Cube** d'arête `c` | 6 faces carrées | `c³` |
| **Pavé droit** `L × l × h` | 6 faces rectangulaires | `L × l × h` |
| **Prisme droit** | 2 bases polygonales identiques, faces latérales rectangles | `aire de la base × h` |
| **Cylindre de révolution** | 2 disques, une face latérale « enroulée » | `π × r² × h` |
| **Pyramide** | une base polygonale, des faces triangulaires qui se rejoignent en un sommet | `(1/3) × aire de la base × h` |
| **Cône de révolution** | un disque, une surface qui rejoint le sommet | `(1/3) × π × r² × h` |
| **Boule** de rayon `r` | tous les points à distance `≤ r` du centre | `(4/3) × π × r³` |

**Vocabulaire** : un **polyèdre** a des **faces** (planes), des **arêtes** (segments communs à deux faces), des **sommets**. La **base** est la face de référence, la **hauteur** est la distance perpendiculaire entre la base (ou les bases) et le sommet (ou l'autre base).

**Relation d'Euler** (prolongement) : pour un polyèdre convexe, `S − A + F = 2`. Cube : `8 − 12 + 6 = 2`.

---

## 2. Représenter dans l'espace

### 2.1 Perspective cavalière

On dessine un solide « de côté » sur une feuille plane avec des règles :

- les faces **parallèles au plan de la feuille** (face avant) sont dessinées en **vraie grandeur** ;
- les arêtes **perpendiculaires** à ce plan (arêtes « fuyantes ») sont dessinées **obliques** et **raccourcies** ;
- les arêtes **cachées** sont en **pointillés** ;
- les parallèles restent parallèles.

```svg Un cube en perspective cavalière : la face avant en vraie grandeur, les arêtes cachées en pointillés.
<svg viewBox="0 0 280 230" width="280" role="img" aria-label="Cube en perspective cavalière">
  <path class="fs" d="M60 100H160V200H60Z"/>
  <path class="s" d="M60 100L100 70H200V170L160 200M160 100L200 70"/>
  <path class="s d" d="M100 70V170H200M100 170L60 200"/>
  <text class="m" x="86" y="226">face avant (vraie grandeur)</text>
</svg>
```

### 2.2 Patrons

Un **patron** est le dessin à plat des faces d'un solide, qu'on découpe puis plie.

- **Cube** : 11 patrons différents (6 carrés).
- **Pavé droit** : 6 rectangles (les faces opposées sont identiques).
- **Cylindre** : 2 disques et un rectangle de longueur `2πr` (le périmètre du disque) et de largeur `h`.
- **Pyramide** : la base et les faces triangulaires.
- **Cône** : un disque et un secteur circulaire.

**Mise en relation** : on reconnaît qu'un patron est correct en cherchant les arêtes qui se rejoignent à la fermeture.

```svg Un cylindre : deux disques (bases) de rayon r et une hauteur h.
<svg viewBox="0 0 240 200" width="240" role="img" aria-label="Cylindre de révolution">
  <path class="fs" d="M50 50V150A60 18 0 0 0 170 150V50Z"/>
  <ellipse class="fs" cx="110" cy="50" rx="60" ry="18"/>
  <path class="s d" d="M50 150A60 18 0 0 1 170 150"/>
  <path class="sb d" d="M110 50L170 50M170 50V150"/>
  <text class="b" x="130" y="44">r</text><text class="b" x="176" y="106">h</text>
</svg>
```

---

## 3. Calculer des volumes

### 3.1 Aire du disque et périmètre du cercle

- Périmètre du cercle : `2πr`.
- Aire du disque : `πr²`.

### 3.2 Exemples

- **Pavé** `5 × 4 × 3` : `60`.
- **Prisme** : base triangulaire de `6 cm²`, hauteur `10 cm` : `60 cm³`.
- **Cylindre** : `r = 3 cm`, `h = 5 cm` : `V = π × 3² × 5 = 45π ≈ 141,4 cm³`.
- **Pyramide** : base carrée de côté `6`, `h = 5` : `V = 36 × 5 ÷ 3 = 60`.
- **Cône** : `r = 3`, `h = 4` : `V = π × 9 × 4 ÷ 3 = 12π ≈ 37,7`.
- **Boule** : `r = 3` : `V = (4/3) × π × 27 = 36π ≈ 113,1`.

On donne souvent la **valeur exacte** (avec `π`) puis une **valeur approchée**.

### 3.3 Remarque sur le cône et la pyramide

Le volume d'une pyramide (ou d'un cône) est le **tiers** du volume du prisme (ou du cylindre) de même base et de même hauteur.

---

## 4. Unités de volume et de capacité

### 4.1 Volumes

Pour les volumes, on passe d'une unité à la suivante par un facteur `1 000` :

`1 m³ = 1 000 dm³ = 1 000 000 cm³`

### 4.2 Capacités

`1 L = 1 dm³ = 1 000 cm³ = 1 000 mL`  et  `1 m³ = 1 000 L`.

**Exemple.** Un aquarium de `50 cm × 30 cm × 40 cm` a un volume de `60 000 cm³ = 60 dm³ = 60 L`.

---

## 5. Sphère, boule et sections

### 5.1 Sphère et boule

- La **sphère** de centre `O` et de rayon `r` est l'ensemble des points situés à la distance `r` de `O` (la « surface »).
- La **boule** est la sphère avec son intérieur.
- Un **grand cercle** est la section de la sphère par un plan passant par son centre : son rayon est celui de la sphère. Un **diamètre** vaut `2r`.

### 5.2 Sections par un plan

| Solide | Plan | Section |
|---|---|---|
| Pavé droit | parallèle à une face | rectangle identique à cette face |
| Pavé droit | parallèle à une arête | rectangle |
| Cylindre | perpendiculaire à l'axe | disque de même rayon que le cylindre |
| Cylindre | parallèle à l'axe | rectangle |
| Boule | un plan quelconque | un disque ; un **grand cercle** si le plan passe par le centre |

---

## 6. Problèmes types

**Problème 1.** Une boîte `L = 20 cm`, `l = 15 cm`, `h = 10 cm`. Volume en `cm³` puis en `L` ?
`20 × 15 × 10 = 3 000 cm³ = 3 L`.

**Problème 2.** Une canette cylindrique a un rayon de `3,3 cm` et une hauteur de `12 cm`. Son volume, arrondi au `cm³` ?
`π × 3,3² × 12 ≈ 410 cm³` (soit environ `0,41 L`).

**Problème 3.** Une pyramide de base carrée de côté `10 cm` et de hauteur `9 cm`. Volume ?
`(1/3) × 100 × 9 = 300 cm³`.

**Problème 4.** Un ballon est une boule de rayon `11 cm`. Son volume, arrondi au dixième de `dm³` ?
`(4/3) × π × 11³ ≈ 5 575 cm³ ≈ 5,6 dm³`.

**Problème 5.** Quelle est la section d'une boule de rayon `5 cm` par un plan passant par son centre ? Quel est son rayon ?
Un grand cercle (disque) de rayon `5 cm`.

---

## 7. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Conversion de volumes par 10 ou 100 | `1 m³ = 100 dm³` | Transfert des longueurs ou des aires | Remplir un cube de `1 dm` de côté avec `1 000` petits cubes |
| Oublier le tiers | volume du cône `π r² h` | Confusion avec le cylindre | Remplir un cône d'eau et le verser dans un cylindre : 3 fois |
| Confondre aire et volume | `cm²` à la place de `cm³` | Grandeurs mal distinguées | Écrire l'unité à chaque calcul |
| Confondre rayon et diamètre | `V = π × 6² × h` pour `d = 6` | Donnée mal lue | Surligner « rayon » ou « diamètre » dans l'énoncé |
| Mal placer la hauteur du cône | hauteur = génératrice | Arête latérale prise pour hauteur | Dessiner la hauteur perpendiculaire à la base |
| Patron impossible | patron de cube avec 4 carrés en ligne et 3 autres | Pas de mise en relation | Découper, plier, vérifier |
| Rayon au lieu du carré | `π r h` | Formule mal mémorisée | Retrouver `πr²` comme aire de la base |

**Outils** : solides réels, patrons à découper, remplissage (eau, sable), logiciel de géométrie 3D, papier isométrique.

---

## 8. À retenir

- `V(cube) = c³` ; `V(pavé) = L × l × h` ; `V(prisme) = B × h` ; `V(cylindre) = πr²h`.
- `V(pyramide) = (1/3) B h` ; `V(cône) = (1/3) πr²h` ; `V(boule) = (4/3) πr³`.
- Volumes : facteur `1 000` entre deux unités ; `1 dm³ = 1 L`.
- Perspective cavalière : face avant en vraie grandeur, fuyantes obliques et raccourcies, cachées en pointillés.
- Sections : pavé parallèle à une face → rectangle ; cylindre perpendiculaire à l'axe → disque ; boule → disque (grand cercle si le plan passe par le centre).

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/09-solides-volumes.html](../../quiz/espace-et-geometrie/09-solides-volumes.html)
- Exercices : [exercices/espace-et-geometrie/09-solides-volumes.html](../../exercices/espace-et-geometrie/09-solides-volumes.html)

## Pistes de prolongement (culture mathématique)

- Solides de Platon et formule d'Euler ; illustrations de Léonard de Vinci pour *De divina proportione*.
- Le volume de la boule d'après Archimède : les deux tiers du cylindre qui la contient.
- Pyramides égyptiennes, pyramide du Louvre.
