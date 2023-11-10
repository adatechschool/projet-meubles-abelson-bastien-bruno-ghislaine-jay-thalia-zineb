# Vintage Gallery - site e-commerce de meubles de seconde main

Ce projet a pour objectif de créer un site e-commerce de meubles de seconde main suite à une demande client.
Certaines contraintes de création sont imposées :
- utilisation de Bootstrap pour le CSS,
- séparation en deux équipes : une qui commence par le front-end et l’autre par le back-end, puis les deux équipes inversent à mi-parcours,

## Groupe de 7 personnes - 7 jours

- **Equipe BACK semaine 1 puis FRONT semaine 2:** Bruno SCHMITT-CORNET - Gilbert MOUGAMADOU - Bastien VINTRAS
- **Equipe FRONT semaine 1 puis BACK semaine 2:** Zineb LAANAYA - Abelson HERILALA MAMITIANA - Thalia WOODS - Ghislaine AYBRAM

## Aperçu du projet

*La page d'accueil du site e-commerce*
![App Screenshot](/react-app/src/assets/images/page_accueil.jpg)

*Une page de détails d'un produit*
![App Screenshot](/react-app/src/assets/images/page_details_produit.jpg)

*La page de gestion des produits (poge administration)*
![App Screenshot](/react-app/src/assets/images/page_admin.jpg)

*Formulaire d'inscription utilisateurs*
![App Screenshot](/react-app/src/assets/images/formulaire_creation_compte.jpg)

## Tech Stack

- **Langages:** Javascript, CSS
- **Framework / Library:** React, Bootstrap
- **Serveur:** Node.js, Express
- **Database:** MongoDB (avec Mongoose)
- **Application de tests API:** Postman

## Fonctionnalités ajoutées

✅ utilisation d'un framework (React),
✅ utilisation d'une bibliothèque CSS (Bootstrap),
- ✅ conception d'une base de données non relationnelle (MongoDB),
- ✅ utilisation d'un framework pour la gestion de la base de données (Mongoose),
- ✅ page principale qui regroupe les meubles en vente,
- ✅ encarts produits cliquables regroupant une photo, le type de meuble, le prix et un bouton pour l’acheter,
- ✅ page détails produits regroupant une série de photos du meuble et les informations (type, prix, dimensions, couleurs, matières et un bouton d'achat),
- ✅ page de connexion (non fonctionnelle),
- ✅ page d'inscription utilisateurs (non fonctionnelle) avec email / mot de passe / types de meubles recherchés,
- ✅ sécurisation des mots de passe (hashage),
- ✅ page de gestion des produits présentant la liste des meubles,
- ✅ page panier (non fonctionnelle),

## Reste à implémenter

- [ ] relier la page de connexion FRONT avec l'authentification côté BACK,
- [ ] relier la page d'inscription utilisateurs avec le BACK (base de données, hashage mot de passe)
- [ ] fonctionnalité permettant de modifier les informations des produits à l'aide d'un bouton / de supprimer les produits (page de gestion des produits),
- [ ] rendre la page panier fonctionnelle,
- [ ] création d'une page qui permettent aux utilisateurs connectés de proposer des meubles à la vente,
- [ ] fonctionnalité permettant de valider les meubles proposés par les utilisateurs / ajout d'un statut pour les meubles (page de gestion de produits),
- [ ] affichage de la page principale qui s’adapte en fonction des profils utilisateurs (types de meubles cochés dans la page d'inscription en premier sur la page),
- [ ] mise en place d'un calendrier qui permette de visualiser tous les évènements créés par les personnes suivies par son compte,
      
## Lancement du projet

