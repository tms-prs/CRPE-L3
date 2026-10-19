# Leçon 05 — Théorème de Pythagore

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — théorème de Pythagore, réciproque et contraposée ; travail de logique ; triangle rectangle et cercle circonscrit ; construire des rectangles sans équerre (4e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 01 à 03 ; racine carrée et puissances (thème Nombres et calculs, leçon 03), calcul littéral (leçon 06)
**Durée conseillée** : 2 h (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- énoncer et utiliser le théorème de Pythagore pour calculer une longueur ;
- utiliser la réciproque pour prouver qu'un triangle est rectangle, et la contraposée pour prouver qu'il ne l'est pas ;
- connaître le lien entre triangle rectangle et cercle circonscrit ;
- rédiger une démonstration rigoureuse ;
- repérer les erreurs types d'élèves.

---

## 1. Le théorème

**Théorème de Pythagore.** Si un triangle `ABC` est **rectangle en `A`**, alors le carré de l'**hypoténuse** `[BC]` (le côté opposé à l'angle droit) est égal à la somme des carrés des deux autres côtés :

`BC² = AB² + AC²`

```svg Le carré construit sur l'hypoténuse a la même aire que la somme des carrés construits sur les deux autres côtés : 25 = 9 + 16.
<svg viewBox="0 0 400 300" width="400" role="img" aria-label="Figure du théorème de Pythagore avec un triangle 3-4-5">
  <rect class="fs" x="78" y="118" width="72" height="72"/>
  <rect class="fs" x="150" y="190" width="96" height="96"/>
  <path class="fb" d="M246 190L150 118L222 22L318 94Z" style="opacity:.35"/>
  <path class="fc" d="M150 190L246 190L150 118Z"/>
  <path class="s" d="M150 190h-10v-10h10"/>
  <text class="b" x="102" y="160">9</text><text class="b" x="192" y="244">16</text><text class="b" x="248" y="94">25</text>
  <text x="118" y="206">A</text><text x="248" y="208">B</text><text x="136" y="112">C</text>
  <text class="m" x="60" y="208">3</text><text class="m" x="196" y="206">4</text><text class="m" x="212" y="146">5</text>
</svg>
```

**Les trois étapes d'un calcul.**

1. Identifier l'angle droit et l'hypoténuse.
2. Écrire l'égalité de Pythagore.
3. Remplacer, calculer, puis prendre la racine carrée.

### 1.1 Calculer l'hypoténuse

`ABC` rectangle en `A`, `AB = 6` et `AC = 8`.

```
BC² = AB² + AC² = 6² + 8² = 36 + 64 = 100
BC = √100 = 10
```

### 1.2 Calculer un côté de l'angle droit

`ABC` rectangle en `A`, `BC = 13` et `AB = 5`.

```
BC² = AB² + AC²  donc  AC² = BC² − AB² = 169 − 25 = 144
AC = √144 = 12
```

On **soustrait** pour trouver un côté de l'angle droit, on **additionne** pour trouver l'hypoténuse.

### 1.3 Valeur approchée

Si le résultat n'est pas un carré parfait, on donne la valeur exacte puis une valeur approchée : `√50 ≈ 7,07`.

### 1.4 Triplets pythagoriciens

Des triplets d'entiers à connaître : `(3 ; 4 ; 5)`, `(5 ; 12 ; 13)`, `(8 ; 15 ; 17)`, `(7 ; 24 ; 25)`, et leurs multiples `(6 ; 8 ; 10)`, `(9 ; 12 ; 15)`.

---

## 2. Réciproque et contraposée

### 2.1 Réciproque

**Réciproque** : si, dans un triangle `ABC`, on a `BC² = AB² + AC²`, alors le triangle est **rectangle en `A`**.

**Méthode** : on compare le carré du **plus grand côté** avec la somme des carrés des deux autres.

**Exemple.** `ABC` avec `AB = 9`, `AC = 12`, `BC = 15`.
`BC² = 225` et `AB² + AC² = 81 + 144 = 225`. Les deux sont égaux : d'après la réciproque, `ABC` est rectangle en `A`.

### 2.2 Contraposée

**Contraposée** : si, dans un triangle `ABC`, on a `BC² ≠ AB² + AC²`, alors le triangle **n'est pas rectangle en `A`**.

**Exemple.** `AB = 4`, `AC = 5`, `BC = 7`.
`BC² = 49` et `AB² + AC² = 16 + 25 = 41` : l'égalité est fausse. D'après la contraposée, `ABC` n'est pas rectangle en `A`.

> Le théorème et sa réciproque sont **deux énoncés différents** : l'un sert à calculer une longueur dans un triangle déjà rectangle, l'autre à prouver qu'un triangle est rectangle. La contraposée a la même valeur que le théorème : si un triangle n'est pas rectangle, l'égalité est fausse.

---

## 3. Triangle rectangle et cercle circonscrit

**Propriété** : si un triangle est rectangle en `A`, alors le **milieu de l'hypoténuse** `[BC]` est le **centre de son cercle circonscrit** ; la médiane issue de `A` mesure la moitié de l'hypoténuse.

**Réciproque** : si un point `A` est sur le cercle de **diamètre** `[BC]` (et distinct de `B` et `C`), alors `ABC` est rectangle en `A`.

**Conséquences** :

- on trouve le centre du cercle circonscrit d'un triangle rectangle sans tracer de médiatrices ;
- on **construit un triangle rectangle sans équerre** : choisir un diamètre `[BC]`, puis un point `A` du cercle ;
- on **construit un rectangle** sans équerre avec deux diamètres : leurs extrémités forment un rectangle.

**Exemple.** `ABC` est rectangle en `A` avec `BC = 10`. Le rayon du cercle circonscrit vaut `5`.

---

## 4. Démonstration du théorème (par les aires)

On construit un grand carré de côté `a + b`. À l'intérieur : 4 triangles rectangles de côtés `a`, `b` et `c` placés dans les coins, et un carré central de côté `c`.

- Aire du grand carré : `(a + b)² = a² + 2ab + b²`.
- Aire des 4 triangles : `4 × (a × b ÷ 2) = 2ab`. Aire du carré central : `c²`.
- Donc `a² + 2ab + b² = 2ab + c²`, soit `a² + b² = c²`.

(La démonstration historique d'Euclide utilise aussi les aires.)

---

## 5. Applications

- **Diagonale d'un rectangle** de côtés `a` et `b` : `d = √(a² + b²)`. Pour `6 × 8` : `d = 10`.
- **Échelle** : une échelle de `5 m` posée à `3 m` du mur atteint `√(25 − 9) = 4 m`.
- **Hauteur d'un triangle isocèle** de base `10` et côtés `13` : `h = √(13² − 5²) = 12`.
- **Écran** : diagonale d'un écran `16 cm × 12 cm` : `20 cm`.
- **Distance entre deux points** : si `A(1 ; 2)` et `B(4 ; 6)` (repère orthonormé), `AB² = 3² + 4² = 25`, donc `AB = 5`.

---

## 6. Problèmes types

**Problème 1.** Un triangle `ABC` rectangle en `A` a `AB = 7 cm` et `AC = 24 cm`. Calculer `BC`.
`BC² = 49 + 576 = 625`, donc `BC = 25 cm`.

**Problème 2.** Un champ rectangulaire de `40 m` sur `30 m` est traversé en diagonale. Quelle longueur ?
`√(1600 + 900) = √2500 = 50 m`.

**Problème 3.** `ABC` : `AB = 5`, `AC = 12`, `BC = 14`. Le triangle est-il rectangle ?
`BC² = 196` et `AB² + AC² = 25 + 144 = 169`. Les valeurs sont différentes : par la contraposée, il n'est pas rectangle.

**Problème 4.** Un carré de côté `4` a pour diagonale `d`. Calculer `d`.
`d² = 16 + 16 = 32`, donc `d = √32 = 4√2 ≈ 5,66`.

---

## 7. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Oublier la racine | `BC = 100` au lieu de `10` | Arrêt au carré | Vérifier avec l'ordre de grandeur sur la figure |
| Additionner pour un côté de l'angle droit | `AC² = 169 + 25` | Formule appliquée sans repérer l'hypoténuse | Colorier l'hypoténuse avant de calculer |
| Appliquer le théorème à un triangle non rectangle | « le triangle `ABC`, donc… » | Pas de vérification de l'hypothèse | Rédaction : « `ABC` est rectangle en `A` » avant tout calcul |
| Confondre réciproque et théorème | utiliser `BC² = …` comme hypothèse | Statut des énoncés | Fiches « calculer / prouver » |
| Mauvaise comparaison dans la réciproque | comparer deux petits côtés au grand sans carrés | Carré oublié | Toujours écrire `BC²` et `AB² + AC²` |
| Écrire `a² + b² = (a + b)²` | | Fausse distributivité | Contre-exemple `3² + 4² = 25` mais `(3 + 4)² = 49` |
| Mesurer pour vérifier le rectangle | « l'angle a l'air droit » | Perception | Utiliser la réciproque avec des longueurs |

**Outils** : puzzles de Pythagore (découpage des carrés), cordes à 13 nœuds, tableur pour tester des triplets, logiciel de géométrie dynamique.

---

## 8. À retenir

- Dans un triangle rectangle, **hypoténuse² = somme des carrés des deux autres côtés**.
- On additionne pour l'hypoténuse, on soustrait pour un autre côté ; **on prend la racine** à la fin.
- Réciproque : si `BC² = AB² + AC²`, le triangle est rectangle en `A` ; contraposée : si l'égalité est fausse, il ne l'est pas.
- Triangle rectangle ⇔ inscrit dans un demi-cercle : le milieu de l'hypoténuse est le centre du cercle circonscrit.
- Rédaction : *Données (le triangle est rectangle en…) → égalité de Pythagore → calcul → conclusion.*

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/05-pythagore.html](../../quiz/espace-et-geometrie/05-pythagore.html)
- Exercices : [exercices/espace-et-geometrie/05-pythagore.html](../../exercices/espace-et-geometrie/05-pythagore.html)

## Pistes de prolongement (culture mathématique)

- Repères historiques autour de Pythagore, des tablettes babyloniennes (Plimpton 322) et des cordes à nœuds égyptiennes.
- Triplets pythagoriciens et théorème de Fermat.
