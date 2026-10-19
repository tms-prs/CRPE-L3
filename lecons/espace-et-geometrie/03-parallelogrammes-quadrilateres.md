# Leçon 03 — Parallélogrammes et quadrilatères particuliers

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — parallélogrammes : définition, construction, propriétés caractéristiques des côtés et des diagonales, rectangle, losange, carré, aires, conversions longueurs / aires (5e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 01 et 02 (angles, parallélisme, triangles, aires)
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- définir le parallélogramme et connaître ses propriétés ;
- utiliser les propriétés caractéristiques pour **prouver** qu'un quadrilatère est un parallélogramme, un rectangle, un losange ou un carré ;
- calculer périmètres et aires, convertir les unités d'aire ;
- repérer les erreurs types d'élèves.

---

## 1. Le parallélogramme

### 1.1 Définition

Un **parallélogramme** est un quadrilatère dont les **côtés opposés sont parallèles deux à deux**.

```svg Parallélogramme ABCD : ses diagonales se coupent en leur milieu O.
<svg viewBox="0 0 360 220" width="360" role="img" aria-label="Parallélogramme et ses diagonales">
  <path class="fs" d="M70 180L250 180L300 60L120 60Z"/>
  <path class="sb d" d="M70 180L300 60M250 180L120 60"/>
  <circle class="pb" cx="185" cy="120" r="5"/>
  <circle class="pt" cx="70" cy="180" r="4"/><circle class="pt" cx="250" cy="180" r="4"/><circle class="pt" cx="300" cy="60" r="4"/><circle class="pt" cx="120" cy="60" r="4"/>
  <text x="48" y="200">A</text><text x="252" y="200">B</text><text x="306" y="56">C</text><text x="104" y="52">D</text>
  <text class="b" x="192" y="116">O</text>
</svg>
```

### 1.2 Propriétés

Si `ABCD` est un parallélogramme, alors :

- les côtés opposés sont **égaux** : `AB = DC` et `AD = BC` ;
- les angles opposés sont **égaux** et les angles consécutifs sont **supplémentaires** ;
- les **diagonales se coupent en leur milieu** (le point d'intersection est le **centre de symétrie** du parallélogramme).

### 1.3 Propriétés caractéristiques (pour prouver)

Un quadrilatère **non croisé** est un parallélogramme **si et seulement si** l'une de ces conditions est vérifiée :

1. ses côtés opposés sont parallèles deux à deux (définition) ;
2. ses côtés opposés sont égaux deux à deux ;
3. deux côtés opposés sont à la fois **parallèles et égaux** ;
4. ses diagonales se coupent en leur milieu.

**Exemple rédigé.** `ABCD` a pour diagonales `[AC]` et `[BD]` de même milieu `O`. Une propriété caractéristique dit qu'un quadrilatère dont les diagonales se coupent en leur milieu est un parallélogramme. Donc `ABCD` est un parallélogramme.

**Attention** : « deux côtés opposés égaux » ne suffit pas (un trapèze isocèle a deux côtés égaux sans être un parallélogramme). Il faut **parallèles ET égaux**.

---

## 2. Parallélogrammes particuliers

| Quadrilatère | Définition | Propriétés caractéristiques |
|---|---|---|
| **Rectangle** | parallélogramme avec un angle droit (donc 4 angles droits) | parallélogramme **+ diagonales de même longueur**, ou quadrilatère avec 3 angles droits |
| **Losange** | parallélogramme dont deux côtés consécutifs sont égaux (donc 4 côtés égaux) | parallélogramme **+ diagonales perpendiculaires**, ou quadrilatère à 4 côtés égaux |
| **Carré** | rectangle **et** losange | 4 côtés égaux **et** 4 angles droits |

**Propriétés supplémentaires** :

- rectangle : diagonales de même longueur, 2 axes de symétrie ;
- losange : diagonales perpendiculaires, 2 axes de symétrie (les diagonales) ;
- carré : 4 axes de symétrie, diagonales égales, perpendiculaires, se coupant en leur milieu.

```svg Les quadrilatères particuliers : le carré est à la fois rectangle et losange.
<svg viewBox="0 0 400 220" width="400" role="img" aria-label="Schéma d'inclusion des parallélogrammes">
  <rect class="fc" x="10" y="10" width="380" height="200" rx="16"/>
  <rect class="fs" x="30" y="50" width="210" height="140" rx="12"/>
  <rect class="fb" x="160" y="50" width="210" height="140" rx="12" style="opacity:.45"/>
  <text class="b" x="24" y="34">Parallélogrammes</text>
  <text x="48" y="84">Rectangles</text>
  <text x="272" y="84">Losanges</text>
  <text class="b" x="188" y="134">Carrés</text>
</svg>
```

**Trapèze** : quadrilatère ayant **au moins** deux côtés parallèles (les bases).

---

## 3. Constructions

- **Parallélogramme** `ABCD` : tracer `[AB]`, puis la parallèle à `(AB)` passant par `D`, et reporter `DC = AB` ; ou tracer deux diagonales de même milieu.
- **Rectangle sans équerre** : tracer deux segments de même longueur, de même milieu (les diagonales) ; leurs extrémités forment un rectangle.
- **Losange sans équerre** : tracer deux segments de longueurs différentes se coupant en leur milieu perpendiculairement.

---

## 4. Périmètres et aires

### 4.1 Formules

| Figure | Périmètre | Aire |
|---|---|---|
| Rectangle | `2 × (L + l)` | `L × l` |
| Carré de côté `c` | `4c` | `c²` |
| Parallélogramme (base `b`, hauteur `h`) | somme des côtés | `b × h` |
| Triangle | somme des côtés | `(b × h) ÷ 2` |
| Losange (diagonales `D` et `d`) | `4c` | `(D × d) ÷ 2` |
| Trapèze (bases `B`, `b`, hauteur `h`) | somme des côtés | `((B + b) × h) ÷ 2` |

**Pourquoi `b × h` pour un parallélogramme ?** On découpe un triangle rectangle à gauche et on le recolle à droite : on obtient un rectangle de dimensions `b` et `h`. **Attention** : `h` est la **hauteur** (perpendiculaire à la base), pas le côté oblique.

### 4.2 Figures complexes

On **découpe** la figure en rectangles, triangles, parallélogrammes, ou on la **complète** pour retrancher.

### 4.3 Conversions d'unités d'aire

On passe d'une unité à la suivante en multipliant par `100` (et non `10`) : `1 m² = 100 dm² = 10 000 cm²`.

| km² | hm² | dam² | m² | dm² | cm² | mm² |
|---|---|---|---|---|---|---|
| | | | `1` | `100` | `10 000` | `1 000 000` |

Autres : `1 ha = 10 000 m²` et `1 are = 100 m²`.

**Exemple.** `3,5 m² = 350 dm² = 35 000 cm²`.

---

## 5. Problèmes types

**Problème 1.** Un parallélogramme a des côtés de `7 cm` et `4 cm`. Quel est son périmètre ?
`2 × (7 + 4) = 22 cm`.

**Problème 2.** Un parallélogramme a une base de `9 cm` et une hauteur de `5 cm`. Calculer son aire.
`9 × 5 = 45 cm²` (le côté oblique n'intervient pas).

**Problème 3.** Un losange a des diagonales de `12 cm` et `16 cm`. Calculer son aire et son côté.
Aire `= 12 × 16 ÷ 2 = 96 cm²`. Les diagonales se coupent perpendiculairement en leur milieu ; par Pythagore, `côté² = 6² + 8² = 100`, donc le côté vaut `10 cm`.

**Problème 4.** Convertir `0,25 m²` en `cm²`.
`0,25 × 10 000 = 2 500 cm²`.

---

## 6. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Utiliser le côté oblique comme hauteur | aire `= 5 × 7` au lieu de `5 × 4` | Hauteur non perpendiculaire à la base | Équerre, découpage-recollage en rectangle |
| Conclure « parallélogramme » avec deux côtés égaux seulement | cerf-volant pris pour parallélogramme | Propriété caractéristique incomplète | Contre-exemples (cerf-volant, trapèze isocèle) |
| `1 m² = 10 dm²` | conversion d'aire par 10 | Transfert des longueurs | Quadriller un carré de `1 m` de côté en `dm` : 100 carreaux |
| Confondre rectangle et losange | « le losange a 4 angles droits » | Figures prototypiques | Tableau de propriétés par figure |
| Utiliser le périmètre pour une aire | | Confusion de grandeurs | Carré de `2 cm` : périmètre `8 cm`, aire `4 cm²` |
| Mesurer pour conclure | « les diagonales ont l'air perpendiculaires » | Perception | Citer la propriété caractéristique |

**Outils** : papier quadrillé, découpage de papier, logiciel de géométrie dynamique, géoplan.

---

## 7. À retenir

- Parallélogramme : côtés opposés parallèles ⇒ côtés opposés égaux, diagonales de même milieu.
- Pour prouver : côtés opposés parallèles, ou égaux deux à deux, ou deux côtés parallèles et égaux, ou diagonales de même milieu.
- Rectangle : parallélogramme + diagonales égales (ou un angle droit). Losange : parallélogramme + diagonales perpendiculaires (ou deux côtés consécutifs égaux). Carré : les deux.
- Aire du parallélogramme : `base × hauteur`. Unités d'aire : coefficient `100` d'une unité à la suivante.

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/03-parallelogrammes-quadrilateres.html](../../quiz/espace-et-geometrie/03-parallelogrammes-quadrilateres.html)
- Exercices : [exercices/espace-et-geometrie/03-parallelogrammes-quadrilateres.html](../../exercices/espace-et-geometrie/03-parallelogrammes-quadrilateres.html)

## Pistes de prolongement (culture mathématique)

- Théorème de Varignon : les milieux des côtés d'un quadrilatère forment un parallélogramme.
- Tracés de pavages (Alhambra) et cerfs-volants.
