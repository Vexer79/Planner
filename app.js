const path = require("path");
const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;

const userRoutes = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);

app.use("/", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
