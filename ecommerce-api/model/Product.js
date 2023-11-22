const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,  // mongoose schema validation  // database validation   // there are (client , server, database) validation
    },
    price: {
        type: Number,
        default: 0
    }
});

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel