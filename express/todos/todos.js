const Todo = require("./todosModal")

const createTodos = (req, res) => {
    Todo.create({
        title: "html",
        status: true
    })
    res.send("todos created..")
}
const updateTodos = (req, res) => {
    res.send("todos update..")
}

// module.exports = createTodos

module.exports = {
    "createTodos": createTodos,
    updateTodos
}