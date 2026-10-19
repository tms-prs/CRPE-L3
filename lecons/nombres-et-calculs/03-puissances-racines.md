# Leçon 03 — Puissances, notation scientifique et racine carrée

**Domaine** : Nombres et calculs
**Programme** : cycle 4 — carré et cube en 5e ; puissances d'exposant positif, produits de puissances, racine carrée (définition, encadrement) en 4e ; exposants négatifs, quotients, notation scientifique, équation x² = a en 3e (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 01 et 02, tables de multiplication, carrés de 0 à 12
**Durée conseillée** : 2 h (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- définir et calculer des puissances d'exposant entier (positif, puis négatif) ;
- appliquer les règles sur les produits et quotients de puissances ;
- écrire un nombre en notation scientifique et utiliser les préfixes (nano à giga) ;
- définir la racine carrée, l'encadrer, résoudre x² = a ;
- repérer les erreurs types d'élèves.

**Automatismes à avoir** : carrés des entiers de 0 à 12 (`0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144`), `2³ = 8`, `3³ = 27`, `10² = 100`, `10³ = 1000`.

---

## 1. Puissances d'un nombre

### 1.1 Définition (exposant entier positif)

Pour un nombre `a` et un entier `n ≥ 1` :

`aⁿ = a × a × … × a` (`n` facteurs)

- `a²` (carré) : `7² = 7 × 7 = 49`.
- `a³` (cube) : `4³ = 4 × 4 × 4 = 64`.
- `a¹ = a`.
- Une puissance est une **multiplication itérée**, pas une multiplication par l'exposant : `2⁵ = 32`, et non `10`.

**Situations qui donnent du sens** : nombre de cases d'un carré de côté `a` (`a²`), volume d'un cube d'arête `a` (`a³`), doublement répété (1 grain, puis 2, 4, 8… sur l'échiquier de Sissa : `2ⁿ`).

### 1.2 Puissances et signes

| Écriture | Calcul | Résultat |
|---|---|---|
| `(−3)²` | `(−3) × (−3)` | `9` |
| `−3²` | `−(3 × 3)` | `−9` |
| `(−2)³` | `(−2) × (−2) × (−2)` | `−8` |
| `(−2)⁴` | | `16` |

- Base négative et exposant **pair** : résultat positif ; exposant **impair** : résultat négatif.
- Sans parenthèses, la puissance s'applique **avant** le signe : `−3² = −9`.

### 1.3 Exposant négatif (3e)

Pour `a ≠ 0` et `n` entier positif :

`a⁻ⁿ = 1/aⁿ`

Exemples : `2⁻³ = 1/2³ = 1/8` ; `10⁻² = 1/100 = 0,01` ; `5⁻¹ = 1/5`.

L'exposant négatif **n'est pas** un nombre négatif : `10⁻² = 0,01 > 0`. C'est l'**inverse** de la puissance positive.

Par convention `a⁰ = 1` (pour `a ≠ 0`). On le voit en divisant par `a` à chaque ligne :

```
10³ = 1000
10² =  100
10¹ =   10
10⁰ =    1
10⁻¹ = 0,1
10⁻² = 0,01
```

---

## 2. Calculs avec des puissances

### 2.1 Produit de puissances d'un même nombre (4e)

`aᵐ × aⁿ = aᵐ⁺ⁿ`

**Pourquoi ?** `2³ × 2⁴ = (2 × 2 × 2) × (2 × 2 × 2 × 2) = 2⁷` : au total 7 facteurs.

On additionne les **exposants**, la **base** ne change pas : `2³ × 2⁴ = 2⁷`, et non `4⁷`.

### 2.2 Quotient de puissances d'un même nombre (3e)

`aᵐ / aⁿ = aᵐ⁻ⁿ` (`a ≠ 0`)

`5⁷ / 5⁴ = 5³` ; `3² / 3⁵ = 3⁻³ = 1/27`.

### 2.3 Produit de puissances de même exposant (4e)

`aⁿ × bⁿ = (a × b)ⁿ`

`2³ × 5³ = (2 × 5)³ = 10³ = 1000`.

### 2.4 Puissances de 10

- `10ⁿ` s'écrit `1` suivi de `n` zéros : `10⁶ = 1 000 000`.
- `10⁻ⁿ` s'écrit avec `n` chiffres après la virgule, le dernier étant `1` : `10⁻³ = 0,001`.
- Multiplier par `10ⁿ` décale la virgule de `n` rangs vers la droite ; multiplier par `10⁻ⁿ`, vers la gauche.
- `10ᵐ × 10ⁿ = 10ᵐ⁺ⁿ` et `10ᵐ / 10ⁿ = 10ᵐ⁻ⁿ`.

### 2.5 Préfixes et conversions (nano à giga)

| Préfixe | Symbole | Puissance de 10 |
|---|---|---|
| nano | n | `10⁻⁹` |
| micro | µ | `10⁻⁶` |
| milli | m | `10⁻³` |
| kilo | k | `10³` |
| méga | M | `10⁶` |
| giga | G | `10⁹` |

Exemples : `5 Go = 5 × 10⁹ octets = 5000 Mo` ; `1 nm = 10⁻⁹ m`.

---

## 3. Notation scientifique (3e)

### 3.1 Définition

Un nombre décimal positif est en **notation scientifique** s'il s'écrit `a × 10ⁿ` avec :

- `1 ≤ a < 10` (un seul chiffre non nul avant la virgule) ;
- `n` entier relatif.

Exemples : `45 000 000 = 4,5 × 10⁷` ; `0,00032 = 3,2 × 10⁻⁴`.

**Non scientifiques** : `62 × 10⁴` (62 ≥ 10), `0,62 × 10⁶` (0,62 < 1).

### 3.2 Méthode

1. Placer la virgule après le premier chiffre non nul.
2. Compter de combien de rangs elle a été déplacée.
3. Vers la gauche : exposant **positif** ; vers la droite : exposant **négatif**.

`750 × 10⁵` → `7,5 × 10² × 10⁵ = 7,5 × 10⁷`.

### 3.3 Calculs

`(3 × 10⁴) × (2 × 10³) = (3 × 2) × (10⁴ × 10³) = 6 × 10⁷`.

`(6 × 10⁵) / (3 × 10²) = 2 × 10³`.

Si le produit des mantisses dépasse 10, on réajuste : `(4 × 10³) × (5 × 10²) = 20 × 10⁵ = 2 × 10⁶`.

### 3.4 Usage

Ordres de grandeur : distance Terre-Soleil `1,5 × 10⁸ km`, vitesse de la lumière `3 × 10⁵ km/s`, diamètre d'un atome `10⁻¹⁰ m`. La notation facilite aussi les comparaisons : on compare d'abord les exposants.

---

## 4. Racine carrée (4e et 3e)

### 4.1 Définition

La **racine carrée** d'un nombre positif `a`, notée `√a`, est **le nombre positif dont le carré est `a`**.

- `√49 = 7` car `7² = 49` et `7 > 0`.
- `√0 = 0` ; `√1 = 1`.
- `√a` n'existe pas si `a < 0` (aucun carré n'est négatif).
- `(√a)² = a` et, pour `a ≥ 0`, `√(a²) = a`.

**Situation d'introduction** : « quel est le côté d'un carré d'aire 49 cm² ? » : `√49 = 7 cm`.

### 4.2 Carrés parfaits et encadrements

Les carrés parfaits à connaître : `0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144`.

Pour `√50` : `49 < 50 < 64`, donc `7 < √50 < 8`.

`√2`, `√3`, `√5`… ne sont pas des carrés parfaits : on les **encadre** (`1,4 < √2 < 1,5`). Ce sont des nombres **irrationnels** (leur écriture décimale est infinie non périodique) ; `√2` est le premier nombre irrationnel découvert.

### 4.3 Équation x² = a (3e)

| Valeur de `a` | Solutions de `x² = a` |
|---|---|
| `a > 0` | deux solutions : `√a` et `−√a` |
| `a = 0` | une solution : `0` |
| `a < 0` | aucune solution |

Exemples : `x² = 25` → `x = 5` ou `x = −5` ; `x² = 7` → `x = √7` ou `x = −√7` ; `x² = −4` → pas de solution.

**Graphiquement** : on cherche les points d'abscisse `x` de la parabole `y = x²` d'ordonnée `a`.

### 4.4 Lien avec Pythagore

Dans un triangle rectangle de côtés de l'angle droit `6` et `8`, l'hypoténuse `h` vérifie `h² = 36 + 64 = 100`, donc `h = √100 = 10`.

### 4.5 Attention aux pièges

- `√(a + b) ≠ √a + √b` : `√(9 + 16) = √25 = 5`, alors que `√9 + √16 = 7`.
- `√9 = 3`, **pas** `±3`. Le signe `±` vient de l'équation `x² = 9`, pas de la racine.
- `√a` n'est pas `a/2`.

---

## 5. Problèmes types

**Problème 1 (doublement).** Sur la première case d'un échiquier, on pose 1 grain, puis on double à chaque case. Combien de grains sur la 8e case ?
`2⁷ = 128`.

**Problème 2 (pliage).** Une feuille de 0,1 mm d'épaisseur est pliée 10 fois en deux. Épaisseur ?
`0,1 × 2¹⁰ = 0,1 × 1024 = 102,4 mm`.

**Problème 3 (temps de trajet de la lumière).** Le Soleil est à `1,5 × 10⁸ km` de la Terre ; la lumière se déplace à `3 × 10⁵ km/s`. Durée ?
`(1,5 × 10⁸)/(3 × 10⁵) = 0,5 × 10³ = 500 s`, soit environ 8 min 20 s.

**Problème 4 (stockage).** Un fichier de `5 Go` occupe combien de `Mo` ?
`5 × 10⁹ / 10⁶ = 5 × 10³ = 5000 Mo`.

---

## 6. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Multiplier base et exposant | `2⁵ = 10` | Puissance perçue comme `2 × 5` | Écrire `2 × 2 × 2 × 2 × 2`, compter les facteurs |
| Multiplier les bases au lieu d'additionner les exposants | `2³ × 2⁴ = 4⁷` | Application de la règle de façon mécanique | Écrire le développement des deux puissances |
| Exposant négatif = nombre négatif | `10⁻² = −100` | Confusion signe de l'exposant / signe du nombre | Suite `10³, 10², 10¹, 10⁰, 10⁻¹…` divisée par 10 |
| Perdre les parenthèses | `−3² = 9` | Priorité de la puissance mal comprise | Comparer `(−3)²` et `−3²` à la calculatrice |
| Notation scientifique incorrecte | `62 × 10⁴` accepté | Mantisse non comprise entre 1 et 10 | Rappeler la définition, contre-exemples |
| Distribuer la racine sur une somme | `√(9 + 16) = 3 + 4` | Fausse linéarité | Calculer les deux membres : `5 ≠ 7` |
| `√9 = ±3` | | Confusion avec `x² = 9` | Distinguer « la racine » et « les solutions » |

**Outils** : calculatrice (exploration, vérification), tableau de numération, suites de nombres, aires de carrés, tableur pour étudier `2ⁿ`.

---

## 7. À retenir

- `aⁿ = a × a × … × a` ; `a⁻ⁿ = 1/aⁿ` ; exposant négatif ≠ nombre négatif.
- `aᵐ × aⁿ = aᵐ⁺ⁿ` ; `aᵐ/aⁿ = aᵐ⁻ⁿ` ; `aⁿ × bⁿ = (ab)ⁿ`.
- `(−a)ⁿ` : signe selon la parité de `n` ; `−aⁿ ≠ (−a)ⁿ`.
- Notation scientifique : `a × 10ⁿ` avec `1 ≤ a < 10`.
- `√a ≥ 0` ; `(√a)² = a` ; `x² = a` a 2, 1 ou 0 solution selon le signe de `a`.
- `√(a + b) ≠ √a + √b`.

---

## Pour s'entraîner

- Quiz : [quiz/nombres-et-calculs/03-puissances-racines.html](../../quiz/nombres-et-calculs/03-puissances-racines.html)
- Exercices : [exercices/nombres-et-calculs/03-puissances-racines.html](../../exercices/nombres-et-calculs/03-puissances-racines.html)

## Pistes de prolongement (culture mathématique)

- L'échiquier de Sissa (croissance exponentielle) ; le papyrus de Rhind.
- `√2` est irrationnel : démonstration par l'absurde (lien avec l'aire d'un carré et la longueur de son côté).
- Algorithmes d'extraction de racines carrées ; paraboles et antennes paraboliques.
