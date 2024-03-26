(function (){
    ajaxUtils.sendGetRequest("http://192.168.0.114:5500/js/tasks.json", Task.setGlobalObject, false);
})();