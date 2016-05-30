function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result) {
    result = JSON.parse(result);
    var list = result.list;
    var index = 1;
    var table = '<p class = "top">City: ' + localStorage.city + '</p>';
    table += '<table><tr><th>Date</th><th>Weather</th><th>Low T</th><th>High T</th></tr>';
    for(var i in list) {
        var d = new Date(list[i].dt * 1000);
        if (i % 2 == 0) {
            table += '<tr class = "alt">';
            table += '<td>' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '</td>';
            table += '<td>' + list[i].weather[0].description + '</td>';
            table += '<td>' + Math.round(list[i].temp.min - 273.15) + ' °C</td>';
            table += '<td>' + Math.round(list[i].temp.max - 273.15) + ' °C</td>';
            table += '</tr>';
        }
        else {
            table += '<tr>';
            table += '<td>' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '</td>';
            table += '<td>' + list[i].weather[0].description + '</td>';
            table += '<td>' + Math.round(list[i].temp.min - 273.15) + ' °C</td>';
            table += '<td>' + Math.round(list[i].temp.max - 273.15) + ' °C</td>';
            table += '</tr>';
        }
        index += 1;
    }
    table += '</table>';
    table += '<p class = "buttom">Source: http://openweathermap.org </p>';
    document.getElementById('Weather').innerHTML = table;
}

var city = localStorage.city;
city = city ? city : 'beijing';
var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&appid=c7a7acfc0bf5518bc626dfb669cc5df1';
httpRequest(url, showWeather);
