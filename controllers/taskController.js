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
    const task = new Task(
        req.body.content,
        req.body.colour,
        req.body.startTime,
        req.body.completeTime,
        req.body.notifications,
        req.body.container,
        req.body.index,
        req.body.type
    );
    task.save();
    res.redirect("/");
};
