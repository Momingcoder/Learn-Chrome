function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function() {
        callback(false);
    }
    xhr.send(null);
}

// setInterval(function() {
//     httpRequest('http://www.google.cn/', function(status) {
//         var pathname = 'images/' + (status ? 'online.png' : 'offline.png');
//         chrome.browserAction.setIcon({path: pathname});
//     });
// }, 5000);

function checkStatus() {
    httpRequest('http://www.google.cn/', function(status) {
        var pathname = 'images/' + (status ? 'online.png' : 'offline.png');
        chrome.browserAction.setIcon({path: pathname});
        setTimeout(checkStatus, 5000);
    });
}


checkStatus();
