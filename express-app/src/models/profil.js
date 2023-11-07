const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')


const profilSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true
    },
    password :{
        type: String,
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

profilSchema.statics.findProfil =  async function (username, password) {
    const profil = await Profil.findOne({ username });
    if (!profil) throw new Error("pas de user");
    return profil;
  }
  


const Profil = mongoose.model("Profil",profilSchema);
module.exports = Profil;
//module.exports = mongoose.model('Profil', profilSchema);