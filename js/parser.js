(function (global) {
    let Parser = {};

    Parser.getObjectFromJSON = function (json) {
        return JSON.parse(json.response);
    };

    let Tasks = {};
    Tasks.setGlobalObject = function(object){
        Tasks.getObjectReference = Parser.getObjectFromJSON(object);
        console.log(Tasks.getObjectReference);
    }

    window.Tasks = Tasks;
    window.Parser = Parser;
})(window);
