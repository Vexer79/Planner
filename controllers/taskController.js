const Task = require("../models/task");

exports.getDayTasks = (req, res, next) => {
    Task.fetch({ type: "day" }).then((result) => {
        res.json(result);
    });
};
exports.getWeekTasks = (req, res, next) => {
    Task.fetch({ type: "week" }).then((result) => {
        res.json(result);
    });
};
exports.getMonthTasks = (req, res, next) => {
    Task.fetch({ type: "month" }).then((result) => {
        res.json(result);
    });
};
exports.getYearTasks = (req, res, next) => {
    Task.fetch({ type: "year" }).then((result) => {
        res.json(result);
    });
};

exports.saveDayTasks = (req, res, next) => {
    const content = req.body.content;
    const colour = req.body.colour;
    const startTime = req.body.startTime;
    const completeTime = req.body.completeTime;
    const notifications = req.body.notifications;
    const container = req.body.container;
    const index = req.body.index;
    const type = req.body.type;
    const task = new Task(
        content,
        colour,
        startTime,
        completeTime,
        notifications,
        container,
        index,
        type
    );
    task.save();
    res.redirect("/");
};
