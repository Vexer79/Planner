const express = require("express");
const path = require("path");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.get("/day", taskController.getDayTasks);
router.get("/week", taskController.getWeekTasks);
router.get("/month", taskController.getMonthTasks);
router.get("/year", taskController.getYearTasks);

router.post("/day", (req, res) => {});
router.post("/week", (req, res) => {});
router.post("/month", (req, res) => {});
router.post("/year", (req, res) => {});

router.get("/", (req, res) => {
    res.type(".html").sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
