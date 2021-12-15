refresh();
window.setInterval('refresh()', 1000);
function refresh() {
    var curTime = parseInt(Date.now() / 1000);
    const newYearTime = 1641024000; //I got this from a Date-to-Unix-time converter

    const dayLength = 86400;
    const hourLength = 3600;
    const minuteLength = 60;

    var timeTillNewYear = newYearTime - curTime;

    days = parseInt(timeTillNewYear / dayLength);
    hours = parseInt((timeTillNewYear % dayLength) / hourLength);
    minutes = parseInt((timeTillNewYear % hourLength) / minuteLength);
    seconds = parseInt(timeTillNewYear % minuteLength);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}