const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = require("./task.js");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tasks: {
        notStarted: [TaskSchema.schema],
        inProcess: [TaskSchema.schema],
        completed: [TaskSchema.schema],
    },
});
module.exports = mongoose.model("User", UserSchema);
