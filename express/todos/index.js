const express = require("express")
const mongoose = require('mongoose');
const Todo = require("./todosModal")

mongoose.connect('mongodb://127.0.0.1:27017/todos')
    .then(() => console.log('Connected!'));

const app = express()
const todos = require("./todos");

// const products = require("./products")  //{crateProdut:() =>{} , fetchP : () =>}
const { createProduct, updateProduct, deleteProduct, fetchProducts } = require("./products")
/* object destructuring.. */


async function getTodos(req, res) {
    let todos = await Todo.find()
    res.send(todos)

    // res.send([
    //     {title:"html",status:true},
    //     {name:"css",status:"compolted"},
    //     {name:"js",status:"compolted"}
    // ])
}

const checkAuthentication = (req, res, next) => {
    console.log("authenticating...")
    next()
}

app.use(express.json())

app.get("/api/todos", getTodos)
app.post("/api/todos", todos.createTodos)

app.get("/api/products", fetchProducts)
app.post("/api/products", createProduct)
app.put("/api/products", updateProduct)
app.delete("/api/products", deleteProduct)



app.use((req, res, next) => {
    res.status(404).send({ msg: "resource not found" })
})

app.use((err, req, res, next) => {
  res.status(500).send({msg:"server error",err:err.message})
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