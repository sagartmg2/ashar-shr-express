const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()) // global middleware
app.use(express.json()) // runs for each and every request

app.get('/api/products', (req, res) => {
    res.send(["product-1", "product-2"])
})

app.post('/api/products', (req, res) => {
    console.log("req.body",req.body)
    res.send(`${req.body.title} created.`)
})

app.listen(8000, () => {
    console.log("server started..")
})