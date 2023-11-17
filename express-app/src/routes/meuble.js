const express = require('express');
const meubleSchema = require('../models/meuble');

//Création des routes
const router = new express.Router();

// Création des meubles avec POST (API REST) - Équivalent de CREATE en CRUD
router.post('/meubles', async (req, res, next) => {
    // Création d'un meuble en utilisant le modèle Meuble et les données envoyées par le client
    const meuble = new meubleSchema(req.body);

    try {
    // Sauvegarde du nouveau meuble, envoi status 201 si OK ou 400 si echec
    const saveMeuble = await meuble.save();
    res.status(201).send(saveMeuble);
    } catch(e) {
    res.status(400).send(e);
    }     
});

router.get('/meubles/all', async function(req, res){
    try{
        const meubles = await meubleSchema.find({})
        console.log(meubles);
        res.status(200).send(meubles); 

    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/meubles/:id', async function(req, res){
    const meubleId = req.params.id;
    try{
        const meuble = await meubleSchema.findById(meubleId);
        if(!meuble) res.status(404).send("Meuble introuvable");
        res.status(200).send(meuble); 
        

    } catch(err){
        res.status(500).send(err);
    }
});
router.put('/meubles/:id', async function(req, res){
    const updatedInfo = Object.keys(req.body);
    const meubleId = req.params.id;
    
    try {
        const meuble = await meubleSchema.findById(meubleId);
        updatedInfo.forEach(update => meuble[update]=req.body[update]);
        await meuble.save();

        if (!meuble) return res.status(404).send("Meuble introuvable");
        res.send(meuble);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.delete('/meubles/:id', async function(req, res) {
    const meubleId = req.params.id;
    
    try {
        const meuble = await meubleSchema.findByIdAndDelete(meubleId);

        if (!meuble) return res.status(404).send("Meuble introuvable");
        res.send(meuble);
    }catch (err) {
        res.status(500).send(err);
    }
});



module.exports = router;