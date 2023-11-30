const path = require("path")

const ProductModel = require("../model/Product")
let getProducts = async (req, res) => {
    console.log("req.query", req.query);

    let searchTerm = req.query.searchTerm || ""
    let page = parseInt(req.query.page) || 1;
    let perPage = parseInt(req.query.perPage) || 2;
    let priceFrom = parseFloat(req.query.priceFrom) || 0
    let priceTo = parseFloat(req.query.priceTo) || 99999999999

    let sortBy = { createdAt: -1 } // latest products

    let reqSortBy = req.query.sortBy

    if (reqSortBy == "titleAsc") {
        sortBy = { title: 1 }
    } else if (reqSortBy == "titleDesc") {
        sortBy = { title: -1 }
    } else if (reqSortBy == "priceAsc") {
        sortBy = { price: 1 }
    } else if (reqSortBy == "priceDesc") {
        sortBy = { price: -1 }
    } else if (reqSortBy == "recent") {
        sortBy = { createdAt: -1 }
    } else if (reqSortBy == "oldest") {
        sortBy = { createdAt: 1 }
    }

    /* if else ... */
    // let filterObj = { title: RegExp(searchTerm, "i") }
    /* mongodb query opetaors $gte, $lte , $and   */
    // let filterObj = { price:1000 }
    // let filterObj = { price: { $gte: 100 } }
    // let filterObj = { price: { $lte: 500 } }

    let filterObj = {
        $and: [
            { title: RegExp(searchTerm, "i") },
            { price: { $gte: priceFrom } },
            { price: { $lte: priceTo } },
        ]
    }

    try {
        let products = await ProductModel.find(filterObj)
            .populate("createdBy")
            .sort(sortBy)
            .skip((page - 1) * perPage)
            .limit(perPage)

        let total = await ProductModel.find(filterObj)
            .countDocuments()

        res.send({
            page,
            perPage,
            total,
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
        if (req.files?.image) { // optional chaingin  ?.
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


const updateProducts = async (req, res, next) => {
    console.log(req.params);
    try {
        // update product
        let product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.send(product)
    } catch (err) {
        next(err)
    }
}
const deleteProduct = async (req, res, next) => {
    console.log(req.params);
    try {
        // update product
        let product = await ProductModel.findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    "fetch": getProducts,
    "store": postProducts,
    "update": updateProducts,
    "remove": deleteProduct,
}