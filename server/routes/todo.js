const { Router } = require("express");
const router = Router();

const { 
  getAllTodos, 
  createTodo, 
  editTodo, 
  deleteTodo 
} = require('../controllers/todo');
const {authenticate} = require('../services/auth');

//params

/**
 * @ route   GET /todo
 * @ desc    Displays a table with a list of todos
 * @ access  Private
 */
router.get("/",authenticate, getAllTodos);

/**
 * @ route   POST /todo
 * @ desc    a form to create a single todo
 * @ access  Private
 */
router.post("/", authenticate, createTodo);

/**
 * @ route   PUT /todo/{id}
 * @ desc    a form through which a todo with a specified id parameter can be edited and updated
 * @ access  Private
 */
router.put("/:todoId", authenticate, editTodo);

/**
 * @ route   DELETE /todo/{id}
 * @ desc    Displays a page through which a todo with a specified id can be deleted
 * @ access  Private
 */
router.delete("/:todoId", authenticate, deleteTodo);



module.exports = router;