const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    colour: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: false,
    },
    completeTime: {
        type: String,
        required: false,
    },
    notifications: {
        type: Boolean,
        required: true,
    },
    container: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Task", TaskSchema);