exports.getDayTasks = (req, res, next) => {
    res.json({
        notStarted: { 1: "day", 2: "hi" },
        inProcess: { 1: "testInProcess" },
        completed: { 1: "test" },
    });
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
