const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,  // mongoose schema validation  // database validation   // there are (client , server, database) validation
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    description: {
        type: String,
        maxLength: 255
    },
    createdBy: {
        required: true,
        type: ObjectId,
        ref: "User"
    },
    image: {
        type: String  // we save image in some directory and only save images path
    }
}, {
    timestamps: true
});

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel