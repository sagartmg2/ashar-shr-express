const jwt = require("jsonwebtoken")

function checkAuthentication(req, res, next) {
    try {
        loggedIn = false
        let token = req.headers.authorization?.replace("Bearer ", "")
        if (token) {
            try {
                var decoded = jwt.verify(token, 'shhhhh');
                req.user = decoded; //{ _id: ,name,email}
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
        next()
    }
    catch (err) {
         next(err)
    }
}

module.exports = {
    checkAuthentication
}