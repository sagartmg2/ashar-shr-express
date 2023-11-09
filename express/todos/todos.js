const Todo = require("./todosModal")

async function getTodos(req, res, next) {
    try {
        let todos = await Todo.find()
        res.send(todos)
    }
    catch (err) {
        return next(err)
        res.status(500).send({ "msg": "server error" })
    }
}

const createTodos = async (req, res, next) => {
    try {

        // first add this in index.js
        //  app.use(express.json()) // now we can access request data in req.body

        console.log(req.body)

        // var todo = new Todo({
        //     title: req.body.title,
        //     status: req.body.status
        // })

        // let response = await todo.save()
        // res.send(response)

        let todo = await Todo.create({
            title: req.body.title,
            status: req.body.status
        })
        res.send(todo)
    }
    catch (err) {
        return next(err)  // our error handling middleware in index.js will handle this
        res.status(500).send({ "msg": "server error" })
    }
}
const updateTodos = async (req, res) => {
    console.log(req.query)
    console.log(req.params)
    // res.send("todos update..")
    let updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        status: req.body.status,
    }, { new: true })
    res.send(updatedTodo)
}

// module.exports = createTodos

module.exports = {
    "getTodos": getTodos,
    "createTodos": createTodos,
    updateTodos
}