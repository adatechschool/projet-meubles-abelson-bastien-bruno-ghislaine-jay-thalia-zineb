const mongoose = require('mongoose');



const profilSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    }
});

profilSchema.statics.findProfil =  async function (username, password) {
    const profil = await Profil.findOne({ username });
    if (!profil) throw new Error("pas de user");
    return profil;
  }
  
    

const Profil = mongoose.model("Profil",profilSchema);
module.exports = Profil;
//module.exports = mongoose.model('Profil', profilSchema);