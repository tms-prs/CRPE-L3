# Leçon 06 — Calcul littéral

**Domaine** : Nombres et calculs (calcul littéral et algébrique)
**Programme** : cycle 4 — formules, substitution, réduction, distributivité simple (5e-4e) ; double distributivité, identités remarquables, simplification d'expressions, nature d'une expression (3e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 01 (relatifs), 03 (puissances), 05 (priorités, distributivité)
**Durée conseillée** : 2 h (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- produire une formule et calculer sa valeur par substitution ;
- identifier la nature d'une expression (somme, produit) ;
- réduire, développer, factoriser, y compris avec la double distributivité et les identités remarquables ;
- démontrer une propriété générale par le calcul littéral, réfuter par un contre-exemple ;
- repérer les erreurs types d'élèves.

Le calcul littéral sert à **généraliser, démontrer et modéliser**, pas seulement à manipuler des lettres.

---

## 1. La lettre en mathématiques

Une lettre peut désigner :

| Usage | Exemple |
|---|---|
| Une **variable** dans une formule | `P = 2 × (L + l)` |
| Une **inconnue** (équation) | `2x + 3 = 11` |
| Un **objet** mathématique | le point `A`, le nombre `π` |
| Un **nombre quelconque** (généralisation) | `a + b = b + a` |

### 1.1 Conventions d'écriture

- On omet le signe `×` devant une lettre ou une parenthèse : `3 × x = 3x` ; `2 × (x + 1) = 2(x + 1)`.
- `x × x = x²` ; `3x × 2x = 6x²`.
- `1 × x = x` ; `x + x = 2x`.
- Le coefficient numérique s'écrit **devant** la lettre : `x × 5 = 5x`.

### 1.2 Produire une formule

| Situation | Formule |
|---|---|
| Double, triple, carré d'un nombre `n` | `2n`, `3n`, `n²` |
| Successeur, prédécesseur de `n` | `n + 1`, `n − 1` |
| Périmètre d'un rectangle | `2(L + l)` |
| Aire d'un rectangle | `L × l` |
| Nombre pair, impair | `2n`, `2n + 1` |

---

## 2. Substitution

**Calculer la valeur d'une expression littérale**, c'est remplacer la lettre par un nombre, **avec des parenthèses** si le nombre est négatif.

`3x − 5` pour `x = −2` : `3 × (−2) − 5 = −6 − 5 = −11`.

`x² − 4x + 1` pour `x = −1` : `(−1)² − 4 × (−1) + 1 = 1 + 4 + 1 = 6`.

### 2.1 Tester une égalité

Une égalité entre deux expressions est **vraie pour une valeur** de `x` si les deux membres donnent le même nombre.

- `2x + 3 = x + 7` pour `x = 4` : `11 = 11`, vrai.
- Pour `x = 1` : `5 = 8`, faux.

### 2.2 Nature d'une expression

La **nature** d'une expression est celle de sa **dernière opération** :

- `3x + 2` est une **somme** de `3x` et de `2` ;
- `5(x + 4)` est un **produit** de `5` par `(x + 4)` ;
- `(x + 4)²` est un **carré** (donc un produit `(x + 4)(x + 4)`).

---

## 3. Réduire

**Réduire** une expression, c'est regrouper les termes de même nature (en `x²`, en `x`, constantes).

```
3x + 5 − x + 2 = (3x − x) + (5 + 2) = 2x + 7
4x² + 3x − 2x² + x = 2x² + 4x
```

**On ne mélange pas** : `2x + 3x² ` ne se réduit pas ; `3x + 5` n'est pas `8x`.

**Opposé d'une expression** : `−(5 − 4x) = −5 + 4x`. Le signe `−` change tous les signes à l'intérieur.

---

## 4. Développer et factoriser

### 4.1 Distributivité simple

`k(a + b) = ka + kb` et `k(a − b) = ka − kb`.

- **Développer** : `3(x + 4) = 3x + 12` ; `5(2x − 3) = 10x − 15`.
- **Factoriser** (sens inverse) : `6x + 9 = 3(2x + 3)` ; `x² + 5x = x(x + 5)`.

Pour factoriser, on cherche un **facteur commun** à tous les termes.

### 4.2 Double distributivité

`(a + b)(c + d) = ac + ad + bc + bd`.

Exemples :

```
(x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15
(x − 2)(x + 4) = x² + 4x − 2x − 8 = x² + 2x − 8
```

### 4.3 Identités remarquables

Pour tous nombres `a` et `b` :

| Identité | Forme développée | Forme factorisée |
|---|---|---|
| Carré d'une somme | `a² + 2ab + b²` | `(a + b)²` |
| Carré d'une différence | `a² − 2ab + b²` | `(a − b)²` |
| Différence de deux carrés | `a² − b²` | `(a − b)(a + b)` |

Exemples :

```
(x + 3)² = x² + 6x + 9
(x − 4)² = x² − 8x + 16
(x + 7)(x − 7) = x² − 49
x² − 25 = (x − 5)(x + 5)
9x² − 12x + 4 = (3x − 2)²
```

**Preuve géométrique de `(a + b)² = a² + 2ab + b²`** : un carré de côté `a + b` se découpe en un carré `a²`, un carré `b²` et deux rectangles `ab`.

**Calcul mental avec les identités** :

```
101² = (100 + 1)² = 10 000 + 200 + 1 = 10 201
99²  = (100 − 1)² = 10 000 − 200 + 1 = 9 801
51 × 49 = (50 + 1)(50 − 1) = 2500 − 1 = 2499
```

### 4.4 Piège majeur

`(a + b)² ≠ a² + b²`. Contre-exemple : `a = b = 1` : `(1 + 1)² = 4` mais `1² + 1² = 2`. Il manque le **double produit** `2ab`.

---

## 5. Démontrer avec le calcul littéral

Une lettre permet de traiter **tous les nombres à la fois** : un exemple ne prouve rien, un calcul littéral prouve.

**Exemple 1.** La somme de trois entiers consécutifs est un multiple de 3.
`n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)`.

**Exemple 2.** La somme de deux nombres impairs est paire.
`(2n + 1) + (2m + 1) = 2n + 2m + 2 = 2(n + m + 1)`.

**Exemple 3.** Le carré d'un nombre impair est impair.
`(2n + 1)² = 4n² + 4n + 1 = 2(2n² + 2n) + 1`.

**Contre-exemple** : pour **réfuter** une affirmation, un seul exemple suffit. « Tout nombre premier est impair » est faux : `2`.

**Conjecturer** : un tableur ou un algorithme permet de tester beaucoup de valeurs avant de chercher une preuve.

---

## 6. Problèmes types

**Problème 1.** Un rectangle a pour longueur `x + 3` et pour largeur `x`. Exprimer son aire. Calculer pour `x = 5`.
`Aire = x(x + 3) = x² + 3x`. Pour `x = 5` : `25 + 15 = 40`.

**Problème 2 (programme de calcul).** Choisir un nombre, ajouter 3, élever au carré, retrancher le carré du nombre de départ. Montrer que le résultat vaut `6x + 9`.
`(x + 3)² − x² = x² + 6x + 9 − x² = 6x + 9`.

**Problème 3.** Calculer `2023² − 2022²` sans calculatrice.
`(2023 − 2022)(2023 + 2022) = 1 × 4045 = 4045`.

---

## 7. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Réduire des termes non semblables | `3x + 5 = 8x` | La lettre vue comme un nombre à « absorber » | Substituer une valeur : `x = 2` donne `11 ≠ 16` |
| `(a + b)² = a² + b²` | `(x + 3)² = x² + 9` | Fausse linéarité du carré | Contre-exemple numérique, aire d'un carré découpé |
| Oublier de distribuer à tous les termes | `3(x + 4) = 3x + 4` | Distributivité partielle | Écrire `3(x + 4) = 3x + 3 × 4` |
| Erreur de signe dans `−(…)` | `−(5 − 4x) = −5 − 4x` | Signe non propagé | Calculer avec une valeur de `x` |
| Confondre `2x` et `x²` | `x² = 2x` | Notation | Calculer pour `x = 3` : `9` et `6` |
| Perdre le signe du double produit | `(x − 4)² = x² + 16` | Identité mal apprise | Développer avec la double distributivité |
| Croire qu'un exemple prouve | « 4 + 6 = 10 pair donc impair + impair = pair » | Statut de la preuve | Exiger une preuve avec `2n + 1` |

**Outils** : substitution pour tester, aires de rectangles et de carrés, tableur, tests avec plusieurs valeurs, programmes de calcul.

---

## 8. À retenir

- `3x` = `3 × x` ; `x²` = `x × x` ; `x + x = 2x`.
- Substituer avec **parenthèses** pour les nombres négatifs.
- `k(a + b) = ka + kb` ; `(a + b)(c + d) = ac + ad + bc + bd`.
- `(a + b)² = a² + 2ab + b²` ; `(a − b)² = a² − 2ab + b²` ; `a² − b² = (a − b)(a + b)`.
- `(a + b)² ≠ a² + b²`.
- Un calcul littéral **prouve** pour tous les nombres ; un exemple ne prouve pas, un contre-exemple réfute.

---

## Pour s'entraîner

- Quiz : [quiz/nombres-et-calculs/06-calcul-litteral.html](../../quiz/nombres-et-calculs/06-calcul-litteral.html)
- Exercices : [exercices/nombres-et-calculs/06-calcul-litteral.html](../../exercices/nombres-et-calculs/06-calcul-litteral.html)

## Pistes de prolongement (culture mathématique)

- Al-Khwarizmi et la « chose » qu'on cherche (origine du mot algèbre).
- Identité de Sophie Germain.
