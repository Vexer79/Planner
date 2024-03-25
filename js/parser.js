(function (global) {
    let Parser = {};

    Parser.getObjectFromJSON = function (json) {
        return JSON.parse(json.response);
    };

    global.Parser = Parser;
})(window);
