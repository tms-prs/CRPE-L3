# Leçon 01 — Repérage, angles et droites parallèles

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — repérage sur une droite et dans le plan (5e à 3e) ; angles : vocabulaire, bissectrice, caractérisation du parallélisme par les angles (5e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : nombres relatifs (thème Nombres et calculs, leçon 01), vocabulaire de base de la géométrie (points, droites, segments)
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- repérer un point sur une droite graduée et dans un repère orthogonal du plan ;
- nommer les angles (nul, aigu, droit, obtus, plat, plein) et reconnaître angles adjacents, supplémentaires, complémentaires, opposés par le sommet ;
- utiliser la bissectrice et les mesures usuelles (30°, 45°, 60°, 90°) ;
- caractériser le parallélisme par les angles correspondants et alternes-internes, et l'utiliser dans une démonstration ;
- repérer les erreurs types d'élèves.

> En géométrie, à partir du collège, **la mesure n'est plus une preuve** : on justifie avec des propriétés, on ne mesure pas pour conclure.

---

## 1. Repérage

### 1.1 Sur une droite graduée

Une droite graduée a une origine `O` (abscisse `0`) et une unité. L'**abscisse** d'un point est le nombre relatif qui le repère. Les positifs sont à droite de l'origine, les négatifs à gauche.

- Lire l'abscisse d'un point donné ; placer un point d'abscisse donnée.
- La **distance** entre deux points d'abscisses `a` et `b` vaut `|a − b|`.

```
 ◄──┼────┼────┼────┼────┼────┼────┼────►
   −3   −2   −1    0   +1   +2   +3
                  O
```

Exemple : `A(−2)` et `B(3)` : `AB = |3 − (−2)| = 5`.

### 1.2 Dans le plan

On utilise un **repère orthogonal** : deux axes perpendiculaires qui se coupent en `O`. Un point `M` a deux coordonnées `(x ; y)` :

- l'**abscisse** `x` se lit sur l'axe horizontal ;
- l'**ordonnée** `y` se lit sur l'axe vertical.

```svg Les points A(2 ; 3), B(−3 ; 1) et C(−2 ; −2) dans un repère orthogonal.
<svg viewBox="0 0 360 280" width="360" role="img" aria-label="Repère orthogonal avec trois points">
  <line class="g" x1="30" y1="140" x2="330" y2="140"/>
  <line class="g" x1="180" y1="20" x2="180" y2="260"/>
  <g class="g">
    <path d="M90 136v8M120 136v8M150 136v8M210 136v8M240 136v8M270 136v8M300 136v8M176 110h8M176 80h8M176 50h8M176 170h8M176 200h8M176 230h8"/>
  </g>
  <path class="s" d="M30 140H330M180 260V20"/>
  <path class="s" d="M322 134l8 6-8 6M174 28l6-8 6 8"/>
  <path class="g d" d="M240 140V50M180 50H240M90 140V110M180 110H90M120 140V200M180 200H120"/>
  <circle class="pb" cx="240" cy="50" r="5"/><circle class="pb" cx="90" cy="110" r="5"/><circle class="pb" cx="120" cy="200" r="5"/>
  <text class="b" x="248" y="46">A(2 ; 3)</text><text class="b" x="30" y="104">B(−3 ; 1)</text><text class="b" x="52" y="222">C(−2 ; −2)</text>
  <text x="318" y="160">x</text><text x="190" y="30">y</text><text x="164" y="158">O</text>
  <text class="m" x="236" y="160">2</text><text class="m" x="84" y="160">−3</text><text class="m" x="190" y="54">3</text><text class="m" x="190" y="204">−2</text>
</svg>
```

- On écrit toujours l'**abscisse d'abord** : `(x ; y)`.
- Les axes partagent le plan en quatre zones ; le signe de `x` et de `y` indique dans quelle zone se trouve le point.
- L'abscisse de `A` est `2`, son ordonnée est `3`.

**Sens à l'école** : le repérage sur quadrillage (cycles 2-3) prépare le repère du collège : « on avance puis on monte ».

---

## 2. Angles : vocabulaire

Un **angle** est formé de deux demi-droites de même origine (le **sommet**). On le mesure avec un rapporteur, en **degrés** (°).

| Nom | Mesure | Exemple |
|---|---|---|
| Angle nul | `0°` | demi-droites confondues |
| Angle aigu | entre `0°` et `90°` | `35°` |
| Angle droit | `90°` | coin d'une équerre |
| Angle obtus | entre `90°` et `180°` | `120°` |
| Angle plat | `180°` | demi-droites opposées |
| Angle plein | `360°` | un tour complet |

### 2.1 Paires d'angles

- **Adjacents** : même sommet, un côté commun, pas de partie commune à l'intérieur.
- **Supplémentaires** : somme `180°` (un angle plat). **Complémentaires** : somme `90°`.
- **Opposés par le sommet** : formés par deux droites sécantes, face à face ; ils sont **égaux**.

```svg Deux droites sécantes : les angles opposés par le sommet sont égaux, deux angles adjacents sont supplémentaires.
<svg viewBox="0 0 320 200" width="320" role="img" aria-label="Deux droites sécantes et les angles formés">
  <path class="s" d="M40 160L280 40M60 40L260 160"/>
  <circle class="pt" cx="160" cy="100" r="4"/>
  <text x="168" y="124">O</text>
  <text class="b" x="196" y="96">α</text><text class="b" x="112" y="112">α</text>
  <text x="156" y="68">β</text><text x="156" y="146">β</text>
  <text class="m" x="20" y="190">α + β = 180°</text>
</svg>
```

### 2.2 Bissectrice

La **bissectrice** d'un angle est la demi-droite issue du sommet qui le partage en **deux angles égaux**. Si l'angle mesure `80°`, chaque moitié mesure `40°`.

### 2.3 Mesures à connaître

L'équerre de l'élève a des angles de `90°`, et `30°-60°` ou `45°-45°`. Savoir ces mesures sert à **estimer** avant de mesurer.

---

## 3. Droites parallèles et angles

Soit une droite (**sécante**) qui coupe deux autres droites. On étudie les angles formés :

- **angles correspondants** : situés du même côté de la sécante, l'un dans la « zone extérieure », l'autre dans la « zone intérieure », dans des positions analogues ;
- **angles alternes-internes** : situés entre les deux droites, de part et d'autre de la sécante.

```svg Deux droites parallèles coupées par une sécante : les angles marqués α sont égaux (correspondants et alternes-internes).
<svg viewBox="0 0 340 260" width="340" role="img" aria-label="Deux droites parallèles et une sécante">
  <path class="s" d="M20 80H320M20 180H320"/>
  <path class="sb" d="M80 230L260 30"/>
  <circle class="pt" cx="215" cy="80" r="4"/><circle class="pt" cx="125" cy="180" r="4"/>
  <text class="b" x="228" y="70">α</text><text class="b" x="186" y="104">α</text><text class="b" x="138" y="170">α</text>
  <text x="228" y="102">β</text><text x="176" y="70">β</text><text x="100" y="170">β</text><text x="138" y="202">β</text>
  <text class="m" x="24" y="72">(d)</text><text class="m" x="24" y="172">(d')</text>
</svg>
```

### 3.1 Propriété et réciproque

- **Propriété** : si deux droites sont **parallèles**, alors les angles correspondants sont égaux et les angles alternes-internes sont égaux.
- **Réciproque** : si deux droites coupées par une sécante forment des angles correspondants égaux (ou alternes-internes égaux), alors elles sont **parallèles**.

La propriété et sa réciproque sont deux énoncés **différents** : l'un sert à calculer un angle, l'autre à prouver un parallélisme.

### 3.2 Exemple rédigé

> Les droites `(d)` et `(d')` sont parallèles. Un angle correspondant mesure `65°`. Quelle est la mesure de l'angle alterne-interne correspondant ?

`(d) // (d')` : les angles alternes-internes sont égaux. Donc l'angle cherché vaut `65°`. Son supplémentaire (angle adjacent) vaut `180° − 65° = 115°`.

### 3.3 Prouver un parallélisme

Deux angles alternes-internes mesurent `72°` et `72°` : **ils sont égaux**, donc les droites sont **parallèles** (réciproque). Si on trouve `72°` et `70°`, on conclut que les droites **ne sont pas parallèles** (contraposée).

---

## 4. Raisonner en géométrie

- Une **définition** nomme un objet ; une **propriété** énonce une conséquence ; une **propriété caractéristique** donne une équivalence.
- On distingue ce qu'on **observe** sur la figure (hypothèse de l'œil) et ce qu'on **démontre**.
- Rédaction type : *Données → propriété utilisée → conclusion.* (« On sait que… ; or, d'après la propriété… ; donc… »)

---

## 5. Problèmes types

**Problème 1.** Deux droites se coupent en formant un angle de `40°`. Quelles sont les mesures des trois autres angles ?
Opposé par le sommet : `40°`. Adjacents supplémentaires : `180° − 40° = 140°` (deux angles).

**Problème 2.** L'angle `x̂` est la moitié d'un angle plat et la bissectrice d'un angle de `76°` le coupe en deux angles égaux. Quelle est la mesure de chaque moitié ?
`76° ÷ 2 = 38°`.

**Problème 3.** Dans un repère, `A(−2 ; 1)`, `B(4 ; 1)` et `C(4 ; 5)`. Montrer que `(AB)` est horizontale et que `ABC` est rectangle en `B` sans mesurer.
`A` et `B` ont la même ordonnée : `(AB)` est horizontale. `B` et `C` ont la même abscisse : `(BC)` est verticale. Une droite horizontale et une droite verticale sont perpendiculaires : `ABC` est rectangle en `B`.

---

## 6. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Inverser abscisse et ordonnée | `A(3 ; 2)` placé en `(2 ; 3)` | Ordre des coordonnées non automatisé | « On avance, puis on monte » ; jeu de bataille navale |
| Lire un angle avec la mauvaise graduation du rapporteur | `130°` lu `50°` | Double graduation, pas d'estimation | Estimer d'abord : aigu ou obtus ? |
| Conclure à partir de la mesure | « les angles semblent égaux donc parallèles » | Preuve perceptive | Montrer des figures « presque parallèles » (angles `72°` et `70°`) |
| Confondre supplémentaires et complémentaires | `180°` / `90°` inversés | Vocabulaire proche | Associer : complémentaires = coin d'équerre, supplémentaires = droite |
| Croire que tous les angles d'un « Z » sont égaux | alternes-internes pris pour opposés par le sommet | Pas de justification du parallélisme | Colorier les angles égaux, exiger la propriété citée |
| Confondre propriété et réciproque | utiliser « angles égaux » pour calculer alors qu'on veut prouver | Statut des énoncés | Fiches « sens de la phrase » |

**Outils** : rapporteur, équerre, quadrillage, logiciel de géométrie dynamique (déplacer un point pour tester une conjecture).

---

## 7. À retenir

- Abscisse d'abord : `(x ; y)`. Distance sur une droite graduée : `|a − b|`.
- Angles opposés par le sommet : égaux. Supplémentaires : `180°`. Complémentaires : `90°`.
- Bissectrice : partage l'angle en deux angles égaux.
- Droites parallèles ⇔ angles correspondants (ou alternes-internes) égaux : la propriété sert à calculer, la réciproque à prouver.
- En géométrie, on justifie avec des propriétés, jamais avec la mesure.

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/01-reperage-angles-parallelisme.html](../../quiz/espace-et-geometrie/01-reperage-angles-parallelisme.html)
- Exercices : [exercices/espace-et-geometrie/01-reperage-angles-parallelisme.html](../../exercices/espace-et-geometrie/01-reperage-angles-parallelisme.html)

## Pistes de prolongement (culture mathématique)

- Éléments d'Euclide, livre I, propositions 27 et 28 (droites parallèles et angles alternes).
- Histoire du rapporteur et de la division du cercle en 360°.
