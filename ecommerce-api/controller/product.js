const path = require("path")

const ProductModel = require("../model/Product")
let getProducts = async (req, res) => {
    console.log(req.query);

    let searchTerm = req.query.searchTerm || ""
    let page = req.query.page || 1;
    let perPage = req.query.perPage || 2;

    let sortBy = { createdAt: -1 }

    /* if else ... */

    try {
        let products = await ProductModel.find({ title: RegExp(searchTerm, "i") })
            .populate("createdBy")
            .sort(sortBy)
            .skip((page - 1) * perPage)
            .limit(perPage)

        res.send({
            page,
            perPage,
            total: "total",
            data: products
        })
    }
    catch (err) {
        next(err)
    }
}

let postProducts = async (req, res, next) => {
    // console.log("productdata", req.body);
    // console.log("productdata-files", req.files.image);

    let imagePath = null

    try {
        if (req.files?.image) {
            let rootPath = path.resolve()
            let uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

            let tempPath = path.join("/uploads", `${uniqueSuffix}-${req.files.image.name}`)
            console.log({ tempPath })

            let destination = path.join(rootPath, tempPath)
            console.log({ destination });

            await req.files.image.mv(destination)

            imagePath = tempPath.replaceAll("\\", "/")
        }
    }
    catch (err) {
        console.log(err);
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