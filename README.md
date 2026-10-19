# Préparation CRPE — Mathématiques

## But du projet

Accompagner une étudiante dans la préparation de l'épreuve de **mathématiques du CRPE** (Concours de Recrutement de Professeurs des Écoles, concours public, 1er degré), **format bac+3 / L3**.

Objectifs :

- Consolider les **savoirs mathématiques** de niveau fin de collège / début de lycée, nécessaires pour enseigner de la maternelle au CM2.
- Maîtriser les **notions du programme du cycle 1 au cycle 3** et leur progression.
- Acquérir la **posture didactique** attendue : analyser des productions d'élèves, repérer des erreurs types, proposer des remédiations, concevoir des séquences.
- S'entraîner aux **conditions réelles** de l'épreuve (durée, rédaction, rigueur de la justification).

## Format de l'épreuve : CRPE externe **bac+3 (L3)**, session 2026 et suivantes

Sources officielles (devenirenseignant.gouv.fr, vérifiées le 2026-10-19) :
- [Les épreuves du concours externe bac+3](https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac3-de-recrutement-de-professeurs-des-ecoles-1380)
- [CRPE bac+3 : épreuve orale de français ou de mathématiques](https://www.devenirenseignant.gouv.fr/crpe-bac-3-epreuve-orale-de-francais-ou-de-mathematiques-1661)

### Admissibilité (écrits)
- **Épreuve 1 : français + mathématiques** — 4 h, coefficient 5, notée sur 20 (**10 pts français + 10 pts maths**). Note ≤ 2,5 sur l'une des deux parties = éliminatoire.
  - Partie maths : **plusieurs exercices ou problèmes**. Évalue connaissance du programme, capacité à le mobiliser, raisonnement, expression écrite.
- Épreuve 2 : autres domaines d'enseignement (hors EPS), 4 h, coefficient 3 (trois domaines sur quatre au choix : histoire-géo/EMC, sciences et techno, arts, langue vivante B1).

### Admission (oraux)
- **Épreuve 1 : oral de français OU de mathématiques** (choix à l'inscription) — préparation 1 h, épreuve 45 min (15 min d'exposé + 30 min d'échange), coefficient 5, note 0 éliminatoire. Exposé = explicitation et mobilisation d'**une notion** à partir de documents fournis par le jury. *Durée de l'épreuve modifiée à partir de la session 2027 (texte en cours de publication).*
- Épreuve 2 : EPS + entretien (55 min, coefficient 3).

### Programme de mathématiques
- Officiel : l'ensemble des **connaissances du cycle 4** (collège, 5e-4e-3e). Détail contrôlé sur l'annexe 2 du BO du 5 mars 2026 (voir « Thématiques »). Version de référence 2020 / 2026 pour la session visée : **à confirmer**.
- Le programme « cycle 4 + algèbre de seconde » (BOEN n° 14 du 2 avril 2026) concerne le concours **bac+5**, pas le bac+3.
- Pas de partie « didactique » annoncée à l'écrit bac+3. La **didactique / cycles 1-3** sert surtout pour l'**oral** (explicitation d'une notion).

> Les sujets zéro et annales sont à récupérer sur [devenirenseignant.gouv.fr](https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163).

## Types de ressources du projet

| Type | Rôle | Dossier prévu |
|------|------|---------------|
| **Leçons** | Cours structurés : rappels, définitions, propriétés, méthodes, exemples résolus, lien avec le programme de l'école | `lecons/<domaine>/` |
| **Exercices** | Pages web interactives : réponse saisie, vérification, indice, correction détaillée | `exercices/<domaine>/*.html` |
| **Quiz** | Pages web interactives : QCM avec correction immédiate, score, regard d'enseignant | `quiz/<domaine>/*.html` |
| **Tests blancs** | Sujets complets en conditions réelles (4 h) + barème + corrigé commenté | `tests-blancs/` |

## Thématiques / sujets à traiter

Base : **programme de mathématiques du cycle 4, annexe 2 du BO n° 10 du 5 mars 2026** ([arrêté du 18 février 2026](https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A)), texte fourni et contrôlé le 2026-10-19. Entrée en vigueur : 5e rentrée 2026, 4e rentrée 2027, 3e rentrée 2028 (l'ancien programme du BO du 30 juillet 2020 reste appliqué en 4e et 3e jusqu'à ces dates).

> À confirmer : quelle version du programme (2020 ou 2026) sert de référence pour l'écrit bac+3 de la session visée. Cette liste suit le texte 2026 ; les écarts connus avec 2020 sont signalés en bas.

Le programme 2026 compte 5 domaines : Nombres et calculs / Espace et géométrie / Organisation et gestion de données et probabilités / Proportionnalité, fonctions / Pensée informatique. Chaque niveau liste des « automatismes » (à maîtriser sans effort) et des « objectifs d'apprentissage ».

### 1. Nombres et calculs
- **Opérations** : sens des quatre opérations, division par un décimal, priorités opératoires, distributivité simple, programmes de calcul, multiples et diviseurs, critères de divisibilité (2, 3, 5, 9, 10), division euclidienne, factorisation en nombres premiers
- **Nombres relatifs** : définition, opposé, valeur absolue, comparaison, les 4 opérations (règle des signes via la distributivité)
- **Nombres rationnels** : fractions (nombre, quotient, opérateur), comparaison, simplification, fraction irréductible, 4 opérations, inverse, fraction d'une fraction, ensembles N, Z, D, Q
- **Puissances** : carré, cube, exposant positif puis négatif, produits et quotients de puissances, puissances de 10, notation scientifique, préfixes nano à giga
- **Racine carrée** : définition, encadrement entre deux entiers, équation x² = a
- **Calcul littéral et algébrique** : formules, substitution, réduire, développer, factoriser, double distributivité, identités remarquables, preuves par le calcul littéral
- **Équations / inéquations** : ax = c, x + b = c, ax + b = c, ax + b = cx + d, équation produit nul, inéquation ax ≥ b (algébrique et graphique), mise en équation
- Tableur et algorithme pour conjecturer ou résoudre approximativement

### 2. Espace et géométrie
- **Repérage** : droite graduée (abscisses), repère orthogonal du plan
- **Angles** : vocabulaire, bissectrice, parallélisme et angles alternes internes / correspondants
- **Triangles** : somme des angles, construction, médiatrices, cercle circonscrit, hauteurs, médianes, aire ; droite des milieux (3 théorèmes) ; **Pythagore** (réciproque, contraposée) ; triangle rectangle et cercle circonscrit ; **Thalès** (réciproque, contraposée, triangles emboîtés, papillon) ; **trigonométrie** (cosinus, sinus, tangente)
- **Quadrilatères** : parallélogramme (définition, propriétés caractéristiques), rectangle, losange, carré, aires, conversions longueurs / aires
- **Transformations** : symétrie axiale, symétrie centrale (demi-tour), translation, **vecteurs** (égalité, somme, relation de Chasles)
- **Représentation de l'espace** : perspective cavalière, patrons, volumes (cube, pavé, prisme, cylindre, pyramide, cône, boule), aire du disque, unités de volume et de capacité, sphère et grands cercles, sections (pavé, cylindre, boule)
- Constructions à la règle et au compas, programmes de construction

### 3. Organisation et gestion de données, probabilités
- **Statistiques** : effectifs, fréquences, effectifs cumulés, représentations (tableau, diagrammes en barres / circulaire, graphique cartésien), moyenne, moyenne pondérée, médiane, étendue, quartiles, boîtes à moustaches, comparaison de séries, tableur
- **Probabilités** : vocabulaire (issue, événement), équiprobabilité, événement contraire, complémentaire / réunion / intersection, P(A∪B) + P(A∩B) = P(A) + P(B), expériences à deux épreuves, fluctuation et stabilisation des fréquences, simulation

### 4. Proportionnalité, fonctions
- **Proportionnalité** : procédures (linéarité, retour à l'unité, coefficient), tableaux et graphiques, pourcentages, coefficient multiplicateur (hausse / baisse), ratios, partage proportionnel, quatrième proportionnelle, échelles, grandeurs quotients (vitesse…), lien avec Thalès
- **Fonctions** : « en fonction de », tableau de valeurs, formule, graphique, image / antécédent, fonctions linéaires et affines (coefficients lus graphiquement), fonction carré, résolution graphique, programmes de calcul à remonter

### 5. Pensée informatique (algorithmique)
- Instructions séquentielles, entrées / sorties, variables, conditions simples puis composées, boucle inconditionnelle puis conditionnelle, structuration de programmes ; programmation par blocs

### 6. Raisonnement et résolution de problèmes (transversal)
- Définition / propriété / propriété caractéristique, théorème, réciproque, contraposée
- Raisonnement déductif, par l'absurde, par contre-exemple, analyse-synthèse
- Preuves utilisant les aires
- Six compétences : chercher, modéliser, représenter, calculer, raisonner, communiquer

### 7. Pour l'oral de mathématiques (notion à expliciter, cycles 1 à 3)
L'oral porte sur « l'explicitation et la mobilisation d'une notion » à partir de documents du jury. Prévoir, en complément du cycle 4 :
- Numération de position, techniques opératoires, calcul mental
- Fractions et décimaux à l'école, grandeurs et mesures, géométrie aux cycles 2-3
- Analyse de productions d'élèves, erreurs types, remédiations
- Résolution de problèmes à l'école (typologie, étapes), progressions

### Écarts avec la liste initiale
- **Retirés** (absents du programme 2026) : PGCD / PPCM (restent utiles pour simplifier une fraction), systèmes de deux équations, rotation, homothétie, triangles semblables, inégalité triangulaire, suites, dénombrement avancé, autres bases de numération (hors oral)
- **Ajoutés** : vecteurs et relation de Chasles, droite des milieux, boîtes à moustaches, effectifs cumulés, algèbre des événements (union, intersection), fonction carré, pensée informatique (variables, conditions, boucles), raisonnement par contraposée / absurde
- **Pas de domaine « Grandeurs et mesures » à part** : aires, volumes et conversions sont dans « Espace et géométrie », grandeurs quotients dans « Proportionnalité »
- Si c'est le programme 2020 qui s'applique : retour possible de agrandissement / réduction, calcul de probabilités moins formalisé, domaine « Grandeurs et mesures » distinct

## Organisation du projet

Les dossiers `lecons/`, `exercices/` et `quiz/` sont triés par **domaine du programme** (mêmes sous-dossiers partout) :

```
CRPE/
├── README.md
├── lancer.bat                       # double-clic : build + serveur local + navigateur
├── index.html                       # accueil et point d'entrée (généré)
├── build.py                         # génère les pages HTML des leçons, le menu et l'accueil
├── assets/                          # style.css, app.js (quiz), nav.js + nav-data.js (menu)
├── lecons/
│   ├── nombres-et-calculs/          # NN-sujet.md (source) + NN-sujet.html (généré)
│   ├── espace-et-geometrie/
│   ├── donnees-et-probabilites/
│   ├── proportionnalite-et-fonctions/
│   └── pensee-informatique/
├── exercices/                       # même arborescence, pages .html interactives
├── quiz/                            # même arborescence, pages .html interactives
├── tests-blancs/                    # bilans par domaine, puis sujets complets (4 h) + corrigés + barèmes
│   └── nombres-et-calculs/
└── suivi/                           # progression, points faibles, calendrier de révision
```

Convention de nommage : `NN-sujet.ext`, avec le même `NN-sujet` pour la leçon, son quiz et ses exercices. Le raisonnement et la résolution de problèmes (thème transversal) sont traités dans chaque domaine, et la didactique pour l'oral dans les leçons concernées.

## Parcours pédagogique prévu

1. **Diagnostic** initial pour situer le niveau et repérer les lacunes.
2. **Leçons** thématiques, dans un ordre progressif (nombres → grandeurs → géométrie → algèbre → données → didactique).
3. **Quiz** à la fin de chaque leçon (vérification rapide).
4. **Exercices** (niveaux : application, approfondissement, type concours).
5. **Tests blancs** réguliers, puis correction commentée et bilan des erreurs.
6. **Révisions ciblées** sur les points faibles identifiés, avant l'épreuve.

## Navigation et utilisation

Design : thème crème et bleu (polices Bricolage Grotesque, Instrument Serif, DM Sans, chargées depuis Google Fonts : sans connexion, des polices système de secours s'affichent). Les couleurs sont des variables CSS en tête de `assets/style.css`.

**Double-cliquer sur `lancer.bat`** : il régénère les pages (`python build.py`), démarre un petit serveur local et ouvre le site sur http://localhost:5174 (fermer la fenêtre noire pour l'arrêter ; Python doit être installé). On peut aussi ouvrir `index.html` directement. La page d'accueil liste tous les chapitres. Sur chaque page (leçon, quiz, exercices, bilan), la barre du haut, à côté de « Maths CRPE », propose les onglets **Leçons · Quiz · Exercices · Bilans** : un clic ouvre la liste de tous les chapitres par thème (Échap ou clic ailleurs pour fermer). Sous la barre, des onglets Leçon / Quiz / Exercices passent d'une partie à l'autre du chapitre en cours, et des boutons précédent / suivant changent de chapitre. Sur téléphone, les onglets passent sur une seconde ligne. Le meilleur score de chaque quiz / exercices est mémorisé dans le navigateur et affiché dans le menu.

Les leçons sont écrites en Markdown (`lecons/<domaine>/NN-sujet.md`, source à modifier) et lues en HTML. **Après toute modification ou ajout de leçon, quiz ou exercice, lancer :**

```
python build.py
```

Le script (sans dépendance externe) régénère les pages HTML des leçons, le menu (`assets/nav-data.js`), l'accueil (`index.html`) et ajoute le menu aux nouvelles pages quiz / exercices / tests blancs. Convention : une leçon `NN-sujet.md` est reliée à `quiz/<domaine>/NN-sujet.html` et `exercices/<domaine>/NN-sujet.html` (même nom).

## Test de positionnement et verrouillage

Chaque thème commence par un **test de positionnement** (`tests-blancs/<thème>/positionnement.html`). Tant qu'il n'est pas terminé, les leçons, quiz, exercices et le bilan du thème sont **verrouillés** (cadenas dans les menus, page de verrouillage qui renvoie vers le test).

- Le test mêle exercices types et problèmes, répartis par sous-thème (une leçon = un sous-thème). Une seule tentative par question, aucune correction pendant le test.
- À la fin : **note sur 20**, **pourcentage par sous-thème** (Acquis ≥ 80 %, À consolider 50-79 %, À travailler < 50 %), **priorités** à travailler avec lien vers les leçons, et correction des questions ratées.
- Le niveau de chaque sous-thème s'affiche ensuite en pastille (vert / jaune / rouge) dans les menus et sur l'accueil, et dans l'en-tête de chaque chapitre.
- Le test peut être refait (le résultat est remplacé, les leçons restent ouvertes). Résultats enregistrés dans le navigateur.
- Tout remettre à zéro : bouton **« Réinitialiser ma progression »** en bas de la page d'accueil (efface scores, résultats des tests et déverrouillages de ce navigateur). Les données sont propres à chaque adresse : si tu ouvres le site de plusieurs façons (lancer.bat, index.html directement), chacune a sa propre progression.
- Déverrouillage manuel (enseignant) : ajouter `?deverrouiller` à l'adresse d'une page, par exemple `index.html?deverrouiller`.
- Pour un nouveau thème : créer `tests-blancs/<thème>/positionnement.html` sur le modèle de celui de « nombres-et-calculs » (`test: true`, `placement`, `parts`, une section par sous-thème avec `part: "NN"` égal au numéro de la leçon), puis `python build.py`. Sans ce fichier, le thème n'est pas verrouillé.

## Avancement

- **Nombres et calculs** : thème complet (7 leçons, 7 quiz, 7 séries d'exercices, 1 bilan)
  - [x] 01 Nombres relatifs
  - [x] 02 Fractions et nombres rationnels
  - [x] 03 Puissances, notation scientifique, racine carrée
  - [x] 04 Multiples, diviseurs, nombres premiers
  - [x] 05 Opérations, priorités, calcul mental
  - [x] 06 Calcul littéral
  - [x] 07 Équations et inéquations
  - [x] Bilan : `tests-blancs/nombres-et-calculs/bilan-nombres-et-calculs.html` (33 questions, leçons 01 à 07)
- Espace et géométrie : à faire
- Données et probabilités : à faire
- Proportionnalité et fonctions : à faire
- Pensée informatique : à faire

## Prochaines étapes

- [ ] Valider la liste des thématiques et leur ordre
- [ ] Faire un test de positionnement initial
- [ ] Définir le calendrier jusqu'à la date du concours
- [ ] Rédiger les premières leçons et exercices
