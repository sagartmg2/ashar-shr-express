const jwt = require("jsonwebtoken")

function checkAuthentication(req, res, next) {
    try {
        console.loggg(req.headers.authorization)
        loggedIn = false
        let token = req.headers.authorization?.replace("Bearer ", "")
        if (token) {
            try {
                var decoded = jwt.verify(token, 'shhhhh');
                console.log(decoded);
                req.user = decoded;
                loggedIn = true
            }
            catch (err) {
                // console.log(err)
                console.log("json webtoken error");
            }
        }

        if (!loggedIn) {
            return res.status(401).send("unauthencicated.")
        }
        console.log("here");
        next()
    }
    catch (err) {
         next(err)
    }
}

module.exports = {
    checkAuthentication
}