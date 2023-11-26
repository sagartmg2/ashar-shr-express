const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const authRoutes = require("./routes/auth")
const productRoutes = require("./routes/product")

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    .then(() => console.log('Connected!'));

const app = express()

app.use(express.json()) // runs for each and every request and we get value in req.body
app.use(cors()) // global middleware


app.use(authRoutes)
app.use(productRoutes)

app.get("/api/test", (req, res) => {
    res.send("Test")
})

/* error handling middleware 404 500 */

app.use((err, req, res, next) => {
    res.send("findal server error")
})

app.listen(8000, () => {
    console.log("server started..")
})