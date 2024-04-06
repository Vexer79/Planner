const Task = require("../models/task");

exports.getDayTasks = (req, res, next) => {
    Task.fetchAll().then((result)=>{
        res.json(result);
    })
};
exports.getWeekTasks = (req, res, next) => {
    res.json({ notStarted: { 1: "week", 2: "hi" }, inProcess: {}, completed: {} });
};
exports.getMonthTasks = (req, res, next) => {
    res.json({ notStarted: { 1: "month", 2: "hi" }, inProcess: {}, completed: {} });
};
exports.getYearTasks = (req, res, next) => {
    res.json({ notStarted: { 1: "year", 2: "hi" }, inProcess: {}, completed: {} });
};

exports.saveDayTasks = (req, res, next) => {
    const content = req.body.content;
    const colour = req.body.colour;
    const startTime = req.body.startTime;
    const completeTime = req.body.completeTime;
    const notifications = req.body.notifications;
    const container = req.body.container;
    const index = req.body.index;
    const task = new Task(content, colour, startTime, completeTime, notifications, container, index);
    task.save();
    res.redirect("/");
};
