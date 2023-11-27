const ProductModel = require("../model/Product")

let getProducts = async (req, res) => {
    try {
        let products = await ProductModel.find()
        res.send(products)
    }
    catch (err) {
        next(err)
    }
}

let postProducts = async (req, res, next) => {
    try {
        let product = await ProductModel.create({...req.body,createdBy: req.user._id})

        /* ... spread operator */

        // {
        //     title: req.body.title,
        //     price: req.body.price,
        //     description: req.body.description,
        //     createdBy: req.user._id,
        // }

        res.send(product)
    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    "fetch": getProducts,
    "store": postProducts,
}