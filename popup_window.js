var enable_switch = document.getElementById("enableSwitch");
enable_switch.addEventListener("change", function(event){
    console.log(event.target.checked);
    var today = new Date();
    var todayStr = today.getFullYear().toString() + today.getMonth().toString() + today.getDate().toString();
    chrome.storage.sync.set({'EnableService': event.target.checked}, function() {
        console.log('EnableService: ' + event.target.checked);
    });
});

chrome.storage.sync.get('EnableService', function(result){
    enable_switch.checked = result['EnableService'];
});