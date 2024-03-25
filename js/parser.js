(function (global) {
    let Parser = {};

    Parser.getObjectFromJSON = function (json) {
        return JSON.parse(json.response);
    };

    let Tasks = {};
    Tasks.setGlobalObject = function(json){
        Tasks.getObjectReference = Parser.getObjectFromJSON(json);
        console.log(Tasks.getObjectReference);
    }

    window.Tasks = Tasks;
    window.Parser = Parser;
})(window);
