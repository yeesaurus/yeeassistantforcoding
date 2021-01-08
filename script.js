function realtimeClock() {

    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + ":" + minutes;
    var t = setTimeout(realtimeClock, 500);
}
