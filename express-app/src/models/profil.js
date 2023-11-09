const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcryptjs');

const profilSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
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
};   

profilSchema.statics.findProfil =  async (username, password) => {
    const profil = await Profil.findOne({ username });
    if (!profil) throw new Error('Erreur, connection impossible !');
    
    const isPasswordValid = await bcrypt.compare(password, profil.password);

    if (!isPasswordValid) throw new Error('Erreur, connection impossible !');

    return profil;
  };
  
profilSchema.pre('save', async function () {
    if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 8);
});

const Profil = mongoose.model('Profil', profilSchema);

module.exports = Profil;
//module.exports = mongoose.model('Profil', profilSchema);