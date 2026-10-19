# Leçon 07 — Trigonométrie du triangle rectangle

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — lignes trigonométriques dans le triangle rectangle : cosinus, sinus, tangente (3e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 02 et 05 (triangle rectangle, Pythagore), proportionnalité, équations (thème Nombres et calculs, leçon 07)
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- nommer côté opposé, côté adjacent et hypoténuse par rapport à un angle aigu ;
- définir cosinus, sinus et tangente ;
- calculer une longueur ou un angle avec la calculatrice (mode degrés) ;
- choisir la bonne ligne trigonométrique ;
- repérer les erreurs types d'élèves.

---

## 1. Vocabulaire

On travaille dans un triangle **rectangle en `A`**, et on regarde l'angle aigu `B̂`.

- L'**hypoténuse** est `[BC]` (face à l'angle droit).
- Le côté **adjacent** à `B̂` est `[AB]` (il touche `B̂`, hors hypoténuse).
- Le côté **opposé** à `B̂` est `[AC]` (face à `B̂`).

```svg Pour l'angle B : AB est le côté adjacent, AC le côté opposé, BC l'hypoténuse.
<svg viewBox="0 0 380 240" width="380" role="img" aria-label="Triangle rectangle avec côtés adjacent, opposé et hypoténuse">
  <path class="fs" d="M70 200L310 200L70 70Z"/>
  <path class="s" d="M70 200h12v-12h-12"/>
  <path class="sb" d="M270 200A40 40 0 0 0 277 177"/>
  <text x="44" y="216">A</text><text x="314" y="216">B</text><text x="56" y="62">C</text>
  <text class="b" x="248" y="190">B̂</text>
  <text class="b" x="150" y="224">adjacent à B̂</text>
  <text class="b" x="8" y="140">opposé</text>
  <text class="b" x="190" y="124">hypoténuse</text>
</svg>
```

> Le côté « adjacent » et le côté « opposé » **dépendent de l'angle** choisi. Pour `Ĉ`, c'est `[AC]` l'adjacent et `[AB]` l'opposé.

---

## 2. Cosinus, sinus, tangente

Pour un angle aigu `B̂` d'un triangle rectangle :

| Ligne | Définition | Pour `B̂` dans `ABC` rectangle en `A` |
|---|---|---|
| **cosinus** | `côté adjacent ÷ hypoténuse` | `cos B̂ = AB / BC` |
| **sinus** | `côté opposé ÷ hypoténuse` | `sin B̂ = AC / BC` |
| **tangente** | `côté opposé ÷ côté adjacent` | `tan B̂ = AC / AB` |

**Mnémotechnique** : **CAH-SOH-TOA** (Cosinus = Adjacent / Hypoténuse ; Sinus = Opposé / Hypoténuse ; Tangente = Opposé / Adjacent).

**Remarques** :

- ces rapports ne dépendent **que de l'angle**, pas de la taille du triangle (conséquence de Thalès) ;
- `cos B̂` et `sin B̂` sont **compris entre 0 et 1** (l'hypoténuse est le plus grand côté) ;
- la tangente peut dépasser `1`.

**Valeurs remarquables** : `sin 30° = 0,5`, `cos 60° = 0,5`, `tan 45° = 1`.

---

## 3. Calculer une longueur

**Méthode** :

1. Repérer l'angle connu, la longueur connue et la longueur cherchée.
2. Choisir la ligne qui relie ces trois éléments (CAH-SOH-TOA).
3. Écrire l'égalité, puis la résoudre (produit en croix).
4. Calculer avec la calculatrice **en mode degrés**.

**Exemple 1.** `ABC` rectangle en `A`, `B̂ = 30°`, `BC = 10`. Calculer `AC`.
`AC` est opposé à `B̂`, `BC` est l'hypoténuse : on utilise le sinus.
`sin 30° = AC / 10` donc `AC = 10 × sin 30° = 5`.

**Exemple 2.** `ABC` rectangle en `A`, `B̂ = 35°`, `AB = 20`. Calculer `AC`.
`AB` est adjacent, `AC` est opposé : on utilise la tangente.
`tan 35° = AC / 20` donc `AC = 20 × tan 35° ≈ 14,0`.

**Exemple 3.** `ABC` rectangle en `A`, `B̂ = 60°`, `AB = 7`. Calculer `BC`.
`AB` adjacent, `BC` hypoténuse : cosinus. `cos 60° = 7 / BC` donc `BC = 7 ÷ cos 60° = 14`.

---

## 4. Calculer un angle

On utilise la **fonction réciproque** de la calculatrice : `cos⁻¹` (ou arccos), `sin⁻¹`, `tan⁻¹`.

**Exemple 1.** `AB = 4` et `BC = 5` dans `ABC` rectangle en `A`.
`cos B̂ = 4 / 5 = 0,8`, donc `B̂ = cos⁻¹(0,8) ≈ 36,9°`.

**Exemple 2.** `AC = 3` et `AB = 4`.
`tan B̂ = 3 / 4 = 0,75`, donc `B̂ = tan⁻¹(0,75) ≈ 36,9°`.

On peut ensuite trouver l'autre angle aigu : `Ĉ = 90° − B̂ ≈ 53,1°`.

---

## 5. Applications

- **Hauteur d'un arbre ou d'un mât** : on se place à `20 m` du pied, l'angle d'élévation est `35°` : `h = 20 × tan 35° ≈ 14 m`.
- **Pente d'une rampe** : une rampe de `5 m` fait un angle de `10°` avec l'horizontale : hauteur `5 × sin 10° ≈ 0,87 m`.
- **Combiner avec Pythagore** : après avoir trouvé une longueur avec la trigonométrie, on peut calculer la troisième avec Pythagore.

---

## 6. Problèmes types

**Problème 1.** Une échelle de `6 m` est appuyée contre un mur et fait un angle de `70°` avec le sol. À quelle hauteur touche-t-elle le mur ?
La hauteur est le côté opposé à l'angle de `70°` ; l'échelle est l'hypoténuse : `h = 6 × sin 70° ≈ 5,64 m`.

**Problème 2.** Un toit a une pente de `30°` et une portée horizontale de `8 m`. Quelle est la hauteur du faîtage ?
`h = 8 × tan 30° ≈ 4,62 m`.

**Problème 3.** Dans un triangle rectangle, le côté adjacent à un angle mesure `3` et l'hypoténuse `6`. Calculer l'angle.
`cos = 3/6 = 0,5` donc l'angle vaut `60°`.

**Problème 4.** Un triangle rectangle a un angle aigu de `40°`. Combien mesure l'autre ?
`90° − 40° = 50°`.

---

## 7. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Confondre côté adjacent et côté opposé | `tan = adjacent / opposé` | Rôle relatif à l'angle mal compris | Colorier l'angle, l'hypoténuse puis les côtés |
| Calculatrice en radians (RAD) | `sin 30° = −0,988` | Mode non vérifié | Contrôle systématique : `sin 30° = 0,5` |
| Appliquer la trigonométrie à un triangle non rectangle | | Hypothèse oubliée | Rédiger « ABC est rectangle en A » avant tout |
| Hypoténuse non identifiée | `cos B̂ = BC / AB` | Rapport inversé | Rappeler : l'hypoténuse est au dénominateur pour cos et sin |
| Résultat > 1 pour un cosinus | `cos B̂ = 1,25` | Rapport inversé | Contrôle de vraisemblance : cos et sin sont entre 0 et 1 |
| Oublier la fonction réciproque | `B̂ = 0,8` | Cosinus confondu avec l'angle | Distinguer le nombre `cos B̂` et la mesure `B̂` |
| Division à la place de la multiplication | `AC = 10 ÷ sin 30°` | Équation mal résolue | Isoler l'inconnue par produit en croix |

**Outils** : triangles à construire et mesurer (on constate que le rapport dépend de l'angle), calculatrice, tableur, logiciel de géométrie dynamique.

---

## 8. À retenir

- `cos = adjacent / hypoténuse` ; `sin = opposé / hypoténuse` ; `tan = opposé / adjacent` (CAH-SOH-TOA).
- Adjacent et opposé dépendent de l'angle choisi ; l'hypoténuse est fixe.
- Calculer un angle : `cos⁻¹`, `sin⁻¹`, `tan⁻¹`. Calculatrice **en degrés**.
- `cos` et `sin` d'un angle aigu sont compris entre `0` et `1`.
- Les deux angles aigus d'un triangle rectangle sont complémentaires : `sin B̂ = cos Ĉ`.

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/07-trigonometrie.html](../../quiz/espace-et-geometrie/07-trigonometrie.html)
- Exercices : [exercices/espace-et-geometrie/07-trigonometrie.html](../../exercices/espace-et-geometrie/07-trigonometrie.html)

## Pistes de prolongement (culture mathématique)

- Hipparque et les premières tables trigonométriques ; astronomie et navigation.
- Arpentage et mesure de la hauteur d'une montagne.
