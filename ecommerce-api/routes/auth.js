const express = require("express")
const router = express.Router();
// const auth = require("../controller/auth")  // auth = { login,sigup }

/* object destructuring */
const { login, signup } = require("../controller/auth")

/* login and singup */
/* export login and singup routes */

router.post('/api/signup', signup)

router.post('/api/login', login)

module.exports = router;


