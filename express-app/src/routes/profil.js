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

// Mise à jour/modification d'un user avec PATCH (API REST) - Équivalent de UPDATE en CRUD
router.patch('/profils/:id', authentification, async (req, res, next) => {
    // Création des infos qu'on update et stockage dans des clés/valeurs
    const updatedInfo = Object.keys(req.body);
    // On récupère l'Id du user qui se trouve dans l'url
    const profilId = req.params.id;
  
    try {
      const profil = await Profil.findById(profilId);
      updatedInfo.forEach(update => profil[update] = req.body[update]);
      await profil.save();
      
      if (!profil) return res.status(404).send('Profile not found !');
      res.send(profil);
    } catch(e) {
      res.status(500).send(e);
    }
  });

// Suppression d'un user avec DELETE
router.delete('/profils/:id', authentification, async (req, res, next) => {
  // On récupère l'Id du meuble qui se trouve dans l'url
  const profilId = req.params.id;
  try {
    const profil = await Profil.findByIdAndDelete(profilId);
    if (!profil) return res.status(404).send('Profile not found !');
    res.send(profil);
  } catch(e) {
    res.status(500).send(e);
  }
});
module.exports = router;  