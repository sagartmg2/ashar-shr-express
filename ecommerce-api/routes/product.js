const express = require("express")
const router = express.Router()
const { checkAuthentication } = require("../middleware/auth")
/* const product = {
    "getProducts": () =>{},
    "postProducts": () =>{ },
} */

// const product = require("../controller/product") 

const { fetch, store } = require("../controller/product")

router.get('/api/products', fetch)

router.post('/api/products', checkAuthentication, store);

router.post('/api/orders', checkAuthentication, (req, res) => {
    res.send("orders created.")
})

module.exports = router;