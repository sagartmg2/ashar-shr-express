const express = require("express")
const router = express.Router()
const { checkAuthentication } = require("../middleware/auth")
/* const product = {
    "getProducts": () =>{},
    "postProducts": () =>{ },
} */

// const product = require("../controller/product") 

const { fetch, store, update, remove } = require("../controller/product")

router.get('/api/products', fetch)

router.post('/api/products', checkAuthentication, store);
router.put('/api/products/:id', checkAuthentication, update);
router.delete('/api/products/:id', checkAuthentication, remove);

router.post('/api/orders', checkAuthentication, (req, res) => {
    res.send("orders created.")
})

module.exports = router;