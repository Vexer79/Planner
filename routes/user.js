const express = require("express");
const path = require("path");
const router = express.Router();

const taskController = require("../controllers/taskController");
const viewController = require("../controllers/pageController");

router.get("/day", taskController.getDayTasks);
router.get("/week", taskController.getWeekTasks);
router.get("/month", taskController.getMonthTasks);
router.get("/year", taskController.getYearTasks);

router.post("/create-task", taskController.saveTask);
router.post("/change-order", taskController.changeOrder);

router.get("/", viewController.getIndexPage);

module.exports = router;
