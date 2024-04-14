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
    tasks: [TaskSchema.schema],
});

UserSchema.methods.addTask = function(task) {
    const container = [...this.tasks];
    container.push(task);
    this.tasks = container;
    this.save();
}
module.exports = mongoose.model("User", UserSchema);
