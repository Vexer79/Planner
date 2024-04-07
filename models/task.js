const getDb = require("../util/repository").getDb;

module.exports = class Task {
    constructor(content, colour, startTime, completeTime, notifications, container, index, type) {
        this.content = content;
        this.colour = colour;
        this.startTime = startTime;
        this.completeTime = completeTime;
        this.notifications = notifications;
        this.container = container;
        this.index = index;
        this.type = type;
    }

    save() {
        const db = getDb();
        db.collection("users")
            .insertOne(this)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static fetch(filter) {
        const db = getDb();
        return db.collection("users").find(filter).toArray();
    }
};
