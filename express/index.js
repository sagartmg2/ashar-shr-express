const express = require('express')
const app = express()    // return { get:()=>{} }

app.get('/api/orders', function (req, res) {

    let loggedIn = true;
    let hasAccess = false


    if (!loggedIn) {
        res.status(401).send("authenticated")
    } else {

        if (hasAccess) {
            res.send('list of orders')
        }
        else {
            res.status(403).send("Forbidden. No caccess")
        }

    }

})

app.get('/', function (req, res) {
    res.send('Hello World - again')
})

app.get("/api/products", (req, res) => {

    let products = getDatabaseProduct();
    res.send({
        data: ["apple", "orange", "kiwi", "papaya"],
        metada: { total: 3 }
    })
})

app.listen(8000, () => {
    console.log("server started...")
})