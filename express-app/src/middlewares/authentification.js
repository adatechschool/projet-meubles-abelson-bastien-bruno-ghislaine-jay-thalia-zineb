// request > verify > route

const jwt = require("jsonwebtoken");
const Profil = require("../models/profil");

const authentification = async (req, res, next) => {
  try {
    const authToken = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = jwt.verify(authToken, "foo");
    const profil = await Profil.findOne({
      _id: decodedToken._id,
      "authTokens.authToken": authToken
    });

    if (!profil) throw new Error();

    req.authToken = authToken;

    req.profil = profil;

    next();
  } catch (e) {
    res.status(401).send("Merci de vous authentifier !");
  }
};

module.exports = authentification;
