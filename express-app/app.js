var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// pour lire les variables du fichier .env
require('dotenv').config();

const mongoose = require('mongoose');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://plateforme-meubles:73ttoMd4Zna135WV@cluster0.azgvepj.mongodb.net/";

async function getMeublesList() {
    const client = new MongoClient(uri);
    try {
        const database = client.db('meubles');
        const meublesCollection = database.collection('meubles');
        const meubles = await meublesCollection.find({}, {projection: { _id: 0 }}).toArray();
        console.log(meubles);
        return meubles;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

app.get('/api/meubles', async function(req, res, next) {
    const meubles = await getMeublesList();
    res.json(meubles);
});

async function getMeuble(id) {
    const client = new MongoClient(uri);
    try {
        const database = client.db('meubles');
        const meublesCollection = database.collection('meubles');
        const query = { id: Number(id) };
        const meuble = await meublesCollection.findOne(query, {projection: { _id: 0 }});
        console.log(meuble);
        return meuble;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

app.get("/api/meuble", async (req, res) => {
    try {
        console.log(req.query);
        if ("id" in req.query) {
            const id = req.query.id;
            const selected = await getMeuble(id);
            res.json(selected);
        } else {
            res.status(200).send('Erreur: Vous devez donner un id en tant que paramètre GET.');
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } 
});

module.exports = app;



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  // création du modèle Meuble (qui va créer automatiquement la collections "meubles" dans la base de données lorsqu'on va créer les différents meubles juste après)
  const Meuble = mongoose.model('Meuble', {
    id: Number,
    name: String,
    type: String,
    price: Number,
    materials: Array,
    colors: Array,
    size: String
  });

  // création des différents meubles
  const firstMeuble = new Meuble({
    id: 7,
    name: "Etagère Kallax",
    type: "Etagère",
    price: 74,
    materials: ["panneau de particules", "feuille de mélamine"],
    colors: ["blanc"],
    size: "77x147"
  });

  const secondMeuble = new Meuble({
    id: 8,
    name: "Banc TV Besta",
    type: "Banc TV",
    price: 182,
    materials: ["contreplaqué", "panneau de particules"],
    colors: ["blanc brillant","chêne blanchi"],
    size: "120x42x39"
  });

  const thirdMeuble = new Meuble({
    id: 9,
    name: "Fauteil Pello",
    type: "Fauteil",
    price: 69,
    materials: ["Placage bois lamellé-collé, placage bouleau, vernis acrylique incolore", "tissu", "acier"],
    colors: ["gris", "beige","noir"],
    size: "96x85x50"
  });

  console.log(firstMeuble, secondMeuble, thirdMeuble);
  await firstMeuble.save();
  await secondMeuble.save();
  await thirdMeuble.save();

    try {
        const updateBureau = await collection.updateOne({ name: "Bureau gamer Sköptuflun" }, {
        $set: { images: ["", "blanc"] }
        });
        console.log(await updateBureau);
    } catch(e) {throw e; }

}