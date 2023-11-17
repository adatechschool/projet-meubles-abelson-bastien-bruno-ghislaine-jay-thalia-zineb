const express = require('express');
const profil = require('../models/profil');
const authentification = require('../middlewares/authentification');
const Profil = require('../models/profil');
const router = new express.Router();

// Création d'un profil avec POST
router.post('/profils', async (req, res, next) => {
    const profil = new Profil(req.body);

    try {
        const authToken = await profil.generateAuthTokenAndSaveUser();
        res.status(201).send({ profil, authToken });
    } catch(e) {
        res.status(400).send(e);
    }   
});

// Création de la route pour se connecter à son compte
router.post('/profils/login', async (req, res) => {
    try {
        const profil = await Profil.findProfil(req.body.username, req.body.password);
        const authToken = await profil.generateAuthTokenAndSaveUser();
        res.send({ profil, authToken });
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
});

// Création de la route pour se déconnecter
router.post('/profils/logout', authentification, async (req, res) => {
    try {
        req.profil.authTokens = req.profil.authTokens.filter((authToken) => {
            return authToken.authToken !== req.authToken;
        });

        await req.profil.save();
        res.send();
    } catch(err) {
        res.status(500).send();
    }
});

// Création de la route pour se déconnecter et déconnecter tous les appareils et/ou utilisateurs du compte (suppression de tous les tokens)
router.post('/profils/logout/all', authentification, async (req, res) => {
    try {
      req.profil.authTokens = [];
      await req.profil.save();
      res.send();
    } catch(err) {
      res.status(500).send();
    }
  });

// Récupération de tous les profils avec GET
router.get('/profils', authentification, async (req, res, next) => {
  try {
    const profils = await Profil.find({});
    res.send(profils);
  } catch(e) {
    res.status(500).send(e);
  }
});

// Récupération du profil actuellement connecté (qui possède le token dans tous les users, soit le token bearer) avec GET
router.get('/profils/me', authentification, async (req, res, next) => {
    res.send(req.profil);
  });

// Mise à jour/modification du user connecté avec PATCH (API REST) - Équivalent de UPDATE en CRUD
router.patch('/profils/me', authentification, async (req, res, next) => {
    // Création des infos qu'on update et stockage dans des clés/valeurs
    const updatedInfo = Object.keys(req.body);
  
    try {
      updatedInfo.forEach(update => req.profil[update] = req.body[update]);
      await req.profil.save();
      res.send(req.profil);
    } catch(e) {
      res.status(500).send(e);
    }
  });

// Suppression du compte du user connecté avec DELETE
router.delete('/profils/me', authentification, async (req, res, next) => {
    // on a accès à req.profil car il a été crée dans l'authentification 
  try {
    await Profil.findOneAndDelete({ _id: req.profil._id });
    res.send(req.profil);
  } catch(e) {
    console.log(e),
    res.status(500).send(e);
  }
});

module.exports = router;  