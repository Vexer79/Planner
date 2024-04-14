const User = require("../models/user");
const Task = require("../models/task");

exports.getDayTasks = (req, res, next) => {
    User.findOne({ _id: "661bf8c71253e9033f232a25" }).then((result) => {
        res.json(result.tasks.filter((task) => task.type === "day"));
    });
};
exports.getWeekTasks = (req, res, next) => {
    User.findOne({ _id: "661bf8c71253e9033f232a25" }).then((result) => {
        res.json(result.tasks.filter((task) => task.type === "week"));
    });
};
exports.getMonthTasks = (req, res, next) => {
    User.findOne({ _id: "661bf8c71253e9033f232a25" }).then((result) => {
        res.json(result.tasks.filter((task) => task.type === "month"));
    });
};
exports.getYearTasks = (req, res, next) => {
    User.findOne({ _id: "661bf8c71253e9033f232a25" }).then((result) => {
        res.json(result.tasks.filter((task) => task.type === "year"));
    });
};

exports.saveTask = (req, res, next) => {
    User.findOne({ _id: "661bf8c71253e9033f232a25" }).then((user) => {
        user.addTask({
            content: req.body.content,
            colour: req.body.colour,
            startTime: req.body.startTime,
            completeTime: req.body.completeTime,
            notifications: req.body.notifications,
            container: req.body.container,
            index: Number(req.body.index),
            type: req.body.type,
        });
        res.redirect("/");
    });
};

exports.changeOrder = (req, res, next) => {};
