// request > verify > route

const authentification = async(req, res, next) => {
    try {

        next();
    } catch(e) {
        res.status(401).send('Merci de vous authentifier');
    }
}

module.exports = authentification;