const express = require('express');
const profilSchema = require('../models/profil');
const router = new express.Router();

router.post('/login', async function(req, res){
    try { const {username,password} = req.body;
        console.log(username, password);
        const profil = await profilSchema.findProfil(req.body.username, req.body.password);
        res.send(profil)
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }

});
module.exports = router;