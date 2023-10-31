var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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
