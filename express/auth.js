const bcrypt = require("bcrypt")

function signup(username, password) {
    /* take user input */
    /* email alrready exits... */
    /* send verification error */
    bcrypt.hash(password, 10, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash)
    });
    /* create DB user */
    console.log(`signup. with password `)
}


const signIn = () => {
    /* take user input */
    /* form validation  */
    /* check in Db .. email/username  */
    /* check password */
    console.log("sign In")
    /* send response */
    /* send token... */
}


/* export */
/* default export */
// module.exports = signIn
// module.exports = signup
// module.exports = [1, 2, 3, 4]


/* named exports */
module.exports = {
    "name": "express",
    "signup": signup,
    "signIn": signIn,
}
