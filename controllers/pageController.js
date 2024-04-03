exports.getIndexPage = (req, res, next) => {
    res.type(".html").sendFile(path.join(__dirname, "public", "index.html"));
};
