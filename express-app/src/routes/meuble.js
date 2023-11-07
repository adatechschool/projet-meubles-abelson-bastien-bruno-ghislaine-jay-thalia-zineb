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