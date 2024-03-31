(function (){
    ajaxUtils.sendGetRequest("http://localhost:5500/tasks", Task.setGlobalObject, false);
})();