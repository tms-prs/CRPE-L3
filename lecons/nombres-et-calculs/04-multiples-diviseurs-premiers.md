# Leçon 04 — Multiples, diviseurs et nombres premiers

**Domaine** : Nombres et calculs
**Programme** : cycle 4 — multiples et diviseurs, critères de divisibilité par 3 et 9 (5e) ; factorisation d'un entier, simplification de fractions, dénominateur commun (3e). Les nombres premiers sont traités comme prolongement (BO du 5 mars 2026, annexe 2). PGCD et PPCM ne sont plus nommés au programme mais restent des outils utiles.
**Prérequis** : tables de multiplication, division euclidienne, fractions (leçon 02), racine carrée (leçon 03)
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- utiliser la division euclidienne et le vocabulaire multiple / diviseur / divisible ;
- appliquer les critères de divisibilité par 2, 3, 5, 9, 10 (et les justifier) ;
- reconnaître un nombre premier, dresser la liste des premiers jusqu'à 50 ;
- décomposer un entier en facteurs premiers ;
- exploiter la décomposition : diviseurs, fractions irréductibles, dénominateur commun, problèmes de partage et de coïncidence ;
- repérer les erreurs types d'élèves.

---

## 1. Division euclidienne, multiples, diviseurs

### 1.1 Division euclidienne

Pour deux entiers naturels `a` et `b` (`b ≠ 0`), il existe un **unique** couple `(q, r)` tel que :

`a = b × q + r` avec `0 ≤ r < b`.

`q` est le **quotient**, `r` le **reste**. Exemples : `17 = 5 × 3 + 2` ; `250 = 7 × 35 + 5`.

Le reste est **toujours strictement plus petit que le diviseur** : dans une division par 7, les restes possibles sont `0, 1, …, 6`.

### 1.2 Vocabulaire

Soient `a` et `b` deux entiers (`b ≠ 0`). Les trois affirmations suivantes sont équivalentes :

- `a` est un **multiple** de `b` ;
- `b` est un **diviseur** de `a` ;
- `a` est **divisible** par `b` (le reste de la division euclidienne est `0`, donc `a = b × k` avec `k` entier).

Exemple : `12 = 4 × 3` → `12` est un multiple de `4` et de `3` ; `3` et `4` sont des diviseurs de `12`.

**Remarques** :

- `0` est un multiple de tout entier (`0 = b × 0`).
- `1` divise tous les entiers ; tout entier `a ≥ 1` est divisible par `1` et par lui-même.
- Un entier non nul a un nombre **fini** de diviseurs et une **infinité** de multiples.

### 1.3 Chercher tous les diviseurs

On teste les entiers `1, 2, 3…` et on les range **par paires** : si `d` divise `n`, alors `n/d` aussi.

`36` : `1 × 36`, `2 × 18`, `3 × 12`, `4 × 9`, `6 × 6`.
Diviseurs de `36` : `1, 2, 3, 4, 6, 9, 12, 18, 36` (9 diviseurs, nombre impair car `36` est un carré parfait).

On peut arrêter la recherche quand `d > √n`.

---

## 2. Critères de divisibilité

| Divisible par | Critère | Exemple |
|---|---|---|
| **2** | Chiffre des unités pair (0, 2, 4, 6, 8) | `3 478` oui |
| **5** | Chiffre des unités 0 ou 5 | `1 205` oui |
| **10** | Chiffre des unités 0 | `4 530` oui |
| **3** | Somme des chiffres divisible par 3 | `2 574` : `2+5+7+4 = 18` oui |
| **9** | Somme des chiffres divisible par 9 | `4 725` : `4+7+2+5 = 18` oui |

Compléments utiles : par **4** si le nombre formé par les deux derniers chiffres est divisible par 4 ; par **6** si divisible par 2 **et** par 3.

### 2.1 Pourquoi les critères de 3 et 9 fonctionnent (preuve attendue)

Écrivons `2574 = 2 × 1000 + 5 × 100 + 7 × 10 + 4`. Or :

- `1000 = 999 + 1`, `100 = 99 + 1`, `10 = 9 + 1`, où `999`, `99` et `9` sont des multiples de 9 ;
- donc `2574 = (multiple de 9) + (2 + 5 + 7 + 4)`.

Le nombre et la somme de ses chiffres ont le **même reste** dans la division par 9 (et par 3). D'où les critères.

**Conséquence** : le reste de la division d'un nombre par 9 est celui de la somme de ses chiffres (`1 000 000` a pour reste `1`).

### 2.2 Implications

- Divisible par 9 ⇒ divisible par 3 (réciproque fausse : `12` est divisible par 3 mais pas par 9).
- Divisible par 2 et par 5 ⇔ divisible par 10.

---

## 3. Nombres premiers

### 3.1 Définition

Un entier naturel est **premier** s'il possède **exactement deux diviseurs** : `1` et lui-même.

- `1` n'est **pas** premier (un seul diviseur).
- `2` est le **seul premier pair**.
- Un nombre non premier supérieur à 1 est dit **composé**.

Premiers jusqu'à 50 : `2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47` (15 nombres).

### 3.2 Le crible d'Ératosthène

On écrit les entiers de 2 à 100, puis on **barre** les multiples de 2 (sauf 2), de 3 (sauf 3), de 5, de 7. Les nombres restants sont premiers. On s'arrête à 7 car `11² = 121 > 100`.

### 3.3 Tester si un nombre est premier

Pour savoir si `n` est premier, il suffit de tester la divisibilité par les **nombres premiers** `p` tels que `p² ≤ n` (`p ≤ √n`).

**Exemple** : `97`. `√97 ≈ 9,8`, donc on teste `2, 3, 5, 7` : aucun ne divise `97`, donc **97 est premier**.

**Contre-exemple** : `91` n'est pas premier (`7 × 13`). `91` est un piège classique car il passe les critères de 2, 3, 5.

### 3.4 Il y a une infinité de nombres premiers

Preuve d'Euclide (par l'absurde) : si `p₁, …, pₖ` étaient tous les premiers, le nombre `N = p₁ × … × pₖ + 1` aurait un diviseur premier, forcément différent des `pᵢ` : contradiction.

---

## 4. Décomposition en facteurs premiers

### 4.1 Théorème

Tout entier `n ≥ 2` s'écrit comme **produit de nombres premiers**, et cette écriture est **unique** à l'ordre des facteurs près.

`60 = 2 × 2 × 3 × 5 = 2² × 3 × 5`.

### 4.2 Méthode

On divise successivement par les plus petits premiers possibles.

```
60 | 2
30 | 2
15 | 3
 5 | 5
 1
```

`60 = 2² × 3 × 5`. Un facteur n'est valable que s'il est **premier** : `60 = 6 × 10` n'est pas une décomposition en facteurs premiers.

Autre exemple : `360 = 2³ × 3² × 5`.

### 4.3 Ce que donne la décomposition

- **Diviseurs de `n`** : tous les produits de puissances des facteurs premiers. Pour `72 = 2³ × 3²` : exposant de 2 de 0 à 3 (4 choix), exposant de 3 de 0 à 2 (3 choix), soit `4 × 3 = 12` diviseurs.
- **Carré parfait** : tous les exposants sont **pairs** (`144 = 2⁴ × 3²`).
- **Fraction irréductible** (3e) : on simplifie les facteurs communs.
  `84/36 = (2² × 3 × 7)/(2² × 3²) = 7/3`.

---

## 5. Outils : PGCD et PPCM

*Hors programme explicite du cycle 4 en 2026, mais utiles pour simplifier des fractions et résoudre des problèmes.*

### 5.1 PGCD

Le **PGCD** de `a` et `b` est le plus grand diviseur commun. On le lit dans les décompositions : on garde les facteurs **communs** avec le **plus petit** exposant.

`84 = 2² × 3 × 7`, `36 = 2² × 3²` → `PGCD(84, 36) = 2² × 3 = 12`.

**Usage** : simplifier une fraction en divisant par le PGCD ; partager en parts égales sans reste.

### 5.2 PPCM

Le **PPCM** est le plus petit multiple commun non nul. On prend **tous** les facteurs avec le **plus grand** exposant.

`8 = 2³`, `12 = 2² × 3` → `PPCM(8, 12) = 2³ × 3 = 24`.

**Usage** : dénominateur commun le plus petit pour additionner des fractions ; phénomènes périodiques qui se rencontrent.

---

## 6. Problèmes types

**Problème 1 (partage).** Dans une classe, 45 filles et 60 garçons. Combien d'équipes identiques (mêmes nombres de filles et de garçons) au maximum, en utilisant tout le monde ?
`PGCD(45, 60) = 15` équipes de 3 filles et 4 garçons.

**Problème 2 (découpe).** Une plaque de 84 cm sur 60 cm est découpée en carrés identiques, sans perte, avec le plus grand côté possible.
`PGCD(84, 60) = 12` : carrés de 12 cm.

**Problème 3 (coïncidence).** Deux bus partent ensemble d'un arrêt ; l'un repasse toutes les 12 min, l'autre toutes les 18 min. Quand se retrouvent-ils ?
`PPCM(12, 18) = 36` : après 36 minutes.

**Problème 4 (preuve).** Montrer que la somme de trois entiers consécutifs est divisible par 3.
`n + (n+1) + (n+2) = 3n + 3 = 3(n + 1)`.

---

## 7. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Considérer 1 comme premier | « 1 est premier : divisible par 1 et par lui-même » | Définition tronquée (deux diviseurs **distincts**) | Lister les diviseurs de 1, puis de 2, 3, 4 |
| Confondre impair et premier | « 9 est premier » | Impair associé à « sans diviseur » | Crible, contre-exemples (`9 = 3 × 3`, `15`, `21`) |
| Confondre multiple et diviseur | « 3 est un multiple de 12 » | Vocabulaire inversé | Schéma `12 = 3 × 4`, phrases-modèles |
| Critère de 3 sur le dernier chiffre | « 52 est divisible par 3 car 2… » | Transfert du critère de 2 ou 5 | Montrer que 12 est divisible par 3 mais pas 2 |
| Décomposition non terminée | `12 = 3 × 4` | Facteur composé conservé | Exiger que chaque facteur soit premier, arbre de facteurs |
| Penser que 0 n'est multiple de rien | | Intuition de la « table » | `0 = 7 × 0` |
| Oublier un diviseur trivial | Diviseurs de 12 sans 1 ni 12 | Diviseur « propre » vs diviseur | Méthode par paires |

**Outils** : tableau de nombres (crible), arbre de facteurs, rectangles de jetons (un nombre est composé s'il se range en rectangle non trivial), calculatrice avec division euclidienne.

---

## 8. À retenir

- `a = b × q + r` avec `0 ≤ r < b`.
- `a` multiple de `b` ⇔ `b` diviseur de `a` ⇔ reste nul.
- Critères : 2 (unités paires), 5 (0 ou 5), 10 (0), 3 et 9 (somme des chiffres).
- Premier : exactement deux diviseurs ; 1 n'est pas premier ; 2 est le seul premier pair.
- Test de primalité : diviser par les premiers `p` avec `p ≤ √n`.
- Décomposition en facteurs premiers **unique** ; elle sert à simplifier, à compter les diviseurs, à reconnaître un carré parfait.

---

## Pour s'entraîner

- Quiz : [quiz/nombres-et-calculs/04-multiples-diviseurs-premiers.html](../../quiz/nombres-et-calculs/04-multiples-diviseurs-premiers.html)
- Exercices : [exercices/nombres-et-calculs/04-multiples-diviseurs-premiers.html](../../exercices/nombres-et-calculs/04-multiples-diviseurs-premiers.html)

## Pistes de prolongement (culture mathématique)

- Notion de nombre premier et développements : infinité des premiers, crible d'Ératosthène.
- Conjecture de Goldbach, nombres premiers jumeaux ; usages en cryptographie.
- Engrenages, calendriers, phénomènes périodiques (cigales à cycles de 13 et 17 ans) : lien avec PPCM.
