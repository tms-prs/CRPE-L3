# Leçon 06 — Droite des milieux et théorème de Thalès

**Domaine** : Espace et géométrie
**Programme** : cycle 4 — les trois théorèmes relatifs à la droite des milieux (4e) ; théorème de Thalès, réciproque et contraposée, configurations des triangles emboîtés et du papillon (3e) (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçons 01 à 05, proportionnalité (thème Proportionnalité et fonctions), équations (thème Nombres et calculs, leçon 07)
**Durée conseillée** : 2 h (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- utiliser les théorèmes de la droite des milieux pour prouver un parallélisme ou calculer une longueur ;
- reconnaître les deux configurations de Thalès (triangles emboîtés, papillon) ;
- calculer une longueur avec le théorème de Thalès ;
- prouver un parallélisme avec la réciproque, ou son contraire avec la contraposée ;
- repérer les erreurs types d'élèves.

---

## 1. Droite des milieux

Dans un triangle `ABC`, soit `I` le milieu de `[AB]` et `J` le milieu de `[AC]`.

```svg I et J sont les milieux de [AB] et [AC] : (IJ) est parallèle à (BC) et IJ = BC ÷ 2.
<svg viewBox="0 0 400 280" width="400" role="img" aria-label="Droite des milieux dans un triangle">
  <path class="fs" d="M200 40L60 240L340 240Z"/>
  <path class="sb" d="M130 140L270 140"/>
  <circle class="pt" cx="200" cy="40" r="4"/><circle class="pt" cx="60" cy="240" r="4"/><circle class="pt" cx="340" cy="240" r="4"/>
  <circle class="pb" cx="130" cy="140" r="5"/><circle class="pb" cx="270" cy="140" r="5"/>
  <text x="196" y="30">A</text><text x="40" y="258">B</text><text x="344" y="258">C</text>
  <text class="b" x="108" y="136">I</text><text class="b" x="278" y="136">J</text>
  <text class="m" x="168" y="130">IJ = BC ÷ 2</text>
</svg>
```

**Les trois théorèmes** :

1. **Parallélisme** : la droite `(IJ)` qui joint les milieux de deux côtés est **parallèle** au troisième côté `(BC)`.
2. **Longueur** : `IJ = BC ÷ 2`.
3. **Réciproque** : si une droite passe par le milieu `I` de `[AB]` et est **parallèle** à `(BC)`, alors elle coupe `[AC]` en son **milieu**.

**Exemple.** `BC = 10 cm`, `I` et `J` milieux de `[AB]` et `[AC]` : `IJ = 5 cm`, et `(IJ) // (BC)`.

**Conséquence** : le triangle `AIJ` est une réduction de `ABC` de rapport `1/2` : `AI = AB/2`, `AJ = AC/2` et `IJ = BC/2`. Son périmètre vaut donc la moitié de celui de `ABC`.

---

## 2. Le théorème de Thalès

### 2.1 Les deux configurations

On a deux droites sécantes en `A`, et deux points `M` sur la première, `N` sur la seconde. La droite `(MN)` est **parallèle** à la droite `(BC)` où `B` est sur la première droite, `C` sur la seconde.

**Triangles emboîtés** : `M` est sur `[AB]` et `N` sur `[AC]` (du même côté de `A`).

```svg Triangles emboîtés : (MN) // (BC).
<svg viewBox="0 0 400 280" width="400" role="img" aria-label="Configuration de Thalès à triangles emboîtés">
  <path class="fs" d="M200 40L60 240L340 240Z"/>
  <path class="sb" d="M144 120L256 120"/>
  <circle class="pt" cx="200" cy="40" r="4"/><circle class="pt" cx="60" cy="240" r="4"/><circle class="pt" cx="340" cy="240" r="4"/>
  <circle class="pb" cx="144" cy="120" r="5"/><circle class="pb" cx="256" cy="120" r="5"/>
  <text x="196" y="30">A</text><text x="40" y="258">B</text><text x="344" y="258">C</text>
  <text class="b" x="118" y="116">M</text><text class="b" x="264" y="116">N</text>
  <text class="m" x="154" y="260">(MN) // (BC)</text>
</svg>
```

**Papillon** : `A` est **entre** `M` et `B`, et entre `N` et `C`.

```svg Papillon : A est entre M et B, et entre N et C ; (MN) // (BC).
<svg viewBox="0 0 400 280" width="400" role="img" aria-label="Configuration de Thalès en papillon">
  <path class="s" d="M110 60L254 204M260 80L164 192"/>
  <path class="sb" d="M110 60L260 80M254 204L164 192"/>
  <circle class="pb" cx="200" cy="150" r="5"/>
  <circle class="pt" cx="110" cy="60" r="4"/><circle class="pt" cx="260" cy="80" r="4"/><circle class="pt" cx="254" cy="204" r="4"/><circle class="pt" cx="164" cy="192" r="4"/>
  <text class="b" x="210" y="146">A</text><text x="90" y="56">M</text><text x="268" y="76">N</text><text x="260" y="222">B</text><text x="144" y="210">C</text>
</svg>
```

### 2.2 Énoncé

**Théorème de Thalès.** Si les droites `(BM)` et `(CN)` sont sécantes en `A` et si `(MN) // (BC)`, alors :

`AM / AB = AN / AC = MN / BC`

**Lecture** : on compare les longueurs de **deux triangles** (le petit `AMN`, le grand `ABC`) côté par côté : les rapports sont **égaux**. Le premier rapport utilise les deux côtés sur la **même droite** à partir de `A`.

### 2.3 Calculer une longueur

On écrit les rapports, puis on utilise le **produit en croix**.

**Exemple (triangles emboîtés).** `(MN) // (BC)`, `AM = 3`, `AB = 5`, `AN = 4,5`, `BC = 8`.

```
AM/AB = AN/AC = MN/BC
3/5   = 4,5/AC = MN/8
AC = 4,5 × 5 ÷ 3 = 7,5
MN = 8 × 3 ÷ 5 = 4,8
```

**Rapport de réduction / d'agrandissement** `k = AM/AB = 3/5` : les longueurs du petit triangle sont celles du grand multipliées par `k`.

---

## 3. Réciproque et contraposée

### 3.1 Réciproque

Si, dans la configuration (avec `A, M, B` alignés et `A, N, C` alignés **dans le même ordre**), on a :

`AM / AB = AN / AC`

alors `(MN) // (BC)`.

**Exemple.** `AM = 2`, `AB = 5`, `AN = 2,4`, `AC = 6`. `2/5 = 0,4` et `2,4/6 = 0,4` : les rapports sont égaux, donc d'après la réciproque de Thalès, `(MN) // (BC)`.

### 3.2 Contraposée

Si `AM/AB ≠ AN/AC` (avec les mêmes alignements), alors `(MN)` n'est **pas** parallèle à `(BC)`.

**Exemple.** `AM = 2`, `AB = 5`, `AN = 3`, `AC = 8`. `2/5 = 0,4` et `3/8 = 0,375` : rapports différents, donc `(MN)` n'est pas parallèle à `(BC)`.

> Le théorème sert à **calculer** une longueur quand on **sait** que les droites sont parallèles. La réciproque sert à **prouver** le parallélisme. Il faut vérifier l'**ordre des points** : `A` entre `M` et `B` dans le cas du papillon, `M` entre `A` et `B` dans le cas emboîté.

---

## 4. Applications

- **Hauteur d'un arbre** : à la même heure, un bâton de `1,5 m` donne une ombre de `2 m` ; l'arbre donne une ombre de `12 m`. Hauteur de l'arbre : `1,5 × 12 ÷ 2 = 9 m`.
- **Largeur d'une rivière** : configuration papillon avec deux triangles aux côtés parallèles.
- **Agrandissement et réduction** : si les longueurs sont multipliées par `k`, les aires sont multipliées par `k²` (et les volumes par `k³`).

---

## 5. Problèmes types

**Problème 1.** `I` et `J` sont les milieux de `[AB]` et `[AC]`. `BC = 14 cm`. Calculer `IJ`.
`IJ = 14 ÷ 2 = 7 cm`.

**Problème 2.** `(MN) // (BC)`, `AM = 4`, `AB = 10`, `MN = 6`. Calculer `BC`.
`AM/AB = MN/BC`, donc `BC = 6 × 10 ÷ 4 = 15`.

**Problème 3.** Papillon : `(MN) // (BC)`, `AM = 3`, `AB = 5`, `AN = 2,4`. Calculer `AC`.
`AM/AB = AN/AC` donc `AC = 2,4 × 5 ÷ 3 = 4`.

**Problème 4.** `AM = 6`, `AB = 9`, `AN = 8`, `AC = 12` (emboîtés). `(MN)` est-elle parallèle à `(BC)` ?
`6/9 = 2/3` et `8/12 = 2/3` : rapports égaux, donc d'après la réciproque, `(MN) // (BC)`.

---

## 6. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Rapport mal construit | `AM/MB` au lieu de `AM/AB` | Mélange parties / totalités | Colorier petit et grand triangle ; écrire « petit sur grand » |
| Utiliser Thalès sans parallélisme | | Hypothèse oubliée | Rédaction obligatoire : « on sait que (MN) // (BC) » |
| Confondre théorème et réciproque | prouver un parallélisme avec Thalès | Statut des énoncés | Fiches « calculer / prouver » |
| Ne pas vérifier l'ordre des points (réciproque) | `A` pas entre `M` et `B` | Alignement non vérifié | Refaire la figure à l'échelle |
| Rapports inversés | `AB/AM = AN/AC` | Perte de la cohérence | Toujours « petit sur grand » dans les trois rapports |
| Produit en croix faux | `AC = 3 × 5 ÷ 4,5` au lieu de `4,5 × 5 ÷ 3` | Procédure sans sens | Tableau de proportionnalité |
| Confondre papillon et emboîtés | | Figures prototypiques | Orienter et tourner les figures |

**Outils** : tableau de proportionnalité, couleurs, papier calque, logiciel de géométrie dynamique (déplacer `M` en gardant le parallélisme).

---

## 7. À retenir

- Droite des milieux : `(IJ) // (BC)` et `IJ = BC ÷ 2` ; une parallèle à `(BC)` passant par le milieu de `[AB]` coupe `[AC]` en son milieu.
- Thalès : `AM/AB = AN/AC = MN/BC` si `(MN) // (BC)` (emboîtés ou papillon).
- Réciproque : rapports égaux (même ordre des points) ⇒ parallèles ; contraposée : rapports différents ⇒ non parallèles.
- Thalès sert à calculer ; la réciproque sert à prouver le parallélisme.

---

## Pour s'entraîner

- Quiz : [quiz/espace-et-geometrie/06-droite-milieux-thales.html](../../quiz/espace-et-geometrie/06-droite-milieux-thales.html)
- Exercices : [exercices/espace-et-geometrie/06-droite-milieux-thales.html](../../exercices/espace-et-geometrie/06-droite-milieux-thales.html)

## Pistes de prolongement (culture mathématique)

- Repères historiques autour de Thalès (mesure de la hauteur d'une pyramide), théorème « de l'intercepte » dans les autres pays.
- Mesures indirectes : arpentage, hauteur d'un bâtiment, largeur d'une rivière.
