const express = require("express");
const path = require("path");
const router = express.Router();

const taskController = require("../controllers/taskController");
const viewController = require("../controllers/pageController");

router.get("/day", taskController.getDayTasks);
router.get("/week", taskController.getWeekTasks);
router.get("/month", taskController.getMonthTasks);
router.get("/year", taskController.getYearTasks);
router.get("/test", taskController.getTestTasks);

router.post("/day", taskController.saveDayTasks);
router.post("/week", (req, res) => {});
router.post("/month", (req, res) => {});
router.post("/year", (req, res) => {});

router.get("/", viewController.getIndexPage);

module.exports = router;
