function my_clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = h >= 10 ? h : ('0' + h);
    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);
    document.getElementById('clock_div').innerHTML = h + ":" + m + ":" + s;
    setTimeout(my_clock, 500);
}

my_clock();
