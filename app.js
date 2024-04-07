const path = require("path");
const ConnectionToMongoDB = require("./util/repository").ConnectionToMongoDB;
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/errorController");

const app = express();
const port = process.env.PORT || 3000;
const ip = process.env.IP_ADRESS;

const rootDirectory = require("./util/path");
const userRoutes = require("./routes/user");

app.use(express.static(path.join(rootDirectory, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.use("/", errorController.get404Page);

ConnectionToMongoDB(() => {
    app.listen(port, ip);
});
