# Leçon 02 — Triangles et droites remarquables

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — triangles : triangles particuliers, somme des angles (démonstration), construction, médiatrices, cercle circonscrit, hauteurs, médianes, aire (5e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçon 01 (angles, parallélisme), vocabulaire de base (milieu, perpendiculaire, rayon)
**Durée conseillée** : 2 h (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- reconnaître et caractériser les triangles particuliers ;
- démontrer et utiliser la somme des angles d'un triangle ;
- construire un triangle à partir de données partielles ;
- définir et construire médiatrices, cercle circonscrit, hauteurs, médianes ;
- calculer l'aire d'un triangle ;
- repérer les erreurs types d'élèves.

---

## 1. Triangles particuliers

| Triangle | Définition | Propriété utile |
|---|---|---|
| **Isocèle** en `A` | `AB = AC` (deux côtés égaux) | angles à la base égaux : `B̂ = Ĉ` |
| **Équilatéral** | trois côtés égaux | trois angles de `60°` |
| **Rectangle** en `A` | un angle droit en `A` | les deux autres angles sont complémentaires |
| **Isocèle rectangle** | angle droit et deux côtés égaux | angles `90°`, `45°`, `45°` |

On code les figures : traits identiques pour les longueurs égales, arcs identiques pour les angles égaux, petit carré pour l'angle droit.

---

## 2. Somme des angles d'un triangle

**Propriété** : dans un triangle, la somme des mesures des trois angles est `180°`.

**Démonstration** (attendue d'un futur enseignant). Soit `ABC` un triangle. On trace la parallèle à `(BC)` passant par `A`.

- L'angle `B̂` et l'angle formé à gauche de `A` sont **alternes-internes** : ils sont égaux.
- L'angle `Ĉ` et l'angle formé à droite de `A` sont **alternes-internes** : ils sont égaux.
- Ces deux angles, avec `Â`, forment un angle plat : `180°`.

Donc `Â + B̂ + Ĉ = 180°`.

**Conséquences** :

- le troisième angle se calcule : `Ĉ = 180° − Â − B̂` ;
- triangle équilatéral : `180° ÷ 3 = 60°` ;
- triangle rectangle : `B̂ + Ĉ = 90°` ;
- triangle isocèle de sommet `A` : `B̂ = Ĉ = (180° − Â) ÷ 2`.

**Exemple.** Triangle isocèle avec un angle au sommet de `40°`. Chaque angle à la base mesure `(180° − 40°) ÷ 2 = 70°`.

---

## 3. Construire un triangle

On construit à la règle graduée, à l'équerre, au rapporteur et au compas.

| Données | Méthode |
|---|---|
| Trois côtés | tracer un côté, puis deux arcs de cercle aux deux extrémités : le troisième sommet est à l'intersection |
| Deux côtés et l'angle compris | tracer l'angle au rapporteur, reporter les longueurs sur les côtés |
| Un côté et les deux angles adjacents | tracer le côté, puis les deux angles à ses extrémités |

**Remarque** : trois longueurs ne forment pas toujours un triangle. Il faut que le plus grand côté soit **plus petit que la somme des deux autres** (ex. `2 ; 3 ; 8` est impossible, `5 ; 6 ; 7` est possible).

---

## 4. Médiatrices et cercle circonscrit

### 4.1 Médiatrice

La **médiatrice** d'un segment est la droite **perpendiculaire** au segment en son **milieu**.

**Propriété caractéristique** : un point est sur la médiatrice de `[AB]` **si et seulement si** il est à égale distance de `A` et de `B`.

### 4.2 Cercle circonscrit

Les trois médiatrices d'un triangle sont **concourantes** en un point `O`, équidistant des trois sommets. `O` est le centre du **cercle circonscrit** au triangle (le cercle qui passe par les trois sommets).

```svg Les médiatrices du triangle se coupent en O, centre du cercle circonscrit.
<svg viewBox="0 20 360 300" width="360" role="img" aria-label="Triangle, médiatrices et cercle circonscrit">
  <circle class="s" cx="180" cy="181.4" r="121.4" style="stroke:#667295"/>
  <path class="fs" d="M60 200L300 200L180 60Z"/>
  <path class="sb d" d="M180 200L180 181.4M120 130L180 181.4M240 130L180 181.4"/>
  <circle class="pb" cx="180" cy="181.4" r="5"/>
  <circle class="pt" cx="60" cy="200" r="4"/><circle class="pt" cx="300" cy="200" r="4"/><circle class="pt" cx="180" cy="60" r="4"/>
  <circle class="pt" cx="180" cy="200" r="3"/><circle class="pt" cx="120" cy="130" r="3"/><circle class="pt" cx="240" cy="130" r="3"/>
  <text x="38" y="216">A</text><text x="304" y="216">B</text><text x="176" y="50">C</text>
  <text class="b" x="188" y="176">O</text>
</svg>
```

**Construction** : tracer deux médiatrices (compas) ; leur intersection est `O` ; le cercle de centre `O` passant par `A` passe aussi par `B` et `C`.

---

## 5. Hauteurs, médianes, bissectrices

| Droite | Définition | Propriété |
|---|---|---|
| **Hauteur** issue de `A` | droite passant par `A` et **perpendiculaire** à `(BC)` | les trois hauteurs sont **concourantes** (orthocentre) |
| **Médiane** issue de `A` | droite (ou segment) joignant `A` au **milieu** de `[BC]` | les trois médianes sont concourantes (centre de gravité) |
| **Bissectrice** de `Â` | demi-droite qui coupe `Â` en deux angles égaux | les trois bissectrices sont concourantes (centre du cercle inscrit) |

**Propriété de la médiane** : une médiane partage le triangle en **deux triangles de même aire** (même base car `M` est le milieu, même hauteur).

Dans un triangle **isocèle** en `A`, la hauteur, la médiane, la bissectrice issues de `A` et la médiatrice de `[BC]` sont **confondues**.

---

## 6. Aire d'un triangle

On choisit un côté comme **base** `b`, et la **hauteur** `h` correspondante (perpendiculaire à la base, issue du sommet opposé) :

`Aire = (b × h) ÷ 2`

```svg Le triangle de base b et de hauteur h a pour aire (b × h) ÷ 2.
<svg viewBox="0 0 340 220" width="340" role="img" aria-label="Triangle avec sa hauteur">
  <path class="fs" d="M50 170L290 170L200 40Z"/>
  <path class="sb d" d="M200 40V170"/>
  <path class="s" d="M200 170h-12v-12h12"/>
  <text class="b" x="160" y="196">base b</text><text class="b" x="208" y="112">h</text>
</svg>
```

- La hauteur peut tomber **hors** du triangle (triangle obtus) : on prolonge la base.
- Les trois couples (base, hauteur) donnent la même aire.

**Exemple.** `b = 8 cm`, `h = 5 cm` : aire `= 8 × 5 ÷ 2 = 20 cm²`.

---

## 7. Problèmes types

**Problème 1.** Un triangle isocèle a un angle à la base de `65°`. Quel est l'angle au sommet ?
`180° − 2 × 65° = 50°`.

**Problème 2.** Les angles d'un triangle mesurent `x`, `2x` et `3x`. Calculer `x`.
`x + 2x + 3x = 180°` donc `6x = 180°` et `x = 30°`. Les angles sont `30°`, `60°`, `90°` : triangle rectangle.

**Problème 3.** Montrer que dans un triangle rectangle `ABC` en `A`, les angles `B̂` et `Ĉ` sont complémentaires.
`Â = 90°` et `Â + B̂ + Ĉ = 180°`, donc `B̂ + Ĉ = 90°`.

**Problème 4.** Un triangle a une base de `12 cm` et une aire de `30 cm²`. Quelle est la hauteur ?
`h = 2 × 30 ÷ 12 = 5 cm`.

---

## 8. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Hauteur non perpendiculaire | hauteur « penchée » le long d'un côté | Confusion hauteur / médiane / côté | Utiliser l'équerre, tracer sur papier calque |
| Oublier le `÷ 2` | aire `= b × h` | Assimilation au rectangle | Découper le rectangle en deux triangles |
| Confondre médiane et médiatrice | « médiatrice issue d'un sommet » | Vocabulaire proche | Tableau comparatif, schémas colorés |
| Mesurer au lieu de justifier | « 62° + 70° + 48° = 180° car j'ai mesuré » | Perception comme preuve | Calculer le 3e angle, demander la propriété |
| Croire que la hauteur est toujours à l'intérieur | triangle obtus mal traité | Figures prototypiques | Varier les orientations et triangles obtus |
| Confondre angle droit et côtés égaux | isocèle ≠ rectangle | Statut des propriétés | Cartes de classement, contre-exemples |

**Outils** : papier calque, équerre, compas, logiciel de géométrie dynamique, plis (médiatrice par pliage), découpage.

---

## 9. À retenir

- Somme des angles d'un triangle : `180°` (preuve avec la parallèle et les angles alternes-internes).
- Isocèle : deux angles égaux ; équilatéral : trois angles de `60°` ; rectangle : deux angles complémentaires.
- Médiatrices concourantes : centre du cercle circonscrit. Hauteurs concourantes. Médianes concourantes.
- Une médiane partage le triangle en deux triangles de même aire.
- Aire du triangle : `(base × hauteur) ÷ 2`.

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/02-triangles-droites-remarquables.html](../../quiz/espace-et-geometrie/02-triangles-droites-remarquables.html)
- Exercices : [exercices/espace-et-geometrie/02-triangles-droites-remarquables.html](../../exercices/espace-et-geometrie/02-triangles-droites-remarquables.html)

## Pistes de prolongement (culture mathématique)

- Droite d'Euler et cercle des neuf points.
- Construction d'un pentagone régulier à la règle et au compas.
- Ogives gothiques, triangle de Reuleaux.
