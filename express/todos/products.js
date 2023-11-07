const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: String,
    price: Number,
});

const ProductModal = mongoose.model("Product", ProductSchema)

const fetchProducts = async (req, res) => {
    let products = await ProductModal.find()
    res.send(products)
}
const createProduct = (req, res) => {
    ProductModal.create({
        title: "mobile",
        price:100
    })
    res.send("created")
}

module.exports = {
    "fetchProducts": fetchProducts,
    "updateProduct": (req, res) => { res.send("updateProduct") },
    "deleteProduct": (req, res) => { res.send("deleteProduct") },
    createProduct,
}