# Leçon 03 — Probabilités : événements et calculs simples

**Domaine** : Données et probabilités
**Programme** : cycle 4 — notion de probabilité et calculs en 5e / 4e, événements contraires, réunion et intersection en 3e (BO du 5 mars 2026, annexe 2)
**Prérequis** : fractions, pourcentages, chapitre 01 de ce domaine (notion de fréquence)
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- employer le vocabulaire : expérience aléatoire, issue, univers, événement, événement certain / impossible / contraire, événements incompatibles ;
- calculer une probabilité dans une situation d'**équiprobabilité** et l'écrire en fraction, en décimal ou en pourcentage ;
- construire et utiliser une **loi de probabilité** (la somme vaut 1) ;
- utiliser l'événement contraire : `P(non A) = 1 − P(A)` ;
- calculer `P(A ∪ B)` avec la formule `P(A ∪ B) + P(A ∩ B) = P(A) + P(B)` et la **justifier** ;
- résoudre des problèmes types (dés, cartes, urnes, roues, tirages) ;
- repérer les erreurs types d'élèves et proposer une remédiation.

---

## 1. Vocabulaire

### 1.1 Expérience aléatoire, issue, univers

Une **expérience aléatoire** est une expérience dont on connaît les résultats possibles, mais dont on ne peut pas prévoir le résultat avant de l'avoir faite (lancer un dé, tirer une carte, faire tourner une roue).

- Un résultat possible s'appelle une **issue**.
- L'ensemble de toutes les issues est l'**univers**, noté `Ω`.

Exemples : pour un dé cubique, `Ω = {1 ; 2 ; 3 ; 4 ; 5 ; 6}` (6 issues). Pour une pièce, `Ω = {pile ; face}`. Pour le lancer de deux dés, il y a `6 × 6 = 36` issues (couples ordonnés).

> **Attention** : l'univers dépend de ce qu'on observe. Si on ne regarde que la parité du dé, on peut prendre `Ω = {pair ; impair}`, mais ces deux issues sont alors équiprobables seulement parce que le dé a autant de faces paires qu'impaires.

### 1.2 Événements

Un **événement** est un ensemble d'issues (une partie de l'univers).

- Un événement **élémentaire** ne contient qu'une issue : « obtenir 5 ».
- Un événement **composé** en contient plusieurs : « obtenir un nombre pair » = `{2 ; 4 ; 6}`.
- L'événement **certain** est l'univers entier : « obtenir un nombre inférieur à 7 ».
- L'événement **impossible** ne contient aucune issue : « obtenir 7 ». On le note `∅`.
- Les issues d'un événement sont dites **favorables** à cet événement.

### 1.3 Événement contraire, événements incompatibles

- Le **contraire** de `A`, noté `non A` (ou `Ā`), contient toutes les issues qui ne sont pas dans `A`. Contraire de « obtenir un nombre pair » : « obtenir un nombre impair ».
- Deux événements sont **incompatibles** s'ils ne peuvent pas se réaliser en même temps (aucune issue commune). « Obtenir 2 » et « obtenir un nombre impair » sont incompatibles.

> Deux événements **contraires** sont toujours incompatibles ; la réciproque est fausse : « obtenir 1 » et « obtenir 2 » sont incompatibles sans être contraires.

---

## 2. Probabilité d'un événement

### 2.1 Définition et propriétés

La **probabilité** `P(A)` mesure la « chance » que `A` se réalise.

- `0 ≤ P(A) ≤ 1` ;
- `P(∅) = 0` (impossible) et `P(Ω) = 1` (certain) ;
- elle s'écrit sous forme de **fraction**, de **décimal** ou de **pourcentage** : `1/4 = 0,25 = 25 %`.

Un nombre négatif ou supérieur à 1 (`−0,2`, `5/4`, `125 %`) ne peut **jamais** être une probabilité.

### 2.2 Lien avec la fréquence

Quand on répète une expérience un grand nombre de fois, la **fréquence** observée d'une issue se rapproche de sa probabilité (loi des grands nombres, vue en intuition au collège). Mais une fréquence calculée sur un échantillon reste une **observation**, alors que la probabilité est une valeur **théorique** du modèle.

- 600 lancers d'un dé équilibré : on attend environ `600 × 1/6 = 100` six, pas exactement 100.
- Sur 10 lancers, une fréquence de `0,4` pour le 6 ne remet pas en cause `P(6) = 1/6`.

### 2.3 Équiprobabilité

Les issues sont **équiprobables** quand elles ont la même probabilité (dé équilibré, pièce non truquée, tirage « au hasard » dans une urne). Alors :

`P(A) = nombre d'issues favorables à A / nombre d'issues possibles`

**Exemple résolu 1.** Un dé équilibré à 6 faces. `A` : « obtenir un diviseur de 6 ».
Les issues favorables sont `1 ; 2 ; 3 ; 6` : `P(A) = 4/6 = 2/3`.

**Exemple résolu 2.** Une urne contient 5 boules rouges, 3 vertes et 2 jaunes. On tire une boule au hasard.
`P(verte) = 3/10 = 0,3 = 30 %` ; `P(rouge ou jaune) = 7/10`.

> La formule n'est valable **que** si les issues sont équiprobables. « Gagner ou perdre » : 2 issues, mais pas forcément `1/2`.

---

## 3. Loi de probabilité

Une **loi de probabilité** associe à chaque issue sa probabilité. On la présente souvent dans un tableau.

| Issue | rouge | bleu | vert | jaune |
|---|---|---|---|---|
| Probabilité | 0,2 | 0,35 | 0,25 | ? |

**Propriété** : la somme des probabilités de toutes les issues vaut **1**. Ici `P(jaune) = 1 − (0,2 + 0,35 + 0,25) = 0,2`.

La probabilité d'un événement est la **somme** des probabilités des issues qui le composent : `P(rouge ou vert) = 0,2 + 0,25 = 0,45`.

**Exemple (dé truqué).** Le 6 sort avec la probabilité `0,4` ; les cinq autres faces sont équiprobables. Elles se partagent `1 − 0,4 = 0,6`, donc chacune a pour probabilité `0,6 ÷ 5 = 0,12`.

---

## 4. Événement contraire

Un événement et son contraire forment à eux deux tout l'univers, sans issue commune :

`P(non A) = 1 − P(A)`

Cette formule est très utile pour les événements du type « **au moins un** ».

**Exemple résolu 3.** On lance deux dés équilibrés. `A` : « obtenir au moins un 6 ».
Le contraire est « aucun 6 » : `5 × 5 = 25` couples sur 36. Donc `P(A) = 1 − 25/36 = 11/36`.

---

## 5. Réunion et intersection

Soient `A` et `B` deux événements.

- **Intersection** `A ∩ B` (« A et B ») : issues communes à `A` et à `B`.
- **Réunion** `A ∪ B` (« A ou B ») : issues qui sont dans `A`, ou dans `B`, ou dans les deux. Le « ou » est **inclusif**.

### 5.1 Un exemple en diagramme de Venn

Dé équilibré. `A` : « pair » = `{2 ; 4 ; 6}` ; `B` : « supérieur ou égal à 4 » = `{4 ; 5 ; 6}`.

```svg Diagramme de Venn : A ∩ B = {4 ; 6} ; A ∪ B = {2 ; 4 ; 5 ; 6} ; les issues 1 et 3 sont dans aucun des deux événements.
<svg viewBox="0 0 400 240" width="400" role="img" aria-label="Diagramme de Venn de deux événements A et B sur un dé">
  <rect class="s" x="10" y="10" width="380" height="220" rx="10"/>
  <circle class="fs" cx="150" cy="120" r="80" style="opacity:.7"/>
  <circle class="fb" cx="250" cy="120" r="80" style="opacity:.3"/>
  <text class="b" x="95" y="62">A</text><text class="b" x="293" y="62">B</text>
  <text x="115" y="125">2</text><text x="190" y="108">4</text><text x="190" y="140">6</text><text x="282" y="125">5</text>
  <text x="36" y="40">1</text><text x="360" y="212">3</text>
  <text class="m" x="22" y="224">Ω</text>
</svg>
```

Ici `P(A) = 3/6`, `P(B) = 3/6`, `P(A ∩ B) = 2/6`, `P(A ∪ B) = 4/6`.

### 5.2 La formule

`P(A ∪ B) + P(A ∩ B) = P(A) + P(B)` soit `P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`

**Justification (comptage).** En comptant les issues de `A` puis celles de `B`, on compte **deux fois** les issues communes à `A` et `B`. Pour obtenir la réunion, il faut donc retirer une fois l'intersection.

| | issues de `A` | issues de `B` | en commun |
|---|---|---|---|
| Nombre | 3 | 3 | 2 |

`3 + 3 − 2 = 4` issues dans `A ∪ B`, d'où `P(A ∪ B) = 4/6 = 2/3`. On vérifie la formule : `1/2 + 1/2 = 1 = 2/3 + 1/3`. En divisant le comptage par le nombre total d'issues (équiprobabilité), on obtient la formule sur les probabilités.

### 5.3 Cas particulier : événements incompatibles

Si `A ∩ B = ∅`, alors `P(A ∩ B) = 0` et la formule devient :

`P(A ∪ B) = P(A) + P(B)`

**Exemple résolu 4.** Dé équilibré, `A` : « obtenir un multiple de 3 », `B` : « obtenir 4 ». Incompatibles : `P(A ou B) = 2/6 + 1/6 = 1/2`.

> Piège : additionner `P(A) + P(B)` **sans** vérifier l'incompatibilité donne parfois plus que 1 ou une valeur fausse. Exemple : `P(pair) + P(≥ 4) = 1`, alors que `P(pair ou ≥ 4) = 2/3`.

---

## 6. Problèmes types

**Problème 1 (cartes).** Jeu de 32 cartes, une carte tirée au hasard. `A` : « roi » (4 cartes) ; `B` : « cœur » (8 cartes). `A ∩ B` : « roi de cœur » (1 carte).
`P(A ∪ B) = 4/32 + 8/32 − 1/32 = 11/32`.

**Problème 2 (somme de deux dés).** On lance deux dés équilibrés. `S = 8` pour les couples `(2,6) ; (3,5) ; (4,4) ; (5,3) ; (6,2)` : `P(S = 8) = 5/36`. Ici l'univers a 36 issues, **pas 11** (les sommes de 2 à 12 ne sont pas équiprobables).

**Problème 3 (roue de loterie).** Roue de 12 secteurs égaux : 1 « gros lot », 2 « 10 € », 4 « 2 € », 5 « perdu ».
`P(gagner quelque chose) = 7/12` ; `P(perdre) = 1 − 7/12 = 5/12`.

**Problème 4 (tirages, aperçu 3e).** Urne avec 3 boules rouges et 2 vertes ; on tire deux boules **sans remise**. Un arbre donne `P(deux rouges) = 3/5 × 2/4 = 3/10`. Avec **remise**, on aurait `3/5 × 3/5 = 9/25`. Toujours préciser « avec » ou « sans remise ».

---

## 7. Probabilités à l'école et au collège (volet didactique)

- **À l'école** : le programme parle de « chance » et de situations de hasard (jeux de dés, de cartes, loto, roues). On travaille le vocabulaire (« possible, impossible, certain, plus de chances, moins de chances »), sans calcul formalisé.
- **Au collège** : on passe du vécu à un **modèle** : fréquences observées (cycle 3 / début cycle 4), puis probabilité comme valeur théorique, équiprobabilité, événements, loi de probabilité.
- **Représentations utiles** : urne, roue partagée en secteurs égaux, tableau de loi, tableau à double entrée (deux dés), arbre, diagramme de Venn.
- **Démarche conseillée** : expérimenter (lancers réels ou simulation tableur), comparer les fréquences, puis introduire le modèle théorique.

---

## 8. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| « 1 chance sur 2 » par défaut | « Gagner ou perdre : 1 chance sur 2 » | Deux issues vues comme équiprobables | Urne 1 rouge / 9 bleues : compter les issues **équiprobables** (les 10 boules) |
| Confondre fréquence et probabilité | 4 six sur 10 lancers : « `P(6) = 0,4` » | Un échantillon pris pour la loi du modèle | Regrouper les résultats de toute la classe (grand échantillon), simulation tableur |
| Biais de représentativité | « `PFPFFP` est plus probable que `PPPPPP` » | Le hasard « doit avoir l'air mélangé » | Les 64 suites ont la même probabilité `(1/2)⁶` ; lister des suites |
| « Le 6 est plus dur à obtenir » | Croyance sur une face particulière | Rareté perçue, jeux où il faut un 6 | Tableau des fréquences après 100 lancers de la classe, face par face |
| Oublier l'ordre dans deux dés | « Somme 7 : 1 issue sur 11 » | Les 11 sommes vues comme équiprobables | Tableau à 36 cases |
| Additionner sans vérifier l'incompatibilité | `P(pair ou ≥ 4) = 3/6 + 3/6 = 1` | Formule apprise sans condition | Diagramme de Venn, compter les issues communes |
| Probabilité > 1 ou négative | `P = 5/4` | Dénominateur et numérateur inversés | Rappeler : favorables ≤ possibles |

**Modèles et outils pour enseigner** : dés et pièces réels, urnes en sachets opaques, roues, simulation sur tableur, tableaux à double entrée.

---

## 9. À retenir

- `P(A) = issues favorables / issues possibles` **uniquement** si les issues sont équiprobables.
- `0 ≤ P(A) ≤ 1` ; somme des probabilités des issues `= 1`.
- `P(non A) = 1 − P(A)` (utile pour « au moins un »).
- `P(A ∪ B) = P(A) + P(B) − P(A ∩ B)` ; si `A` et `B` sont incompatibles : `P(A ∪ B) = P(A) + P(B)`.
- Fréquence observée ≠ probabilité théorique.
- Préciser toujours « équiprobables », « avec remise » ou « sans remise ».

---

## Pour s'entraîner

- Exercices : [exercices/donnees-et-probabilites/03-probabilites-evenements.html](../../exercices/donnees-et-probabilites/03-probabilites-evenements.html)
- Quiz : [quiz/donnees-et-probabilites/03-probabilites-evenements.html](../../quiz/donnees-et-probabilites/03-probabilites-evenements.html)

## Pistes de prolongement (culture mathématique)

- Origines du calcul des probabilités : correspondance entre Pascal et Fermat (1654) autour du « problème des partis » ; Jacques Bernoulli et la loi des grands nombres.
