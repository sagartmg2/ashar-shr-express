const express = require("express")
const mongoose = require('mongoose');
var cors = require('cors');
const Todo = require("./todosModal")

mongoose.connect('mongodb://127.0.0.1:27017/todos')
    .then(() => console.log('Connected!'));

const app = express()
app.use(cors())
app.use(express.json()) // now we can access request data in req.body

// const todos = require("./todos");
const { getTodos, createTodos,updateTodos } = require("./todos");

// const products = require("./products")  //{crateProdut:() =>{} , fetchP : () =>}
const { createProduct, updateProduct, deleteProduct, fetchProducts } = require("./products")
/* object destructuring.. */




const checkAuthentication = (req, res, next) => {
    console.log("authenticating...")
    next()
}


app.get("/api/todos", getTodos)
app.post("/api/todos", createTodos)
app.put("/api/todos/:id", updateTodos)
app.get("/api/products", fetchProducts)
app.post("/api/products", createProduct)
app.put("/api/products", updateProduct)
app.delete("/api/products", deleteProduct)



app.use((req, res, next) => {
    res.status(404).send({ msg: "resource not found" })
})

app.use((err, req, res, next) => {
    console.log(err.name)
    let statusCode = 500
    if (err.name === "ValidationError") {
        statusCode = 400
    }
    res.status(statusCode).send({ msg: "server error", err: err.message })
})


/* now you can access via localhost:8000/api/todos */
app.listen(8000, () => {
    console.log("server started.")
})



/* 
core module
    eg: fs
        path
        http

third party 
    express
    bcrypt
    mongoose
 */


/* 
    CRUD  create read update delete

    http request methods
    get - read
    post - create
*/