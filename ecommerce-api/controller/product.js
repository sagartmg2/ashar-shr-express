const ProductModal = require("../model/Product")

let getProducts = (req, res) => {
    res.send("list of products")
}

let postProducts = async (req, res) => {
    /* insert in DB */
    try {
        await ProductModal.create({
            title: req.body.title,
            price: req.body.price,
        })
        console.log("req.body", req.body)
        res.send(`${req.body.title} created.`)
    }
    catch (err) {

        if (err.name == "ValidationError") {
            return res.status(400).send({
                error: err.message
            })
        }
        res.status(400).send({
            error: err.message
        })
    }
}

module.exports = {
    "fetch": getProducts,
    "store": postProducts,
}