const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: String,
    price: Number,
});

const ProductModal = mongoose.model("Product", ProductSchema)

const fetchProducts = async (req, res, next) => {
    try {
        let products = await ProductModa.find()
        // console.log(products)
        res.send(products)

    } catch (err) {
        next(err)
        // res.status(500).send("server error")
    }
}
const createProduct = async (req, res,next) => {
    console.log(req.body)
    try {
        let product = await ProductModal.create({
            title: req.body.title,
            price: 100
        })
        res.send(product)
    } catch (err) {
        next(err)
        // res.status(500).send("server error")
    }
}

module.exports = {
    "fetchProducts": fetchProducts,
    "updateProduct": (req, res) => { res.send("updateProduct") },
    "deleteProduct": (req, res) => { res.send("deleteProduct") },
    createProduct,
}