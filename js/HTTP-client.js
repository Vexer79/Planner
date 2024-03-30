(function (){
    ajaxUtils.sendGetRequest("http://192.168.0.105:5500/js/tasks.json", Task.setGlobalObject, false);
})();