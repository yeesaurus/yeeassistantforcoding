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

function dosearch()
{
    var txt = document.getElementById("search").value;
                
    var stackoverflow = "https://stackoverflow.com/search?q=" + txt + "&s=717bc4c6-ce7b-46c8-bddf-6d97e9bdd2bf";
                
    document.write(stackoverflow);
}