const Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update,
}

function index(req, res) {
    Todo.find((err, todos) => {
        if(err) {
            console.log(err);
        } else {
            res.json(todos);
            console.log(todos);
        }
    })
}

function show(req, res) {

}

function newTodo (req, res) {

}

function create (req, res) {
    const todo = new Todo(req.body);
    todo.save().then((todo) => {
        res.json(todo);
    }).catch(err => {
        res.status(500).send(err.message);
    })
}

function deleteTodo (req, res) {

}

function edit (req, res) {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo);
    })
} 

function update (req, res) {

}