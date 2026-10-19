# Leçon 07 — Équations et inéquations du premier degré

**Domaine** : Nombres et calculs (calcul littéral et algébrique)
**Programme** : cycle 4 — équations `ax = c`, `x + b = c` (5e) ; `ax + b = c`, `ax + b = cx + d` et mise en équation (4e) ; inéquation `ax ≥ b`, équation produit nul, analyse-synthèse (3e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 01, 05, 06
**Durée conseillée** : 2 h (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- tester si un nombre est solution ;
- résoudre une équation du premier degré (formes `ax = c`, `ax + b = c`, `ax + b = cx + d`) ;
- résoudre une équation produit nul et une équation `x² = a` ;
- résoudre une inéquation du premier degré et représenter les solutions ;
- mettre un problème en équation et le résoudre ;
- repérer les erreurs types d'élèves.

---

## 1. Équation : vocabulaire

Une **équation** est une égalité contenant une **inconnue** (souvent `x`). **Résoudre** l'équation, c'est trouver **toutes** les valeurs de l'inconnue pour lesquelles l'égalité est vraie : ce sont les **solutions**.

**Tester** : `x = 4` est solution de `2x + 3 = 11` car `2 × 4 + 3 = 11`.

**Équation à trous** (cycle 3 → 5e) : `x + 3 = 7` revient à `? + 3 = 7`, que l'on résout avec l'opération inverse.

---

## 2. Résoudre une équation du premier degré

### 2.1 Principe

On **ne change pas les solutions** d'une équation en :

- ajoutant ou retranchant le **même nombre** aux deux membres ;
- multipliant ou divisant les deux membres par le **même nombre non nul**.

On isole `x` en « défaisant » les opérations dans l'ordre inverse.

### 2.2 Les formes à connaître

| Forme | Méthode | Exemple |
|---|---|---|
| `x + b = c` | Retrancher `b` | `x + 7 = 2` → `x = −5` |
| `ax = c` (`a ≠ 0`) | Diviser par `a` | `3x = 12` → `x = 4` |
| `ax + b = c` | Retrancher `b`, puis diviser par `a` | `2x + 5 = 17` → `2x = 12` → `x = 6` |
| `ax + b = cx + d` | Regrouper les `x` d'un côté, les nombres de l'autre | voir ci-dessous |

**Exemple détaillé : `5x − 3 = 2x + 9`**

```
5x − 3 = 2x + 9
5x − 2x = 9 + 3        (on regroupe)
3x = 12
x = 4
```

**Vérification** : `5 × 4 − 3 = 17` et `2 × 4 + 9 = 17`. ✓ Solution : `4`.

**Autre exemple : `4 − 3x = 10`**

```
−3x = 10 − 4 = 6
x = 6 ÷ (−3) = −2
```

**Avec une fraction : `x/3 + 1 = 5`**

```
x/3 = 4
x = 12
```

### 2.3 Cas particuliers

- `0x = 5` : pas de solution ; `0x = 0` : tous les nombres sont solutions (cas rares au cycle 4).
- On **vérifie** toujours la solution trouvée dans l'équation de départ.

---

## 3. Équation produit nul

**Propriété** : un produit de facteurs est nul si et seulement si **l'un au moins** de ses facteurs est nul.

`(x − 2)(x + 5) = 0` ⇔ `x − 2 = 0` ou `x + 5 = 0` ⇔ `x = 2` ou `x = −5`.

Deux solutions : `2` et `−5`.

**Mise en œuvre** : on factorise pour se ramener à un produit nul.
`x² − 25 = 0` ⇔ `(x − 5)(x + 5) = 0` ⇔ `x = 5` ou `x = −5`.
`x² + 3x = 0` ⇔ `x(x + 3) = 0` ⇔ `x = 0` ou `x = −3`.

**Piège** : `(x − 2)(x + 5) = 6` ne se résout **pas** en posant `x − 2 = 6`. La propriété ne marche que pour un produit **égal à 0**.

---

## 4. Équation `x² = a`

Rappel de la leçon 03 :

- `a > 0` : deux solutions, `√a` et `−√a` ;
- `a = 0` : une solution, `0` ;
- `a < 0` : aucune solution.

Exemple : `x² = 49` → `x = 7` ou `x = −7`.

---

## 5. Inéquations du premier degré

### 5.1 Principe

Une **inéquation** contient un signe `<`, `≤`, `>` ou `≥`. Ses solutions forment un **intervalle** de nombres.

Mêmes règles que pour les équations, **sauf** :

> Quand on multiplie ou divise les deux membres par un nombre **négatif**, on **change le sens** de l'inégalité.

### 5.2 Exemples

**`3x ≥ 12`** : on divise par `3 > 0` : `x ≥ 4`.

**`2x + 1 ≤ 9`** :
```
2x ≤ 8
x ≤ 4
```

**`−2x < 6`** : on divise par `−2 < 0` : on **change le sens** : `x > −3`.

### 5.3 Représentation sur une droite graduée

- `x ≥ 4` : crochet **fermé** en 4 (4 est solution), partie à droite.
- `x > −3` : crochet **ouvert** en −3 (−3 n'est pas solution), partie à droite.

```
x > −3 :   ──────○════════►        (○ : −3 exclu)
          −3     0
x ≥ 4 :    ────────────●═══►       (● : 4 inclus)
                       4
```

### 5.4 Résolution graphique

On résout `f(x) = g(x)` ou `f(x) ≥ g(x)` en lisant les abscisses des points d'intersection ou de position relative de deux courbes (voir les fonctions).

---

## 6. Mettre un problème en équation

**Méthode en 5 étapes**

1. **Choisir l'inconnue** et la définir clairement (« Soit `x` le nombre de… »).
2. **Traduire** les données en une équation.
3. **Résoudre** l'équation.
4. **Vérifier** dans l'énoncé (la solution a-t-elle un sens ?).
5. **Répondre** par une phrase.

**Problème 1 (âges).** Un père a 3 fois l'âge de son fils ; à eux deux, ils ont 48 ans. Quel âge a le fils ?
Soit `x` l'âge du fils. `x + 3x = 48` → `4x = 48` → `x = 12`. Le fils a 12 ans, le père 36.

**Problème 2 (périmètre).** Un rectangle de périmètre 36 cm a une longueur supérieure de 4 cm à sa largeur. Dimensions ?
Soit `x` la largeur : `2(x + x + 4) = 36` → `4x + 8 = 36` → `x = 7`. Largeur 7 cm, longueur 11 cm.

**Problème 3 (tarifs).** Tarif A : 12 € d'abonnement puis 2 € par entrée. Tarif B : 4 € par entrée. À partir de combien d'entrées A est-il plus avantageux ?
`12 + 2x = 4x` → `12 = 2x` → `x = 6`. Pour 6 entrées, les deux tarifs coïncident ; au-delà de 6, A est moins cher (inéquation `12 + 2x < 4x` ⇔ `x > 6`).

**Problème 4 (consécutifs).** La somme de trois entiers consécutifs est 72. Le plus petit ?
`n + (n + 1) + (n + 2) = 72` → `3n + 3 = 72` → `n = 23`.

---

## 7. Analyse-synthèse et conjecture

**Analyse-synthèse** (3e) : on suppose qu'une solution existe et on cherche ce qu'elle doit vérifier (analyse), puis on **vérifie** les candidats (synthèse). Cela évite d'oublier de contrôler les valeurs trouvées.

**Conjecturer** : avec un tableur, on teste des valeurs de `x` pour repérer où deux expressions deviennent égales ; avec un algorithme (boucle), on balaie des valeurs. On **prouve** ensuite par le calcul.

---

## 8. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Oublier de changer le signe en passant d'un membre à l'autre | `x + 3 = 7` → `x = 7 + 3` | Règle « on change de côté » sans sens | Retrancher 3 aux deux membres, schéma de balance |
| Opération faite d'un seul côté | `2x = 8` → `x = 8` | Division oubliée à gauche | Balance : « ce qu'on fait à gauche, on le fait à droite » |
| Ne pas changer le sens de l'inégalité | `−2x < 6` → `x < −3` | Règle non appliquée | Tester `x = 0` : `0 < 6` est vrai alors que `0 < −3` est faux |
| Appliquer produit nul à un produit non nul | `(x − 2)(x + 5) = 6` → `x = 8` ou `x = 1` | Propriété étendue abusivement | Tester les « solutions » |
| Ne pas vérifier la solution | | Fin de l'exercice sans contrôle | Habitude de vérification systématique |
| Oublier la deuxième solution | `x² = 25` → `x = 5` | Confusion avec `√25` | Rappeler : deux solutions si `a > 0` |
| Mettre en équation sans définir l'inconnue | « x = 12 » sans sens | Pas de modélisation explicite | Imposer « Soit `x` le nombre de… » |

**Outils** : balance de Roberval, schémas en barres, tableur, tests de valeurs, programmes de calcul à remonter.

---

## 9. À retenir

- Solution = valeur qui rend l'égalité vraie ; toujours **vérifier**.
- On fait la **même opération** aux deux membres.
- `ax + b = cx + d` : regrouper les `x` d'un côté, les nombres de l'autre.
- Produit nul : `A × B = 0` ⇔ `A = 0` ou `B = 0`.
- Inéquation : on change le sens quand on multiplie ou divise par un **négatif**.
- Problème : inconnue, équation, résolution, vérification, phrase de réponse.

---

## Pour s'entraîner

- Quiz : [quiz/nombres-et-calculs/07-equations-inequations.html](../../quiz/nombres-et-calculs/07-equations-inequations.html)
- Exercices : [exercices/nombres-et-calculs/07-equations-inequations.html](../../exercices/nombres-et-calculs/07-equations-inequations.html)

## Pistes de prolongement (culture mathématique)

- Al-Khwarizmi : `x + b = c` (« Al-jabr ») et `ax = c` (« Al-hatt »).
- Méthode de fausse position pour les équations `ax = c`.
