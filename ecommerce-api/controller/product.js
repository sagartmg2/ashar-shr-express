const path = require("path")

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
    // console.log("productdata", req.body);
    // console.log("productdata-files", req.files.image);

    let rootPath = path.resolve()
    let uploadPath = path.join(rootPath, "uploads")


    let imagePath = null
    try {

        let uploadres = await req.files.image.mv(path.join(uploadPath, req.files.image.name))

        console.log(uploadres);

        /* code here.. */
        imagePath = path.join("/uploads", req.files.image.name)
        console.log(imagePath);


    }
    catch (err) {
    }

    try {
        let product = await ProductModel.create(
            {
                ...req.body,
                createdBy: req.user._id,
                image: imagePath

            })

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