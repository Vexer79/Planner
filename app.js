const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const mongoDbUrl = process.env.MONGOLAB_URI;
const dbName = process.env.DB_NAME;

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/errorController");

const app = express();
const port = process.env.PORT || 3000;
const ip = process.env.IP_ADRESS;

const rootDirectory = require("./util/path");
const userRoutes = require("./routes/user");

const User = require("./models/user");

app.use(express.static(path.join(rootDirectory, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.use("/", errorController.get404Page);

mongoose
    .connect(mongoDbUrl, { dbName })
    .then((result) => {
        User.findOne().then((user) => {
            if (!user) {
                const user = new User({
                    username: "Vexer79",
                    email: "vexer@gmail.com",
                    password: "qwerty123",
                    tasks: [
                        {
                            content: "Test",
                            colour: "#000000",
                            notifications: false,
                            container: "not-started-tasks-container",
                            index: 0,
                            type: "day",
                        },
                    ],
                });
                user.save();
            }
        });
        app.listen(port, ip);
    })
    .catch((err) => {
        console.log(err);
    });
