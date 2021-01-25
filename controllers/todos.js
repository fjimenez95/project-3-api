const Todo = require('../models/todo');
const User = require('../models/user');

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update,
}

async function index(req, res) {
    const todoList = await Todo.find( { user: req.user._id } );
    // console.log('WHAT IT FOUND', TodoList);
    res.json(todoList);
}

function show(req, res) {

}

function newTodo (req, res) {

}

async function create (req, res) {
    console.log('REQ', req.body);
    Todo.create( { text: req.body.text, user: req.body.user } );
    // GETS UPDATED TODOS
    const updatedTodoList = await Todo.find( { user: req.user._id } );
    console.log(updatedTodoList);
    res.json(updatedTodoList);
}

async function deleteTodo (req, res) {
    console.log(req.params.id);
    const updatedDocument = await Todo.findOneAndDelete( { _id: req.params.id } )
    // GETS UPDATED TODOS
    const updatedTodoList = await Todo.find( { user: req.user._id } );
    console.log(updatedTodoList);
    res.json(updatedTodoList);
}

function show (req, res) {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo);
    })
}

async function edit (req, res) {
    const id = req.params.id;
    const updatedDocument = await Todo.findOneAndUpdate(
        { _id: req.params.id },
        { text: req.body.text },
        { returnNewDocument: true },
    )
    // GETS UPDATED TODOS
    const updatedTodoList = await Todo.find( { user: req.user._id } );
    res.json(updatedTodoList);
} 

function update (req, res) {

}