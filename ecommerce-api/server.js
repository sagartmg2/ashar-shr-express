const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const fileUpload = require("express-fileupload")
const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/product")
const handleServerError = require("./middleware/handleServerError")

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    .then(() => console.log('Connected!'));

const app = express()

app.use(express.json()) // runs for each and every request and we get value in req.body
app.use(fileUpload()); // sets up req.body value when using form-data
app.use(cors()) // global middleware

app.use(authRoutes)
app.use(productRoutes)

app.get("/api/test", (req, res) => {
    res.send("Test")
})

/* error handling middleware 404 500 */

app.use(handleServerError)

app.listen(8000, () => {
    console.log("server started..")
})