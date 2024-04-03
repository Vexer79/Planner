const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/day", (req, res) => {
    res.json({
        notStarted: { 1: "day", 2: "hi" },
        inProcess: { 1: "testInProcess" },
        completed: { 1: "test" },
    });
});
router.get("/week", (req, res) => {
    res.json({ notStarted: { 1: "week", 2: "hi" }, inProcess: {}, completed: {} });
});
router.get("/month", (req, res) => {
    res.json({ notStarted: { 1: "month", 2: "hi" }, inProcess: {}, completed: {} });
});
router.get("/year", (req, res) => {
    res.json({ notStarted: { 1: "year", 2: "hi" }, inProcess: {}, completed: {} });
});

router.post("/day", (req, res) => {});
router.post("/week", (req, res) => {});
router.post("/month", (req, res) => {});
router.post("/year", (req, res) => {});

router.get("/", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
