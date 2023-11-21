const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const authRoutes = require("./routes/auth")
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    .then(() => console.log('Connected!'));

const app = express()

app.use(cors()) // global middleware
app.use(express.json()) // runs for each and every request and we get value in req.body

app.use(authRoutes)

app.get('/api/products', (req, res) => {
    res.send(["product-1", "product-2"])
})
app.post('/api/products', (req, res) => {
    console.log("req.body", req.body)
    res.send(`${req.body.title} created.`)
})


app.get("/api/test", (req, res) => {
    res.send("Test")
})


app.listen(8000, () => {
    console.log("server started..")
})