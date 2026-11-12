# Leçon 04 — Expériences à deux épreuves, fréquences et simulation

**Domaine** : Données et probabilités
**Programme** : cycle 4 — expériences aléatoires à une ou deux épreuves, fréquence et probabilité, simulation avec un tableur ou un langage de programmation (BO du 5 mars 2026, annexe 2)
**Prérequis** : leçon 03 de ce domaine (probabilité, équiprobabilité, événement contraire) ; leçon 01 de ce domaine (fréquences, effectifs)
**Durée conseillée** : 1 h 30 (cours) + exercices

---

## Objectifs

À la fin de la leçon, l'étudiante sait :

- reconnaître une expérience aléatoire à deux épreuves et en lister **toutes** les issues ;
- dénombrer avec un **tableau à double entrée** ou un **arbre des possibles** ;
- calculer la probabilité d'un événement composé (« au moins un », « exactement un », « la somme vaut… ») ;
- distinguer **fréquence observée** et **probabilité théorique**, et expliquer la fluctuation d'échantillonnage ;
- simuler une expérience avec un tableur ou un algorithme, et **interpréter** le résultat ;
- repérer les erreurs types d'élèves et proposer une remédiation.

---

## 1. Expériences à deux épreuves

Une **épreuve** est une expérience aléatoire élémentaire (lancer un dé, tirer une boule…). Une expérience **à deux épreuves** en enchaîne deux : lancer deux pièces, lancer un dé deux fois, tirer deux boules dans une urne.

Une **issue** de l'expérience est un **couple** (résultat de la 1re épreuve, résultat de la 2e). L'**ordre compte** : `(P, F)` et `(F, P)` sont deux issues différentes.

> **Rappel (leçon 03).** Si les issues sont **équiprobables**, `P(A) = nombre d'issues favorables / nombre d'issues possibles`, et `P(non A) = 1 − P(A)`.

### 1.1 Avec ou sans remise

- **Avec remise** : on remet la boule dans l'urne avant le second tirage. Les deux épreuves sont identiques et **indépendantes**.
- **Sans remise** : la composition de l'urne change après le premier tirage. Les deux épreuves ne sont **pas** identiques.

Tirer deux boules « en même temps » revient à les tirer **successivement sans remise**.

### 1.2 Deux pièces équilibrées

Les issues sont `PP, PF, FP, FF` : **4 issues équiprobables**, chacune de probabilité `1/4`. Il y a 2 manières d'obtenir « une face et un pile » (`PF` et `FP`), d'où `P(une face exactement) = 2/4 = 1/2`.

---

## 2. Dénombrer : tableau et arbre

### 2.1 Tableau à double entrée (deux dés équilibrés à 6 faces)

Les 36 couples sont équiprobables. On place le 1er dé en lignes, le 2e en colonnes, et on écrit la **somme** dans chaque case :

| 1er \ 2e | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| **1** | 2 | 3 | 4 | 5 | 6 | 7 |
| **2** | 3 | 4 | 5 | 6 | 7 | 8 |
| **3** | 4 | 5 | 6 | 7 | 8 | 9 |
| **4** | 5 | 6 | 7 | 8 | 9 | 10 |
| **5** | 6 | 7 | 8 | 9 | 10 | 11 |
| **6** | 7 | 8 | 9 | 10 | 11 | 12 |

Les **sommes ne sont pas équiprobables** : seules les 36 cases le sont.

| Somme | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Cases | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |
| Probabilité | 1/36 | 2/36 | 3/36 | 4/36 | 5/36 | 6/36 | 5/36 | 4/36 | 3/36 | 2/36 | 1/36 |

Ainsi `P(somme = 7) = 6/36 = 1/6` (la somme la plus probable) et `P(somme = 2) = 1/36`.

### 2.2 Arbre des possibles

Pour une urne de **3 boules rouges et 2 vertes**, on tire deux boules **sans remise**. On écrit sur chaque branche la probabilité de l'étape.

```svg Arbre pondéré : tirage de deux boules sans remise dans une urne de 3 rouges (R) et 2 vertes (V). Au second tirage il reste 4 boules.
<svg viewBox="0 0 520 250" width="520" role="img" aria-label="Arbre pondéré du tirage de deux boules sans remise">
  <path class="sb" d="M60 125L190 60M60 125L190 190"/>
  <path class="s" d="M190 60L330 28M190 60L330 92M190 190L330 158M190 190L330 222"/>
  <circle class="pt" cx="60" cy="125" r="4"/><circle class="pb" cx="190" cy="60" r="4"/><circle class="pb" cx="190" cy="190" r="4"/>
  <text class="b" x="105" y="80">3/5</text><text class="b" x="105" y="178">2/5</text>
  <text class="m" x="196" y="38">R</text><text class="m" x="196" y="218">V</text>
  <text x="240" y="34">2/4</text><text x="240" y="98">2/4</text><text x="240" y="152">3/4</text><text x="240" y="222">1/4</text>
  <text x="338" y="32">RR : 3/5 × 2/4 = 3/10</text>
  <text x="338" y="96">RV : 3/5 × 2/4 = 3/10</text>
  <text x="338" y="162">VR : 2/5 × 3/4 = 3/10</text>
  <text x="338" y="226">VV : 2/5 × 1/4 = 1/10</text>
</svg>
```

**Règles de l'arbre pondéré.**

1. La somme des probabilités des branches issues d'un même nœud vaut `1`.
2. La probabilité d'une **feuille** (issue) est le **produit** des probabilités le long de la branche.
3. La probabilité d'un événement est la **somme** des probabilités des feuilles qui le réalisent.

Vérification : `3/10 + 3/10 + 3/10 + 1/10 = 1`. Les feuilles ne sont **pas** équiprobables ici (`VV` est plus rare), mais le principe produit/somme fonctionne toujours.

**Arbre non pondéré, feuilles équiprobables.** Dans le cas avec remise ou pour deux pièces, chaque étape a des branches de même probabilité : les feuilles sont équiprobables et on peut simplement **compter** les feuilles.

---

## 3. Événements composés

### 3.1 Vocabulaire à traduire en issues

- **« au moins un »** : un ou plusieurs (le contraire est « aucun ») ;
- **« exactement un »** : un seul, ni zéro, ni deux ;
- **« la somme est égale à `s` »** : tous les couples de somme `s`.

### 3.2 Exemples résolus

**Exemple 1 (deux dés, « au moins un 6 »).** Passer par le contraire : « aucun 6 » a `5 × 5 = 25` issues sur 36.

```
P(au moins un 6) = 1 − P(aucun 6) = 1 − 25/36 = 11/36
```

Piège : `P(6 au 1er) + P(6 au 2e) = 2/6` compte deux fois le couple `(6, 6)`.

**Exemple 2 (urne 3R / 2V, avec remise, 25 couples).**

```
P(RR) = 3/5 × 3/5 = 9/25        P(VV) = 2/5 × 2/5 = 4/25
P(même couleur) = 9/25 + 4/25 = 13/25
P(exactement un rouge) = RV + VR = 6/25 + 6/25 = 12/25
```

**Exemple 3 (même urne, sans remise, 20 issues).**

```
P(RR) = 3/10     P(VV) = 1/10
P(au moins un rouge) = 1 − P(VV) = 9/10
P(couleurs différentes) = 3/10 + 3/10 = 3/5
```

---

## 4. Fréquence et probabilité

### 4.1 Deux notions distinctes

- La **probabilité** est un nombre **théorique**, fixé par le modèle (ici : équiprobabilité) avant toute expérience.
- La **fréquence** d'un événement est le rapport `effectif de l'événement / nombre d'essais` : elle est **observée** et change d'une série à l'autre.

**Exemple.** Sur 200 lancers d'une pièce, on obtient 108 piles : fréquence `108/200 = 0,54`, alors que `P(pile) = 0,5`. L'écart n'est pas une anomalie.

### 4.2 Fluctuation d'échantillonnage et stabilisation

> **Fait à retenir (loi des grands nombres, sans formalisme).** Quand le nombre d'essais augmente, la fréquence d'un événement **se stabilise** autour de sa probabilité : plus l'échantillon est grand, **moins les fréquences fluctuent** d'une série à l'autre.

Exemple **illustratif** (valeurs inventées, pas une vérité mathématique) de fréquences cumulées de « pile » sur une série de lancers :

| Lancers | 10 | 50 | 100 | 500 | 1 000 |
|---|---|---|---|---|---|
| Piles | 7 | 28 | 53 | 254 | 502 |
| Fréquence | 0,70 | 0,56 | 0,53 | 0,508 | 0,502 |

Précisions importantes :

- **Elle ne prouve pas** la valeur de la probabilité : elle l'**estime** ; on ne peut pas la lire exactement sur une série finie.
- Rien ne « compense » : après une série de piles, la pièce **n'a pas de mémoire**. C'est la **proportion** qui s'approche de `0,5`, pas l'effectif (l'écart `piles − faces` peut grandir).
- Deux séries de même taille donnent des fréquences **différentes**, et c'est normal.

---

## 5. Simuler une expérience

**Simuler** consiste à reproduire une expérience aléatoire par un procédé informatique, pour obtenir rapidement un grand nombre d'essais.

### 5.1 Avec un tableur

| Besoin | Formule |
|---|---|
| Nombre aléatoire dans `[0 ; 1[` | `=ALEA()` |
| Lancer d'un dé à 6 faces | `=ALEA.ENTRE.BORNES(1;6)` |
| Lancer d'une pièce (1 = pile, 0 = face) | `=ALEA.ENTRE.BORNES(0;1)` |
| Somme de deux dés | `=ALEA.ENTRE.BORNES(1;6)+ALEA.ENTRE.BORNES(1;6)` |
| Nombre de 7 dans `B2:B1001` | `=NB.SI(B2:B1001;7)` |
| Fréquence correspondante | `=NB.SI(B2:B1001;7)/1000` |

Pour simuler « deux dés » avec 1000 essais, on **recopie vers le bas** une ligne contenant deux `ALEA.ENTRE.BORNES(1;6)` et leur somme. Chaque **recalcul** (touche `F9`) produit une **nouvelle** simulation, donc de nouvelles fréquences.

### 5.2 Avec un algorithme (pseudo-code, proche de Scratch / Python)

```
nb_sept ← 0
répéter 1000 fois :
    d1 ← nombre aléatoire entre 1 et 6
    d2 ← nombre aléatoire entre 1 et 6
    si d1 + d2 = 7 alors
        nb_sept ← nb_sept + 1
afficher nb_sept / 1000
```

En Python : `random.randint(1, 6)`. Le compteur doit être **initialisé à 0 avant** la boucle.

### 5.3 Interpréter une simulation

- La fréquence obtenue (par exemple `0,172`) est **proche de** `1/6 ≈ 0,167`, sans être égale : on **ne conclut pas** que la probabilité est `0,172`.
- Une simulation **valide ou met en doute un modèle** : si les 11 sommes étaient équiprobables, on aurait `P(7) = 1/11 ≈ 0,09` ; une fréquence de 7 proche de `0,17` sur 1000 essais met cette idée en défaut.
- Pour mieux estimer : **augmenter** le nombre d'essais, ou **répéter** la simulation et observer la dispersion.

---

## 6. Erreurs types d'élèves (volet didactique)

| Erreur observée | Exemple | Cause probable | Remédiation possible |
|---|---|---|---|
| Issues non distinguées | « Deux pièces : PP, PF, FF, donc 3 issues équiprobables, `P = 1/3` » | `PF` et `FP` confondus : l'ordre est ignoré | Pièces de deux couleurs (rouge, bleue), lister les couples, vérifier par l'expérience |
| Somme de deux dés équiprobable | « 11 sommes possibles, donc `P(7) = 1/11` » | Équiprobabilité appliquée aux sommes, pas aux couples | Tableau à double entrée ; expérimenter (la somme 7 sort bien plus souvent que 2) |
| Mémoire de la pièce | « Après 5 piles, face est plus probable » | Croyance en une compensation | Simulation : la série suivante ne dépend pas de la précédente |
| Confusion fréquence / probabilité | « J'ai obtenu 0,54 donc `P(pile) = 0,54` » | Une fréquence observée est prise pour la valeur théorique | Comparer plusieurs séries et la stabilisation |
| Additionner au lieu de multiplier | `P(RR) = 3/5 + 3/5` | Règles de l'arbre mal comprises | Compter sur le tableau ou le dénombrement des couples |
| Oublier la remise | Utiliser `3/5 × 3/5` sans remise | Urne supposée inchangée | Écrire la composition de l'urne à chaque étape |
| « Au moins un » mal traité | `P(au moins un 6) = 1/6 + 1/6` | Double comptage de `(6, 6)` | Passer par l'événement contraire |

**Dispositifs pour enseigner.** Lancers réels en groupe, mise en commun des résultats de la classe (fréquences **cumulées** par tranche : 10, 50, 100…), tableau de fréquences cumulées au tableur, comparaison avec la probabilité théorique, puis simulation de plus grands échantillons. Lancer le même nombre d'essais dans plusieurs groupes fait **voir** la fluctuation.

---

## 7. À retenir

- Deux épreuves : une issue est un **couple** ; l'ordre compte.
- Tableau à double entrée ou arbre : lister toutes les issues avant de compter.
- Arbre pondéré : **produit** le long d'une branche, **somme** sur les branches.
- « Au moins un » : passer par le **contraire** (« aucun »).
- Sommes de deux dés : **non équiprobables** (1/36 pour 2 ou 12, 6/36 pour 7).
- Fréquence **observée** ≠ probabilité **théorique** ; elle se stabilise quand l'échantillon grandit.
- La pièce n'a **pas de mémoire**.
- Tableur : `ALEA.ENTRE.BORNES`, `NB.SI`, recalcul pour une nouvelle simulation.

---

## Pour s'entraîner

- Exercices : [exercices/donnees-et-probabilites/04-deux-epreuves-frequences-simulation.html](../../exercices/donnees-et-probabilites/04-deux-epreuves-frequences-simulation.html)
- Quiz : [quiz/donnees-et-probabilites/04-deux-epreuves-frequences-simulation.html](../../quiz/donnees-et-probabilites/04-deux-epreuves-frequences-simulation.html)

## Pistes de prolongement (culture mathématique)

- Le problème des partis (Pascal et Fermat, 1654) : naissance du calcul des probabilités à partir de jeux de dés.
- Jacques Bernoulli (*Ars conjectandi*, 1713) : première formulation de la loi des grands nombres.
