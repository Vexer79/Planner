(function (){
    ajaxUtils.sendGetRequest("http://localhost:3000/tasks", Task.setGlobalObject, false);
})();