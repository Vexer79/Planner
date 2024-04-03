const path = require("path");
const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;

const errorController = require("./controllers/errorController");
const userRoutes = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);

app.use("/", errorController.get404Page);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
