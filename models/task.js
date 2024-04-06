const getDb = require("../util/repository").getDb;

const notStartedTasks = [];
const inProcessTasks = [];
const completedTasks = [];

module.exports = class Task {
    constructor(content, colour, startTime, completeTime, notifications, container, index) {
        this.content = content;
        this.colour = colour;
        this.startTime = startTime;
        this.completeTime = completeTime;
        this.notifications = notifications;
        this.container = container;
        this.index = index;
    }

    save() {
        notStartedTasks.push(this);
    }

    static fetchAll() {
        return {
            notStarted: { ...notStartedTasks },
            inProcess: { ...inProcessTasks },
            completed: { ...completedTasks },
        };
    }
};
