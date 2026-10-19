# Leçon 08 — Vecteurs et relation de Chasles

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — translations et vecteurs : définir et utiliser la translation, les vecteurs égaux, le vecteur nul, l'opposé d'un vecteur, la somme de deux vecteurs par enchaînement de deux translations, la relation de Chasles (3e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçon 03 (parallélogrammes), leçon 04 (translations)
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- définir un vecteur (direction, sens, longueur) et la translation associée ;
- reconnaître des vecteurs égaux, opposés, le vecteur nul ;
- utiliser le lien entre égalité de vecteurs et parallélogramme ;
- additionner des vecteurs et utiliser la relation de Chasles ;
- repérer les erreurs types d'élèves.

> Notation : le vecteur d'origine `A` et d'extrémité `B` est noté `→AB` (« vecteur AB »). Sa longueur est `AB`.

---

## 1. Vecteur et translation

Une **translation** est caractérisée par une **direction**, un **sens** et une **longueur**. Un **vecteur** est cet objet : on le représente par une flèche. La translation de vecteur `→AB` envoie `A` sur `B`, et tout point `M` sur le point `M'` tel que `→MM' = →AB`.

Un vecteur a trois caractéristiques :

- sa **direction** (celle de la droite `(AB)`) ;
- son **sens** (de `A` vers `B`) ;
- sa **norme** (longueur `AB`).

---

## 2. Égalité de vecteurs

**Définition** : deux vecteurs sont **égaux** s'ils ont la même direction, le même sens et la même longueur.

**Propriété** : `→AB = →CD` si et seulement si `ABDC` est un **parallélogramme** (éventuellement aplati).

```svg Si →AB = →CD, alors ABDC est un parallélogramme ; on a aussi →AC = →BD.
<svg viewBox="0 0 400 240" width="400" role="img" aria-label="Vecteurs égaux dans un parallélogramme">
  <defs><marker id="av" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#2754d9"/></marker>
  <marker id="av2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0f2350"/></marker></defs>
  <path class="fs" d="M60 190L200 190L260 70L120 70Z" style="opacity:.6"/>
  <path class="sb" d="M60 190L196 190" marker-end="url(#av)"/>
  <path class="sb" d="M120 70L256 70" marker-end="url(#av)"/>
  <path class="s" d="M60 190L117 74" marker-end="url(#av2)"/>
  <path class="s" d="M200 190L257 74" marker-end="url(#av2)"/>
  <circle class="pt" cx="60" cy="190" r="4"/><circle class="pt" cx="200" cy="190" r="4"/><circle class="pt" cx="260" cy="70" r="4"/><circle class="pt" cx="120" cy="70" r="4"/>
  <text x="38" y="210">A</text><text x="204" y="210">B</text><text x="268" y="66">D</text><text x="104" y="62">C</text>
  <text class="b" x="112" y="212">→AB</text><text class="b" x="168" y="60">→CD</text>
</svg>
```

**Méthode pour prouver qu'un quadrilatère est un parallélogramme** : montrer que `→AB = →DC` (ou que les diagonales ont le même milieu).

---

## 3. Vecteur nul et vecteur opposé

- Le **vecteur nul** `→0` est le vecteur `→AA` : longueur nulle, la translation ne déplace rien.
- Le **vecteur opposé** de `→AB` est `→BA` : même direction, même longueur, **sens contraire**. On note `→BA = −→AB`.
- `I` est le **milieu** de `[AB]` si et seulement si `→AI = →IB`.

---

## 4. Somme de vecteurs

### 4.1 Enchaînement de deux translations

Effectuer d'abord la translation de vecteur `→AB`, puis celle de vecteur `→BC`, revient à effectuer la translation de vecteur `→AC`. On note :

`→AB + →BC = →AC`

C'est la **relation de Chasles**.

```svg Relation de Chasles : →AB + →BC = →AC.
<svg viewBox="0 0 400 220" width="400" role="img" aria-label="Relation de Chasles">
  <defs><marker id="av3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#2754d9"/></marker>
  <marker id="av4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0f2350"/></marker></defs>
  <path class="sb" d="M60 170L190 60" marker-end="url(#av3)"/>
  <path class="sb" d="M190 60L340 150" marker-end="url(#av3)"/>
  <path class="s" d="M60 170L336 152" marker-end="url(#av4)"/>
  <circle class="pt" cx="60" cy="170" r="4"/><circle class="pt" cx="190" cy="60" r="4"/><circle class="pt" cx="340" cy="150" r="4"/>
  <text x="38" y="190">A</text><text x="186" y="50">B</text><text x="344" y="150">C</text>
  <text class="b" x="100" y="100">→AB</text><text class="b" x="276" y="90">→BC</text><text x="170" y="186">→AC</text>
</svg>
```

**Conséquences** :

- `→AB + →BA = →AA = →0` : un vecteur plus son opposé donne le vecteur nul ;
- `→AB + →BC + →CD = →AD` (enchaînement) ;
- si `→u = →AB`, alors `→u + →0 = →u`.

### 4.2 Règle du parallélogramme

Si `ABCD` est un parallélogramme, alors `→AB + →AD = →AC` (la diagonale issue de `A`).

### 4.3 Différence

Soustraire un vecteur, c'est ajouter son opposé : `→AB − →AC = →AB + →CA = →CB`.

---

## 5. Problèmes types

**Problème 1.** `ABCD` est un parallélogramme. Quel vecteur est égal à `→AB` ?
`→DC` : même direction, même sens, même longueur.

**Problème 2.** Simplifier `→AB + →BC + →CD`.
Par Chasles : `→AB + →BC = →AC`, puis `→AC + →CD = →AD`. Résultat : `→AD`.

**Problème 3.** `I` est le milieu de `[AB]`. Écrire `→AI` en fonction de `→IB`.
`→AI = →IB`.

**Problème 4.** Montrer que `→AB + →BA = →0`.
Chasles : `→AB + →BA = →AA = →0`.

**Problème 5.** `A`, `B`, `C`, `D` sont tels que `→AB = →DC`. Quelle est la nature de `ABCD` ?
`→AB = →DC` équivaut à `ABCD` parallélogramme (les côtés opposés `[AB]` et `[DC]` sont parallèles, de même longueur, de même sens).

---

## 6. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Confondre `→AB` et `AB` (la longueur) | `→AB = 5` | Vecteur non distingué du nombre | Dessiner la flèche ; la longueur est `AB`, un nombre |
| Écrire `→AB = →BA` | | Sens oublié | Le sens est essentiel : `→BA` est l'opposé |
| Mauvais ordre des lettres dans le parallélogramme | `→AB = →CD` ⇒ `ABCD` parallélogramme | Ordre cyclique non respecté | Tracer les flèches : `ABDC` est le bon quadrilatère |
| Chasles mal utilisée | `→AB + →CD = →AD` | Origine / extrémité non enchaînées | Chasles exige que l'extrémité du premier soit l'origine du second |
| Additionner les longueurs | `→AB + →BC` de norme `AB + BC` | Confusion norme / vecteur | Triangle `ABC` : `AC < AB + BC` |
| Confondre translation et symétrie | | Pas de notion de glissement | Faire glisser un calque sans le tourner |

**Outils** : papier quadrillé (flèches), calque, logiciel de géométrie dynamique, jeux de déplacements.

---

## 7. À retenir

- Un vecteur : direction, sens, longueur ; la translation de vecteur `→AB` envoie `A` sur `B`.
- `→AB = →CD` ⇔ `ABDC` est un parallélogramme (éventuellement aplati).
- Chasles : `→AB + →BC = →AC` (l'extrémité du premier est l'origine du second).
- Opposé : `→BA = −→AB`. `I` milieu de `[AB]` ⇔ `→AI = →IB`.
- Règle du parallélogramme : `→AB + →AD = →AC`.

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/08-vecteurs-chasles.html](../../quiz/espace-et-geometrie/08-vecteurs-chasles.html)
- Exercices : [exercices/espace-et-geometrie/08-vecteurs-chasles.html](../../exercices/espace-et-geometrie/08-vecteurs-chasles.html)

## Pistes de prolongement (culture mathématique)

- Hexagone obtenu à partir de triangles équilatéraux, flocon de Von Koch, triangle de Sierpinski.
- Les vecteurs en physique : forces, vitesses.
