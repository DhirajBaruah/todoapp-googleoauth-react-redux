require("../models/todos");
const mongoose = require("mongoose");
const Todo = mongoose.model("todos");

exports.getAllTodos = (req, res) => {

    Todo.find({userId:req.user.id}, (error, allTodos) => {
        if(error){
            return res.status(500).json({
                error : "oops! something went wrong."
            })
        }
        if(!allTodos){
            return res.status(404).json({
                error : "request not found!!"
            })
        }
        
        return res.status(200).json(
            allTodos
        )
    })
};

exports.createTodo = (req, res) => {
    const todo = new Todo({
        task: req.body.task,
        userId: req.user.id
    });
    todo.save( (error, todo) => {
        if(error){
            return res.status(500).json({
                error : "Ooppss!! Something went wrong!!"
            })
        }
        return res.status(200).json({
            todo : todo
        })
    })
};

exports.editTodo = (req, res) => {
    let todo={
    task :req.body.task,
    }
    Todo.findByIdAndUpdate(
        req.params.todoId,
        {
            $set: todo
        },
        {new:true},
        (err, todo)=>{
            if (err ){
                return res.status(400).json({
                    error : "oops!something went wrong"
                })
            }
            res.json(todo);
        }
    )
};

exports.deleteTodo = (req, res) => {
    Todo.findOneAndRemove(
        { _id: req.params.todoId},
        (error, todo) => {
        if(error){
            return res.status(500).json({
                error : "Oppss!! Something went wrong!!"
            })
        }
        if(!todo){
            return res.status(404).json({
                error : "Todo not found"
            })
        }
        return res.status(200).json({
            message : `${todo.task} is deleted successfully`
        })
    })
};