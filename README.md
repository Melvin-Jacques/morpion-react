# Morpion en React avec IA

Un jeu de morpion interactif développé en React, permettant de jouer contre une intelligence artificielle. Le jeu gère les tours des joueurs, les victoires, et garde une trace des scores. Ce projet utilise React pour l'interface utilisateur et intègre une logique d'IA pour jouer contre un utilisateur.
Il est mon **tout premier projet en React**.

## Technologies utilisées

- **React** : Framework JavaScript pour construire l'interface utilisateur.
- **JavaScript** : Langage de programmation pour la logique du jeu et de l'IA.
- **State Management** : Le jeu utilise l'état de React pour suivre l'état actuel du jeu, les scores et les tours des joueurs.
- **Vite** : Utilisation du Bundler Vite pour développer et tester ce projet

## Fonctionnalités

- **Barre de navigation** : Plûtot classique mais nécéssaire à une expérience utilisateur optimale
- **Suivi des scores** : Le jeu garde une trace du nombre de victoires de chaque joueur (X et O) ainsi que des égalités.
- **Plusieurs modes de jeux** : Le jeu inclus un mode versus Joueur mais aussi versus IA.
- **Une variante (W.I.P)** : Un mode de jeu ou l'on doit gagner avec 3 symbole disponibles ! Si vous en placer un 4ème, le premier disparait.
- **Classement Local** : Seulement contre l'IA, le nombre de victoires équivaut au nombre de round gagnés avant que l'IA gagne, puis est ensuite mis dans un classement en local

## Installation

1. Clonez ce repository sur votre machine locale.

    ```git clone https://github.com/Melvin-Jacques/morpion-react```
    ```cd morpion-react```
   
2. Installez les dépendances du projet.
   
    ```npm install```

3. Démarrez le serveur de développement.
   
    ```npm start```



## Usage
- Jouer contre l'IA : Cliquez sur une cellule vide pour jouer votre tour. L'IA jouera ensuite automatiquement après un délai de 500 ms.
- Gestion du score : Les scores sont mis à jour après chaque partie. Vous pouvez voir les scores dans l'interface.
- **NOTE** : Projet en cours de développement, il y a encore quelques bug et un manque d'animations (potentiel ajout de librairies pour les animations à l'avenir).

# Structure du projet
Le projet est structuré comme suit :

```
/src
  /assets               # Contient les images ou autres ressources statiques
  /components           # Composants React utilisés pour l'interface utilisateur
  /pages                # Composants Parents qui gèrent la logique des pages (fonctions, données etc)
  /App.jsx              # Composant principal du jeu
  /main.jsx             # Point d'entrée de l'application React
/package.json           # Dépendances et scripts du projet
/index.html             # Fichier html principal
```

## Principales fonctions de logique du jeu
- handleCellClick(index) : Gère le clic sur une cellule du tableau. Si c'est le tour de l'IA, un délai de 500 ms est ajouté avant que l'IA fasse son mouvement.
- getAiMove(grid) : Fonction qui choisit le meilleur mouvement pour l'IA.
- checkWinner(grid) : Vérifie si un joueur a gagné après chaque mouvement.

## Détails de l'IA
L'IA choisit son mouvement de manière simple, en vérifiant les cases vides et en sélectionnant l'une d'elles. La logique d'IA peut être étendue pour inclure des stratégies plus avancées.

## Contribution
Les contributions sont les bienvenues ! Pour contribuer à ce projet, veuillez suivre ces étapes :

1. Fork ce repository.
2. Créez une branche pour votre fonctionnalité (git checkout -b feature-xyz).
3. Effectuez vos modifications et committez-les (git commit -am 'Ajout de fonctionnalité XYZ').
4. Poussez vos modifications (git push origin feature-xyz).
5. Ouvrez une Pull Request.

## Licence
Ce projet est sous licence Apache. Voir le fichier LICENSE pour plus de détails.

## Auteurs
Melvin Jacques : Développeur principal

## Autres
J'ai utilisé le webpack Vite pour développer ce projet.
