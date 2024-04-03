const path = require("path");
const rootDirectory = require("./util/path");

exports.get404Page = (req, res) => {
    res.status(404).sendFile(path.join(rootDirectory, "views", "404.html"));
};
