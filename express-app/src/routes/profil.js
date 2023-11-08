const express = require('express');
const profilSchema = require('../models/profil');
const authentification = require('../middlewares/authentification');
const router = new express.Router();

router.post('/login', async function(req, res){
    try { const {username,password} = req.body;
        const profil = await profilSchema.findProfil(req.body.username, req.body.password);
        const authToken = await profil.generateAuthTokenAndSaveUser();
        res.send({ profil, authToken });
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }

});

module.exports = router;