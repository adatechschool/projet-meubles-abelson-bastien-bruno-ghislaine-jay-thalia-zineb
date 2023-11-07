const express = require('express');
const meubleSchema = require('../models/meuble');

const router = new express.Router();


router.get('/meubles/all',async function(req, res){
    try{
        const meubles = await meubleSchema.find({})
        console.log(meubles);
        res.status(200).send(meubles); 

    } catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/meubles/:id',async function(req, res){
    const meubleId = req.params.id;
    try{
        const meuble = await meubleSchema.findById(meubleId);
        if(!meuble) res.status(404).send("Meuble introuvable");
        res.status(200).send(meuble); 
        

    } catch(err){
        res.status(500).send(err);
    }
});
module.exports = router;