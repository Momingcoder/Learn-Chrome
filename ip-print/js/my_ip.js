function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var text = xhr.responseText;
            var num = text.match(/\d+/g);
            callback(num[0] + ' : ' + num[1] + ' : ' + num[2] + ' : ' + num[3]);
        }
    }
    xhr.send();
}

httpRequest('http://pv.sohu.com/cityjson?ie=utf-8', function(ip) {
    document.getElementById('ip_div').innerText = ip;
})
