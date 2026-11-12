# Leçon 02 — Moyenne, médiane, étendue et quartiles

**Domaine** : Données et probabilités
**Programme** : cycle 4 — moyenne (5e, 4e), médiane et étendue (4e), quartiles et écart interquartile (3e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : chapitre 01 de ce domaine (vocabulaire, effectifs, fréquences), fractions et pourcentages, calcul avec les décimaux
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- calculer une moyenne simple, une moyenne pondérée (effectifs, fréquences, classes) ;
- utiliser les propriétés de la moyenne et **ne pas** faire une moyenne de moyennes sans pondération ;
- déterminer une médiane (effectif pair ou impair, tableau d'effectifs cumulés) ;
- calculer étendue, quartiles `Q1` et `Q3` selon la définition du programme, et l'écart interquartile ;
- lire et construire une boîte à moustaches ;
- comparer deux séries par une mesure de **position** et une mesure de **dispersion** ;
- repérer les erreurs types d'élèves et proposer une remédiation.

---

## 1. Moyenne

### 1.1 Moyenne simple

La **moyenne** d'une série de `n` valeurs est la somme des valeurs divisée par `n`.

`moyenne = (x₁ + x₂ + … + xₙ) ÷ n`

**Exemple.** Notes : `12 ; 8 ; 15 ; 10 ; 5`. Somme : `50`, effectif : `5`, moyenne : `50 ÷ 5 = 10`.

> **Interprétation** : la moyenne est la valeur que **tous** les individus auraient si la somme totale était répartie équitablement. C'est ce qui lui donne son sens (voir le volet didactique) : `n × moyenne = somme`. La moyenne n'est pas forcément une valeur de la série, ni même une valeur possible (`2,4` enfants par famille).

### 1.2 Moyenne pondérée avec effectifs

Quand des valeurs se répètent, on **pondère** par les effectifs `nᵢ` : `moyenne = (n₁x₁ + n₂x₂ + …) ÷ N`, où `N` est l'effectif total.

**Exemple.** 20 notes :

| Note `xᵢ` | 8 | 10 | 12 | 15 | Total |
|---|---|---|---|---|---|
| Effectif `nᵢ` | 3 | 5 | 7 | 5 | 20 |

`moyenne = (8×3 + 10×5 + 12×7 + 15×5) ÷ 20 = (24 + 50 + 84 + 75) ÷ 20 = 233 ÷ 20 = 11,65`.

### 1.3 Avec les fréquences

Comme `fᵢ = nᵢ ÷ N`, on a `moyenne = x₁f₁ + x₂f₂ + …`. Avec les fréquences `15 % ; 25 % ; 35 % ; 25 %` de l'exemple précédent :
`8×0,15 + 10×0,25 + 12×0,35 + 15×0,25 = 1,2 + 2,5 + 4,2 + 3,75 = 11,65`. Même résultat.

### 1.4 Données regroupées en classes

On ne connaît plus les valeurs exactes : on remplace chaque classe par son **centre** (milieu de l'intervalle). Le résultat est une **estimation**.

**Exemple.** Âge de 40 personnes :

| Classe | [0 ; 10[ | [10 ; 20[ | [20 ; 30[ | [30 ; 40[ |
|---|---|---|---|---|
| Centre | 5 | 15 | 25 | 35 |
| Effectif | 4 | 10 | 16 | 10 |

`(5×4 + 15×10 + 25×16 + 35×10) ÷ 40 = 920 ÷ 40 = 23` ans (environ).

### 1.5 Propriétés de la moyenne

- **Ajouter** un même nombre `a` à toutes les valeurs ajoute `a` à la moyenne.
- **Multiplier** toutes les valeurs par `k` multiplie la moyenne par `k`.
- **Moyenne de moyennes** : on pondère par les effectifs. Classe A : 20 élèves, moyenne `12` ; classe B : 30 élèves, moyenne `14`. Moyenne des 50 élèves :
  `(20×12 + 30×14) ÷ 50 = 660 ÷ 50 = 13,2`, et **non** `(12 + 14) ÷ 2 = 13`.

> **Astuce de calcul** : pour retrouver une valeur manquante, on passe par la somme. Pour obtenir une moyenne `m` sur `n` notes, il faut une somme de `n × m`.

---

## 2. Médiane

### 2.1 Définition

La **médiane** partage la série **rangée par ordre croissant** en deux groupes de même effectif : au moins la moitié des valeurs sont inférieures ou égales à elle, au moins la moitié lui sont supérieures ou égales.

- **Effectif impair** (`n = 2k + 1`) : c'est la valeur de rang `k + 1`.
- **Effectif pair** (`n = 2k`) : toute valeur entre les rangs `k` et `k + 1` convient ; par convention on prend leur **demi-somme**.

**Exemples.**

- `12 ; 5 ; 9 ; 15 ; 7 ; 11 ; 3` : rangée `3 ; 5 ; 7 ; 9 ; 11 ; 12 ; 15`, `n = 7`, rang 4 : médiane `9`.
- `4 ; 9 ; 6 ; 12 ; 8 ; 15` : rangée `4 ; 6 ; 8 ; 9 ; 12 ; 15`, `n = 6`, rangs 3 et 4 : médiane `(8 + 9) ÷ 2 = 8,5`.

> **Piège** : il faut **toujours ranger** avant de chercher la médiane.

### 2.2 Avec un tableau d'effectifs cumulés

On ajoute une ligne d'effectifs cumulés croissants et on cherche à quelle valeur correspondent les rangs voulus.

| Note | 8 | 10 | 12 | 15 |
|---|---|---|---|---|
| Effectif | 3 | 5 | 7 | 5 |
| Effectif cumulé | 3 | 8 | 15 | 20 |

`N = 20` : rangs 10 et 11. Les rangs 9 à 15 correspondent à la note `12` : médiane `12`.

---

## 3. Étendue

`étendue = valeur maximale − valeur minimale`. C'est une mesure de **dispersion**, très sensible aux valeurs extrêmes. Pour les notes ci-dessus : `15 − 8 = 7`.

---

## 4. Quartiles et écart interquartile

### 4.1 Définition (programme)

Série rangée de `n` valeurs :

- `Q1` : **plus petite valeur** de la série telle qu'**au moins 25 %** des données lui sont inférieures ou égales ;
- `Q3` : **plus petite valeur** de la série telle qu'**au moins 75 %** des données lui sont inférieures ou égales.

**Méthode pratique** : `Q1` est la valeur de rang `⌈n ÷ 4⌉` et `Q3` la valeur de rang `⌈3n ÷ 4⌉` (on arrondit **au rang supérieur**).

**Écart interquartile** : `Q3 − Q1`. Il contient environ la moitié centrale des données.

### 4.2 Exemple résolu

Série de 12 valeurs : `3 ; 5 ; 6 ; 8 ; 9 ; 10 ; 12 ; 13 ; 14 ; 16 ; 18 ; 21` (déjà rangée).

- `n ÷ 4 = 3` : `Q1` est de rang 3, soit `6`.
- Médiane : rangs 6 et 7, `(10 + 12) ÷ 2 = 11`.
- `3n ÷ 4 = 9` : `Q3` est de rang 9, soit `14`.
- Étendue `21 − 3 = 18` ; écart interquartile `14 − 6 = 8`.

### 4.3 Boîte à moustaches

On représente sur un axe gradué : le minimum, `Q1`, la médiane, `Q3`, le maximum. La **boîte** va de `Q1` à `Q3` (avec un trait pour la médiane), les **moustaches** vont jusqu'au minimum et au maximum.

```svg Boîte à moustaches de la série 3 ; 5 ; 6 ; 8 ; … ; 21 : minimum 3, Q1 = 6, médiane 11, Q3 = 14, maximum 21.
<svg viewBox="0 0 460 140" width="460" role="img" aria-label="Boîte à moustaches : min 3, Q1 6, médiane 11, Q3 14, max 21">
  <path class="s" d="M30 100H426"/>
  <path class="s" d="M30 96V104M66 96V104M102 96V104M138 96V104M174 96V104M210 96V104M246 96V104M282 96V104M318 96V104M354 96V104M390 96V104M426 96V104"/>
  <text class="m" x="26" y="120">0</text><text class="m" x="62" y="120">2</text><text class="m" x="98" y="120">4</text><text class="m" x="134" y="120">6</text><text class="m" x="170" y="120">8</text><text class="m" x="202" y="120">10</text><text class="m" x="238" y="120">12</text><text class="m" x="274" y="120">14</text><text class="m" x="310" y="120">16</text><text class="m" x="346" y="120">18</text><text class="m" x="382" y="120">20</text><text class="m" x="418" y="120">22</text>
  <path class="s" d="M84 55H138M282 55H408M84 45V65M408 45V65"/>
  <rect class="fs" x="138" y="35" width="144" height="40"/>
  <path class="sb" d="M228 35V75"/>
  <text x="76" y="30">min 3</text><text class="b" x="132" y="26">Q1 = 6</text><text class="b" x="204" y="26">méd. 11</text><text class="b" x="268" y="26">Q3 = 14</text><text x="396" y="30">max 21</text>
</svg>
```

**Lecture** : au moins 25 % des valeurs sont `≤ 6`, au moins 50 % sont `≤ 11`, au moins 75 % sont `≤ 14`. La longueur de la boîte est l'écart interquartile. **Attention** : la boîte ne montre pas la moyenne, et chacun des quatre « quarts » contient environ le même nombre de données, quelle que soit sa longueur sur le dessin.

### 4.4 Valeurs de `Q1` : une convention à connaître

Il existe d'autres définitions de `Q1` et `Q3` (interpolation linéaire). Pour la série ci-dessus, le tableur renvoie `7,5` et `14,5` avec `QUARTILE` ou `QUARTILE.INC`, au lieu de `6` et `14`. **À l'épreuve, on utilise la définition du programme.**

---

## 5. Comparer deux séries

Pour comparer deux séries, on donne **toujours** une mesure de **position** (moyenne ou médiane) **et** une mesure de **dispersion** (étendue ou écart interquartile).

**Exemple.** Deux classes, notes sur 20 (10 élèves chacune) :

| | Moyenne | Médiane | Étendue | Écart interquartile |
|---|---|---|---|---|
| Classe X : `9 ; 10 ; 11 ; 11 ; 12 ; 12 ; 12 ; 13 ; 15 ; 15` | 12 | 12 | 6 | 2 (`Q1 = 11`, `Q3 = 13`) |
| Classe Y : `4 ; 7 ; 9 ; 10 ; 12 ; 12 ; 14 ; 15 ; 16 ; 21` | 12 | 12 | 17 | 6 (`Q1 = 9`, `Q3 = 15`) |

**Conclusion** : même niveau moyen, mais la classe X est beaucoup plus **homogène**, la classe Y plus **dispersée**. La moyenne seule cache cette différence.

---

## 6. Valeurs extrêmes

La moyenne est **sensible** aux valeurs extrêmes, la médiane et les quartiles beaucoup moins (on parle de caractéristique **robuste**).

**Exemple.** Salaires : `1500 ; 1600 ; 1700 ; 1800 ; 2000` : moyenne `1720`, médiane `1700`. On ajoute un salaire de `9000` : moyenne `2933,33`, médiane `1750`. La moyenne a augmenté de plus de 70 %, la médiane de moins de 3 %.

> Pour des données avec valeurs aberrantes (revenus, prix de l'immobilier), la médiane est plus représentative.

---

## 7. Tableur

| But | Fonction |
|---|---|
| Moyenne | `=MOYENNE(A1:A12)` |
| Médiane | `=MEDIANE(A1:A12)` |
| Quartile | `=QUARTILE(A1:A12;1)` ou `QUARTILE.INC` / `QUARTILE.EXC` |
| Étendue | `=MAX(A1:A12)-MIN(A1:A12)` |

> **Attention** : `QUARTILE` utilise une **interpolation** qui peut donner une valeur absente de la série (`7,5` au lieu de `6`). Elle diffère de la définition du programme. Avant d'utiliser le tableur, on **vérifie à la main** avec la définition du cours, et on le dit explicitement en classe.

---

## 8. Moyenne et médiane à l'école et au collège

**Moyenne à l'école.**

- **Partage équitable** : « 4 enfants ont 3, 5, 6 et 2 billes. On les met en commun (16) puis on partage : 4 chacun. » La moyenne est le résultat d'un **nivellement**.
- **Équilibre** : sur une droite graduée, la moyenne est le point d'équilibre des valeurs (le « centre de gravité »).
- **Du concret à la formule** : on manipule d'abord (cubes qu'on réorganise en colonnes égales), puis on formalise `somme ÷ effectif`.

**Médiane** : on utilise la situation « partage en deux groupes de même effectif » : ranger des cartes ou des élèves par taille, puis prendre celui du milieu.

---

## 9. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Moyenne de moyennes sans pondération | Classes 20 élèves (12) et 30 élèves (14) : « moyenne = 13 » | La moyenne est vue comme une opération sur deux nombres | Revenir à la somme totale ; cas extrême : 1 élève à 20 et 99 élèves à 10 |
| Médiane sans ranger | Médiane de `5 ; 12 ; 3 ; 9 ; 7` : « 3 » (valeur du milieu de la liste) | On lit la position dans la liste donnée | Ranger sur bandelettes de papier ; verbaliser « autant de valeurs de chaque côté » |
| Médiane pour un effectif pair | Médiane de `4 ; 6 ; 8 ; 9 ; 12 ; 15` : « 8 » ou « 9 » | Pas de valeur centrale unique | Montrer que 3 valeurs sont à gauche et 3 à droite, d'où la demi-somme |
| Confusion moyenne / médiane / mode | « La médiane, c'est la valeur la plus fréquente » | Vocabulaire proche, trois « valeurs centrales » | Fiche de trois définitions illustrées sur une même série |
| Oublier les effectifs | Moyenne de `8 ; 10 ; 12 ; 15` : `11,25` au lieu de `11,65` | On moyenne la ligne des valeurs | Reconstituer la liste complète des 20 valeurs |
| Moyenne d'une classe = centre | « Moyenne de [10 ; 20[ vaut exactement 15 » | Confusion estimation / calcul exact | Rappeler que les centres donnent une **estimation** |
| Confondre `Q1`, `Q3` et pourcentages | « `Q1` est la valeur 25 % » | Confusion rang / valeur | Distinguer rang `⌈n ÷ 4⌉` et valeur à ce rang |
| Ne regarder que la moyenne | « Même moyenne, donc mêmes séries » | Pas de notion de dispersion | Deux séries de même moyenne, boîtes différentes |

**Outils pour enseigner** : cubes emboîtables (nivellement), bandelettes à ranger, diagrammes en barres, boîte à moustaches tracée à partir de données de la classe (taille, pointure, temps de trajet).

---

## 10. À retenir

- Moyenne = `somme ÷ effectif` ; pondérée : `Σ nᵢxᵢ ÷ N` ; classes : on utilise les centres (estimation).
- Ajouter `a` / multiplier par `k` : la moyenne subit la même opération. Moyenne de moyennes : **pondérer** par les effectifs.
- Médiane : série **rangée** ; impair → valeur centrale ; pair → demi-somme des deux valeurs centrales.
- `Q1` de rang `⌈n ÷ 4⌉`, `Q3` de rang `⌈3n ÷ 4⌉` ; écart interquartile `Q3 − Q1` ; étendue `max − min`.
- Comparer : une mesure de **position** et une mesure de **dispersion**.
- La moyenne est sensible aux valeurs extrêmes, la médiane non.
- Tableur : attention aux conventions de `QUARTILE`.

---

## Pour s'entraîner

- Exercices : [exercices/donnees-et-probabilites/02-moyenne-mediane-quartiles.html](../../exercices/donnees-et-probabilites/02-moyenne-mediane-quartiles.html)
- Quiz : [quiz/donnees-et-probabilites/02-moyenne-mediane-quartiles.html](../../quiz/donnees-et-probabilites/02-moyenne-mediane-quartiles.html)

## Pistes de prolongement (culture mathématique)

- Adolphe Quetelet (XIXe siècle) et « l'homme moyen » ; John Tukey invente la boîte à moustaches en 1970.
