# Leçon 04 — Symétries et translations

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — symétrie axiale (automatismes, 5e), symétrie centrale ou demi-tour et ses propriétés (5e), translation, lien avec les parallélogrammes, propriétés de conservation (4e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 01 à 03 (angles, parallélogrammes), médiatrice
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- construire le symétrique d'un point, d'une droite ou d'une figure par symétrie axiale et par symétrie centrale ;
- déterminer l'image d'une figure par une translation ;
- énoncer et utiliser les propriétés de conservation ;
- reconnaître axes et centres de symétrie d'une figure ;
- repérer les erreurs types d'élèves.

---

## 1. Symétrie axiale

### 1.1 Définition

Le **symétrique** d'un point `A` par rapport à une droite `(d)` (l'axe) est le point `A'` tel que :

- si `A` n'est pas sur `(d)`, `(d)` est la **médiatrice** de `[AA']` ;
- si `A` est sur `(d)`, `A' = A`.

```svg La droite (d) est la médiatrice de chaque segment [AA'], [BB'], [CC'].
<svg viewBox="0 0 360 200" width="360" role="img" aria-label="Symétrie axiale d'un triangle">
  <path class="s" d="M180 10V190" style="stroke:#667295"/>
  <path class="fs" d="M70 70L150 60L110 150Z"/>
  <path class="fb" d="M290 70L210 60L250 150Z"/>
  <path class="g d" d="M70 70L290 70M150 60L210 60M110 150L250 150"/>
  <text x="48" y="68">A</text><text x="148" y="50">B</text><text x="92" y="168">C</text>
  <text class="b" x="296" y="68">A'</text><text class="b" x="202" y="50">B'</text><text class="b" x="252" y="168">C'</text>
  <text class="m" x="186" y="26">(d)</text>
</svg>
```

### 1.2 Construction

- **Sur quadrillage** : on compte les carreaux à partir de l'axe.
- **Sur papier blanc** : par `A`, on trace la perpendiculaire à l'axe (équerre), puis on reporte la distance au compas de l'autre côté.

### 1.3 Propriétés de conservation

La symétrie axiale conserve :

- l'**alignement** (une droite a pour image une droite) ;
- les **longueurs** ;
- les **angles** ;
- le **parallélisme** et la **perpendicularité** ;
- les **aires** ;
- les cercles (centre ↔ centre, même rayon).

Elle **inverse le sens** de parcours (une figure et son symétrique sont « en miroir »).

### 1.4 Axes de symétrie d'une figure

Une figure admet une droite `(d)` comme **axe de symétrie** si elle est son propre symétrique par rapport à `(d)`.

| Figure | Nombre d'axes |
|---|---|
| Triangle équilatéral | `3` |
| Triangle isocèle | `1` |
| Rectangle | `2` |
| Losange | `2` |
| Carré | `4` |
| Cercle | une infinité (tout diamètre) |

---

## 2. Symétrie centrale (demi-tour)

### 2.1 Définition

Le **symétrique** du point `A` par rapport au point `O` (le centre) est le point `A'` tel que `O` est le **milieu** de `[AA']`. Le centre est son propre symétrique.

```svg O est le milieu de chaque segment [AA'], [BB'], [CC'].
<svg viewBox="0 0 360 200" width="360" role="img" aria-label="Symétrie centrale d'un triangle">
  <path class="fs" d="M60 50L140 60L90 140Z"/>
  <path class="fb" d="M300 150L220 140L270 60Z"/>
  <path class="g d" d="M60 50L300 150M140 60L220 140M90 140L270 60"/>
  <circle class="pb" cx="180" cy="100" r="5"/>
  <text x="38" y="48">A</text><text x="142" y="52">B</text><text x="72" y="160">C</text>
  <text class="b" x="304" y="162">A'</text><text class="b" x="206" y="158">B'</text><text class="b" x="272" y="52">C'</text>
  <text class="b" x="188" y="90">O</text>
</svg>
```

Faire une symétrie centrale revient à faire un **demi-tour** autour de `O`.

### 2.2 Propriétés

La symétrie centrale conserve les longueurs, les angles, les aires, l'alignement. De plus :

- l'image d'une droite est une **droite parallèle** ;
- elle **ne change pas le sens** de parcours d'une figure.

### 2.3 Centre de symétrie d'une figure

Un point `O` est un **centre de symétrie** si la figure est sa propre image par la symétrie de centre `O`.

- **Oui** : parallélogramme (centre = intersection des diagonales), rectangle, losange, carré, cercle.
- **Non** : triangle quelconque, trapèze (non parallélogramme), pentagone régulier.

---

## 3. Translation

### 3.1 Définition

Une **translation** « fait glisser » toute la figure : même **direction**, même **sens**, même **longueur** pour chaque point.

Pour la translation qui transforme `M` en `N`, l'image `A'` d'un point `A` est le point tel que **`MNA'A` est un parallélogramme** (éventuellement aplati).

```svg Translation : chaque point glisse dans la même direction, avec le même sens et la même longueur.
<svg viewBox="0 0 380 190" width="380" role="img" aria-label="Translation d'un triangle">
  <defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#2754d9"/></marker></defs>
  <path class="fs" d="M40 130L110 150L70 70Z"/>
  <path class="fb" d="M200 90L270 110L230 30Z"/>
  <path class="sb d" d="M40 130L200 90M110 150L270 110M70 70L230 30" marker-end="url(#ah)"/>
  <text x="22" y="134">A</text><text x="112" y="168">B</text><text x="62" y="62">C</text>
  <text class="b" x="180" y="90">A'</text><text class="b" x="272" y="130">B'</text><text class="b" x="224" y="22">C'</text>
</svg>
```

### 3.2 Propriétés

La translation conserve les longueurs, les angles, les aires, l'alignement, le parallélisme et le **sens**. L'image d'une droite est une **droite parallèle**.

**Lien avec les parallélogrammes** : si `ABCD` est un parallélogramme, la translation qui transforme `A` en `B` transforme aussi `D` en `C`.

---

## 4. Comparaison des trois transformations

| | Symétrie axiale | Symétrie centrale | Translation |
|---|---|---|---|
| Éléments | un axe | un centre | direction, sens, longueur |
| Longueurs, angles, aires | conservés | conservés | conservés |
| Image d'une droite | une droite | une droite **parallèle** | une droite **parallèle** |
| Sens de parcours | inversé | conservé | conservé |
| Points invariants | tous ceux de l'axe | le centre | aucun |

---

## 5. Problèmes types

**Problème 1.** Le point `A(2 ; 3)` a pour symétrique `A'` par rapport à l'axe des ordonnées. Quelles sont les coordonnées de `A'` ?
On change le signe de l'abscisse : `A'(−2 ; 3)`.

**Problème 2.** Le segment `[AB]` mesure `7 cm`. Quelle est la longueur de l'image `[A'B']` par une symétrie centrale ?
La symétrie conserve les longueurs : `7 cm`.

**Problème 3.** `O` est le milieu de `[AA']` avec `AA' = 12 cm`. Quelle est la distance `OA'` ?
`OA' = 12 ÷ 2 = 6 cm`.

**Problème 4.** Dans un parallélogramme `ABCD` de centre `O`, quel est le symétrique de `A` par rapport à `O` ?
Les diagonales se coupent en leur milieu : le symétrique de `A` est `C`.

---

## 6. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Symétrie axiale « décalée » | symétrique placé au même niveau sans distance conservée | Perception sans méthode | Compter les carreaux, plier le papier |
| Confondre symétrie centrale et axiale | image obtenue par un miroir au lieu d'un demi-tour | Représentation « miroir » seulement | Calque tourné de 180° autour du centre |
| Oublier que `A'` doit être à la même distance de l'axe | distance différente | Pas de contrôle | Vérifier à l'équerre et au compas |
| Translation = rotation | image tournée | Pas de notion de direction | Glisser un calque sans le tourner |
| Axe de symétrie du parallélogramme | « il en a deux » | Confusion avec le rectangle ou le losange | Pliage : seul le centre de symétrie existe |
| Croire que la symétrie change les longueurs | | Perception de forme | Mesurer avec un calque |

**Outils** : papier calque, papier à pliage, quadrillage, miroir, logiciel de géométrie dynamique, pavages.

---

## 7. À retenir

- Axiale : `(d)` est la médiatrice de `[AA']`. Centrale : `O` est le milieu de `[AA']`. Translation : `MNA'A` est un parallélogramme.
- Toutes conservent longueurs, angles, aires, alignement, parallélisme.
- La symétrie centrale et la translation transforment une droite en droite **parallèle**.
- Carré : 4 axes et un centre de symétrie ; rectangle et losange : 2 axes et un centre ; parallélogramme : un centre seulement.

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/04-symetries-translations.html](../../quiz/espace-et-geometrie/04-symetries-translations.html)
- Exercices : [exercices/espace-et-geometrie/04-symetries-translations.html](../../exercices/espace-et-geometrie/04-symetries-translations.html)

## Pistes de prolongement (culture mathématique)

- Pavages d'Escher et de l'Alhambra, rosaces du Moyen Âge, frises.
- Symétries dans la nature : flocon, alvéoles d'abeilles, fleurs.
