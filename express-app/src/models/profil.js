const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { MongoCompatibilityError } = require('mongodb');


const profilSchema = new mongoose.Schema({
    username :{
        type: String,
        unique: true,
        required: true
    },
    password :{
        type: String,
        unique: true,
        required: true
    },
    authTokens :[{
        authToken:{
            type: String,
            required: true
        }
    }]
});

profilSchema.methods.generateAuthTokenAndSaveUser = async function() {
    const authToken = jwt.sign({ _id: this._id.toString() }, 'foo');
    this.authTokens.push({ authToken });
    await this.save();
    return authToken;
}    

profilSchema.statics.findProfil =  async (username, password) => {
    const profil = await Profil.findOne({ username });
    if (!profil) {
        throw new Error("Pas de profil existant !");}
    // const isPasswordValid = await profil.comparePassword(password);
    if (profil.password !== password) {
        throw new Error('Erreur de mot de passe !');}
    return profil;
  }
  


const Profil = mongoose.model("Profil",profilSchema);
module.exports = Profil;
//module.exports = mongoose.model('Profil', profilSchema);