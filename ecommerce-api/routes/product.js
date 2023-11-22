const express = require("express")
const router = express.Router()

/* const product = {
    "getProducts": () =>{},
    "postProducts": () =>{ },
} */

// const product = require("../controller/product") 

const { fetch, store } = require("../controller/product")

router.get('/api/products', fetch)
router.post('/api/products', store)

module.exports = router;