const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
// pour lire les variables du fichier .env
const meubleRoutes = require('./src/routes/meuble.js');
const profilRoutes = require('./src/routes/profil.js');
const { connectDb } = require('./src/services/mongoose.js');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(meubleRoutes);
app.use(profilRoutes);

app.listen(port,()=>{
    console.log(`le serveur est lancé sur http://localhost:${port}`);
});

connectDb().catch(err => console.log(err));
