# Memory 

[![Typescript](https://img.shields.io/badge/typescript-^4.3.5-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-^17.0.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/redux_toolkit-^1.6.1-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Sass](https://img.shields.io/badge/sass-^1.35.1-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vite.js](https://img.shields.io/badge/vite-^2.6.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Jest](https://img.shields.io/badge/jest-^27.4.5-C21325?logo=jest&logoColor=white)](https://jestjs.io/)
[![Istanbul](https://img.shields.io/badge/istanbul-^16.0.2-F44A2E?logo=istanbul&logoColor=white)](https://istanbul.js.org/)

Jeu de memory réalisé avec TypeScript, React et Redux Toolkit. Les cartes sont mélangées aléatoirement à chaque nouvelle partie et le joueur doit retourner les paires de cartes identiques pour gagner. Le temps est compté et le score est calculé en fonction du nombre de paires trouvées.

## Installation

1. Cloner le repository : `git clone https://github.com/KhaeraB/frontend-test-khaera.git`
2. Se déplacer dans le dossier : `cd frontend-test-khaera`
3. Installer les dépendances : `npm install`

## Lancement

1. Lancer la commande `npm run dev`
2. Accéder au jeu sur `http://127.0.0.1:5173/`

## Tests

Les tests unitaires sont écrits avec Jest et les tests d'intégration avec Testcafé. Pour lancer les tests, exécuter la commande `npm test`.

## Couverture de code

La couverture de code est vérifiée avec Istanbul. Pour accéder au rapport de couverture, exécuter la commande `npm run coverage`. Le rapport est accessible dans le dossier `coverage/lcov-report/index.html`. et au lien http://127.0.0.1:5173/coverage

Le but est de créer le jeu Memory

![gif demo](./demo.gif)

## Fonctionnalités
- Au commencement du jeu, des cartes sont disposées face cachée à l'écran
- Le joueur doit cliquer sur deux cartes. Si celles-ci sont identiques, la paire est validée. Sinon, les cartes sont retournées face cachée, et le joueur doit sélectionner une nouvelle paire de cartes
- Un compteur de temps, avec une barre de progression, s’affiche en dessous du plateau
- Le joueur gagne s'il arrive à découvrir toutes les paires avant la fin du temps imparti

## Résultat attendu
- Créer le jeu en react / redux avec typescript
- La répartition des cartes doit être aléatoire à chaque jeu
- Précisions CSS : SASS ou autre préprocesseur encouragé
- Cartes à jouer, vous pouvez utilisez les images que vous souhaiter
- Charte graphique: Pas de charte graphique imposée. Quoi qu’il en soit, le code CSS doit être compréhensible et abordable


Important: Réaliser le test en gardant en tete que le projet est un projet d'entreprise.
