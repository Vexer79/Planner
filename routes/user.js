const express = require("express");
const router = express.Router();

router.get("/tasks", (req, res) => {
    res.json({
        D: {
            notStarted: { 1: "day", 2: "hi" },
            inProcess: { 1: "testInProcess" },
            completed: { 1: "test" },
        },
        W: { notStarted: { 1: "week", 2: "hi" }, inProcess: {}, completed: {} },
        M: { notStarted: { 1: "month", 2: "hi" }, inProcess: {}, completed: {} },
        Y: { notStarted: { 1: "year", 2: "hi" }, inProcess: {}, completed: {} },
    });
});

router.get("/", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
