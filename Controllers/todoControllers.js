const Todo = require("../Model/todo");

const createTodo = async (req, res) => {
  const { task } = req.body;
  try {
    const todo = await Todo.create({
      task: task,
      
    });
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedTodo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTodo, getTodos, deleteTodo, updateTodo };
