const express = require("express")
const app = express()



let loggedIn = true
let hasCorrectRole = true

/* middlware
    - a function which has access to request and response
     - it also has access to next upcomming middleware
*/

const checkAuthentication = (req, res, next) => {
    console.log("checking .. authentication...")
    if (!loggedIn) {
        return res.status(401).send("unauthenticated.")
    }
    if (!hasCorrectRole) {
        return res.status(403).send("frobidden.")
    }

    next()
}

// app.use( checkAuthentication )  // global middleware // gets applied in each and every routes

app.get("/api/orders", checkAuthentication, (request, res) => {   // route level middleware
    console.log("sending orders....")
    res.send("list of orders")
})

const getWishList = (request, res) => {
    res.send("list of wishlists")
}

app.get("/api/wishlist", checkAuthentication, getWishList)



app.get("/api/todos", (request, res) => {
    res.send(["git", "html", "css"])
})



app.use((req, res) => {
    res.status(404).send({
        msg: "Resource not found"
    })
})


app.listen(8000, () => {
    console.log("server started.")
})
