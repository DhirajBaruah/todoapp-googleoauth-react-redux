const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const todosSchema = new mongoose.Schema({
    userId: ObjectId,
    task: String,
    createdOn: Date,
});

mongoose.model("todos", todosSchema);
