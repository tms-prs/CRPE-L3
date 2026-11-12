# Leçon 01 — Séries statistiques : tableaux et représentations

**Domaine** : Données et probabilités
**Programme** : cycle 4 — organiser des données, tableaux d'effectifs et de fréquences, regroupement en classes, représentations graphiques (BO du 5 mars 2026, annexe 2) ; prolongement du travail de cycle 3 sur la lecture et la construction de tableaux et de graphiques
**Prérequis** : fractions, pourcentages, proportionnalité (angles et aires proportionnels à des effectifs), repérage dans le plan
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- employer le vocabulaire : population, individu, caractère, effectif, fréquence ;
- distinguer caractère qualitatif, quantitatif discret et quantitatif continu ;
- lire et construire un tableau d'effectifs, de fréquences et d'effectifs cumulés ;
- regrouper des données en classes ;
- construire et lire diagrammes en barres ou en bâtons, diagrammes circulaires (avec calcul des angles), graphiques cartésiens et histogrammes ;
- choisir une représentation adaptée et repérer un graphique trompeur ;
- utiliser un tableur pour calculer effectifs, fréquences et sommes ;
- repérer les erreurs types d'élèves et proposer une remédiation.

---

## 1. Vocabulaire

### 1.1 Population, individu, caractère

- La **population** est l'ensemble des êtres ou des objets étudiés ; chacun d'eux est un **individu**.
- Le **caractère** est la propriété observée sur chaque individu. Ses différentes issues sont les **valeurs** (ou modalités) du caractère.

**Exemple.** On interroge les 25 élèves d'une classe sur leur nombre de frères et sœurs. La population est la classe, un individu est un élève, le caractère est « nombre de frères et sœurs ».

| Type de caractère | Définition | Exemples |
|---|---|---|
| **Qualitatif** | Les valeurs ne sont pas des nombres | couleur des yeux, sport pratiqué, moyen de transport |
| **Quantitatif discret** | Valeurs numériques isolées (souvent entières) | nombre de frères et sœurs, nombre de livres lus, pointure |
| **Quantitatif continu** | Valeurs mesurées pouvant prendre toute valeur d'un intervalle | taille, masse, durée d'un trajet |

> **Piège** : un code numérique (numéro de département, numéro de maillot) n'en fait pas un caractère quantitatif : additionner ou comparer ces nombres n'a pas de sens.

### 1.2 Effectif et fréquence

- L'**effectif** d'une valeur est le nombre d'individus qui la présentent. L'**effectif total** `N` est le nombre d'individus de la population : c'est la somme de tous les effectifs.
- La **fréquence** d'une valeur est la proportion d'individus qui la présentent :

`fréquence = effectif ÷ effectif total`

Elle s'écrit en **fraction**, en **décimal** ou en **pourcentage** : `9/25 = 0,36 = 36 %`.

- La somme des fréquences vaut `1` (soit `100 %`).
- Une fréquence est toujours comprise entre `0` et `1`.

### 1.3 Effectifs cumulés et fréquences cumulées

Pour un caractère quantitatif, on ordonne les valeurs. L'**effectif cumulé croissant** d'une valeur est la somme des effectifs de cette valeur et de toutes les valeurs plus petites. La **fréquence cumulée croissante** se définit de même. Elles répondent à la question « combien d'individus ont **au plus** cette valeur ? ».

---

## 2. Tableaux

### 2.1 Tableau d'effectifs, de fréquences, d'effectifs cumulés

**Exemple résolu.** Nombre de frères et sœurs dans une classe de 25 élèves.

| Nombre de frères et sœurs | 0 | 1 | 2 | 3 | 4 | Total |
|---|---|---|---|---|---|---|
| Effectif | 4 | 9 | 7 | 3 | 2 | 25 |
| Fréquence (fraction) | 4/25 | 9/25 | 7/25 | 3/25 | 2/25 | 1 |
| Fréquence (%) | 16 % | 36 % | 28 % | 12 % | 8 % | 100 % |
| Effectif cumulé croissant | 4 | 13 | 20 | 23 | 25 | |
| Fréquence cumulée croissante (%) | 16 % | 52 % | 80 % | 92 % | 100 % | |

Lectures :

- 13 élèves ont **au plus** 1 frère ou sœur (effectif cumulé de la valeur 1) ;
- 25 − 13 = 12 élèves ont **au moins** 2 frères et sœurs ;
- 80 % des élèves ont **au plus** 2 frères et sœurs.

> **Contrôle** : le dernier effectif cumulé doit être égal à l'effectif total, et la dernière fréquence cumulée à 100 %.

### 2.2 Regrouper en classes

Quand le caractère est continu, ou discret avec beaucoup de valeurs, on **regroupe en classes** : intervalles de la forme `[a ; b[` (a inclus, b exclu). L'**amplitude** d'une classe est `b − a`. La valeur `b` appartient à la classe suivante.

**Exemple résolu.** Tailles (en cm) de 20 élèves :
`142 ; 148 ; 151 ; 155 ; 138 ; 160 ; 145 ; 152 ; 149 ; 157 ; 163 ; 141 ; 150 ; 154 ; 146 ; 158 ; 147 ; 153 ; 144 ; 159`.

On choisit trois classes de même amplitude 10 cm.

| Taille (cm) | [135 ; 145[ | [145 ; 155[ | [155 ; 165[ | Total |
|---|---|---|---|---|
| Effectif | 4 | 10 | 6 | 20 |
| Fréquence (%) | 20 % | 50 % | 30 % | 100 % |

Attention aux bornes : `145` est dans `[145 ; 155[`, et `155` dans `[155 ; 165[`. On pourrait aussi calculer l'**étendue** `163 − 138 = 25 cm`, différence entre la plus grande et la plus petite valeur. Le regroupement fait gagner en lisibilité, mais **on perd le détail** des valeurs individuelles.

---

## 3. Représentations graphiques

### 3.1 Diagramme en barres et diagramme en bâtons

- **Diagramme en barres** : un rectangle par valeur (caractère qualitatif ou discret), de **largeur constante**, de hauteur proportionnelle à l'effectif.
- **Diagramme en bâtons** : même principe avec de simples segments, pour un caractère quantitatif discret, placés à l'abscisse de la valeur.

```svg Diagramme en barres : nombre de frères et sœurs dans une classe de 25 élèves (graduations verticales : 4 élèves entre deux traits).
<svg viewBox="0 0 400 260" width="400" role="img" aria-label="Diagramme en barres des effectifs 4, 9, 7, 3, 2">
  <path class="s" d="M50 20V210H370"/>
  <path class="g" d="M50 150H370M50 90H370M50 30H370"/>
  <rect class="fs" x="70" y="150" width="40" height="60"/>
  <rect class="fs" x="130" y="75" width="40" height="135"/>
  <rect class="fs" x="190" y="105" width="40" height="105"/>
  <rect class="fs" x="250" y="165" width="40" height="45"/>
  <rect class="fs" x="310" y="180" width="40" height="30"/>
  <text class="b" x="84" y="144">4</text><text class="b" x="144" y="69">9</text><text class="b" x="204" y="99">7</text><text class="b" x="264" y="159">3</text><text class="b" x="324" y="174">2</text>
  <text x="84" y="230">0</text><text x="144" y="230">1</text><text x="204" y="230">2</text><text x="264" y="230">3</text><text x="324" y="230">4</text>
  <text class="m" x="14" y="154">4</text><text class="m" x="14" y="94">8</text><text class="m" x="6" y="34">12</text>
  <text class="m" x="120" y="252">nombre de frères et sœurs</text>
</svg>
```

### 3.2 Diagramme circulaire (ou semi-circulaire)

Il montre la **répartition d'un tout** : l'angle de chaque secteur est **proportionnel** à l'effectif (ou à la fréquence).

`angle = 360° × fréquence = 360° × effectif ÷ effectif total`

**Exemple résolu.** 40 élèves, moyen de transport : vélo 6, bus 14, voiture 12, à pied 8. Pour un élève : `360° ÷ 40 = 9°`.

| Moyen de transport | Vélo | Bus | Voiture | À pied | Total |
|---|---|---|---|---|---|
| Effectif | 6 | 14 | 12 | 8 | 40 |
| Fréquence (%) | 15 % | 35 % | 30 % | 20 % | 100 % |
| Angle | 54° | 126° | 108° | 72° | 360° |

> **Contrôle** : la somme des angles doit faire 360° (pour un demi-cercle : 180°, avec `180° ÷ N` par individu).

Utile pour comparer des **parts d'un tout**, déconseillé quand il y a beaucoup de catégories.

### 3.3 Graphique cartésien (courbe)

On place des points `(x ; y)` dans un repère et on les relie. Adapté à l'**évolution d'une grandeur au cours du temps** (température, population, cours d'une action). Relier les points suppose que la grandeur varie de façon continue : ce n'est pas pertinent pour des catégories sans ordre.

### 3.4 Histogramme (classes de même amplitude)

Pour un caractère **continu regroupé en classes**, on trace des rectangles **contigus** (sans espace entre eux). Pour des classes de **même amplitude**, la hauteur est proportionnelle à l'effectif (ou à la fréquence).

**Exemple.** Durée du trajet (en minutes) de 40 élèves, classes d'amplitude 10 :

| Durée (min) | [0 ; 10[ | [10 ; 20[ | [20 ; 30[ | [30 ; 40[ | Total |
|---|---|---|---|---|---|
| Effectif | 5 | 12 | 15 | 8 | 40 |
| Fréquence (%) | 12,5 % | 30 % | 37,5 % | 20 % | 100 % |
| Effectif cumulé croissant | 5 | 17 | 32 | 40 | |

```svg Histogramme : durée du trajet de 40 élèves (graduations verticales : 5 élèves entre deux traits ; les rectangles se touchent).
<svg viewBox="0 0 400 250" width="400" role="img" aria-label="Histogramme des effectifs 5, 12, 15, 8 par classes de 10 minutes">
  <path class="s" d="M50 20V210H340"/>
  <path class="g" d="M50 150H340M50 90H340M50 30H340"/>
  <rect class="fs" x="50" y="150" width="70" height="60"/>
  <rect class="fs" x="120" y="66" width="70" height="144"/>
  <rect class="fs" x="190" y="30" width="70" height="180"/>
  <rect class="fs" x="260" y="114" width="70" height="96"/>
  <text class="b" x="78" y="144">5</text><text class="b" x="146" y="60">12</text><text class="b" x="216" y="24">15</text><text class="b" x="290" y="108">8</text>
  <text x="46" y="230">0</text><text x="112" y="230">10</text><text x="182" y="230">20</text><text x="252" y="230">30</text><text x="322" y="230">40</text>
  <text class="m" x="14" y="154">5</text><text class="m" x="10" y="94">10</text><text class="m" x="10" y="34">15</text>
  <text class="m" x="150" y="248">durée du trajet (min)</text>
</svg>
```

Distinction à connaître : dans un **diagramme en barres**, les barres sont séparées et la largeur n'a pas de sens ; dans un **histogramme**, l'axe horizontal est une échelle continue et les rectangles sont collés.

---

## 4. Choisir une représentation adaptée

| Objectif | Représentation conseillée |
|---|---|
| Comparer des effectifs de catégories (caractère qualitatif) | diagramme en barres |
| Distribution d'un caractère quantitatif discret | diagramme en bâtons |
| Répartition d'un tout (parts, pourcentages) | diagramme circulaire |
| Évolution dans le temps | graphique cartésien (courbe) |
| Distribution d'un caractère continu regroupé en classes | histogramme |

---

## 5. Lire et interpréter : esprit critique

Un graphique peut être exact et pourtant **trompeur**. Questions à se poser :

1. **Quel est le titre, quelle est l'unité, quelle est la source ?**
2. **Les axes commencent-ils à 0 ?** Une échelle tronquée exagère les écarts : des barres de 95 et 100 sur un axe qui démarre à 90 ont des hauteurs 5 et 10, la seconde paraît **deux fois** plus haute alors que la hausse réelle est d'environ 5,3 %.
3. **Les graduations sont-elles régulières ?**
4. **La population est-elle représentative** (taille de l'échantillon, mode de recueil) ?
5. Lit-on un **effectif** ou une **fréquence** ? 40 % d'un petit groupe n'est pas 40 % d'un grand.

> **Message-clé** : un graphique n'est pas une preuve. Il faut toujours revenir aux valeurs et à l'échelle.

---

## 6. Tableur

Dans un tableur, les données sont rangées en cellules (colonne + ligne : `B2`). Une formule commence par `=`.

Disposition : valeurs en `A2:A6`, effectifs en `B2:B6`.

| Besoin | Formule | Remarque |
|---|---|---|
| Effectif total (en `B7`) | `=SOMME(B2:B6)` | somme d'une plage |
| Fréquence de la ligne 2 (en `C2`) | `=B2/B$7` | `B$7` : la ligne 7 est **figée** |
| Fréquence en % | mettre la cellule au format pourcentage | le tableur multiplie l'affichage par 100 |
| Effectif cumulé (en `D2`, puis `D3`…) | `=B2` puis `=D2+B3` | on ajoute l'effectif au cumul précédent |

Recopier `=B2/B$7` vers le bas donne `=B3/B$7`, `=B4/B$7`… : sans le `$`, le dénominateur « glisserait » et le résultat serait faux.

---

## 7. Lien avec l'école (cycle 3)

- **Cycle 3** : les élèves lisent, interprètent et construisent des tableaux et des graphiques (diagrammes en bâtons, en barres, circulaires, courbes) ; ils savent passer du tableau au graphique et inversement ; ils organisent des données (collectées en classe) et choisissent une représentation.
- Le travail est étroitement lié à la **proportionnalité** : fréquences, pourcentages, angles du diagramme circulaire (tableau de proportionnalité effectif / angle).
- La **lecture critique** (échelle, titre, légende) est introduite dès le cycle 3 ; les classes d'amplitudes et l'histogramme sont un approfondissement du cycle 4.

**Un projet type de classe** : recueillir les moyens de transport de la classe, faire un tableau, construire un diagramme en barres, puis un circulaire en calculant les angles.

---

## 8. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Confondre effectif et fréquence | « La fréquence de 1 est 9 » | Pas de notion de proportion | Faire écrire « 9 élèves sur 25 » et calculer la fraction |
| Diviser par le nombre de valeurs au lieu de l'effectif total | `9 ÷ 5` au lieu de `9 ÷ 25` | Confusion entre nombre de colonnes et nombre d'individus | Vérifier que la somme des fréquences fait 100 % |
| Oublier un individu / compter deux fois | Total 24 au lieu de 25 | Dénombrement non organisé | Barrer au fur et à mesure, tableau de comptage |
| Se tromper de classe aux bornes | 145 placé dans `[135 ; 145[` | Bornes inclusives / exclusives mal comprises | Rappeler `[a ; b[` et faire placer les valeurs de bord |
| Ne pas commencer l'axe à 0 ou graduer irrégulièrement | Axe 90, 95, 100 sans le dire | Chercher à « occuper la page » | Comparer deux versions du même graphique |
| Histogramme avec espaces / barres de largeur différente | Classes inégales traitées comme des barres | Confusion barres / histogramme | Insister sur l'axe continu |
| Angle non proportionnel | Un secteur de 90° pour 20 % | Choix à l'œil | Tableau de proportionnalité effectif / angle, vérifier la somme à 360° |
| Mal lire l'échelle verticale | Lire 3 pour une barre qui atteint le trait « 4 » d'un axe gradué de 4 en 4 | Compter les traits au lieu de lire les graduations | Faire écrire la valeur de chaque trait avant toute lecture |

**Remédiations générales** : partir de données **de la classe**, faire construire puis critiquer plusieurs représentations de la même série, utiliser le quadrillage, faire énoncer une phrase d'interprétation (« 36 % des élèves ont exactement un frère ou une sœur »).

---

## 9. À retenir

- Population → individus ; caractère **qualitatif** ou **quantitatif** (discret / continu).
- `fréquence = effectif ÷ effectif total` ; somme des fréquences = 1 = 100 %.
- Effectif cumulé croissant = « au plus ». Le dernier cumul égale l'effectif total.
- Classes `[a ; b[` ; amplitude `b − a`.
- Diagramme circulaire : `angle = 360° × fréquence`.
- Histogramme : rectangles contigus, hauteur proportionnelle à l'effectif si les classes ont la même amplitude.
- Choisir la représentation selon l'objectif ; vérifier l'échelle avant d'interpréter.
- Tableur : `=SOMME(B2:B6)` et `=B2/B$7`.

---

## Pour s'entraîner

- Exercices : [exercices/donnees-et-probabilites/01-statistiques-tableaux-representations.html](../../exercices/donnees-et-probabilites/01-statistiques-tableaux-representations.html)
- Quiz : [quiz/donnees-et-probabilites/01-statistiques-tableaux-representations.html](../../quiz/donnees-et-probabilites/01-statistiques-tableaux-representations.html)

## Pistes de prolongement (culture mathématique)

- Florence Nightingale (XIXe siècle) invente des « diagrammes en rose » pour convaincre les décideurs de la mortalité évitable dans les hôpitaux militaires : un exemple fameux de graphique mis au service d'une démonstration.
- William Playfair (vers 1786) introduit le diagramme en barres, la courbe et, plus tard, le diagramme circulaire.
