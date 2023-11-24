function checkAuthentication(req, res, next) {
    let loggedIn = true;
    if (!loggedIn) {
        res.status(401).send("unauthencicated.")
    }
    console.log("here");
    next()
}

module.exports = {
    "checkAuthentication": checkAuthentication
}