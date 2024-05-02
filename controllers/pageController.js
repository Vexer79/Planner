const path = require("path");

exports.getIndexPage = (req, res, next) => {
    res.type(".html").sendFile(path.join(__dirname, "public", "index.html"));
};

exports.getLoginPage = (req, res, next) => {
    res.type(".html").sendFile(path.join(__dirname,"..", "public", "pages", "login.html"));
};
