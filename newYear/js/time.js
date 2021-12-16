refresh();
window.setInterval('refresh()', 1000);
function refresh() {
    var curTime = parseInt(Date.now() / 1000);
    const newYearTime = 1641024000; //I got this from a Date-to-Unix-time converter

    const dayLength = 86400;
    const hourLength = 3600;
    const minuteLength = 60;

    var timeTillNewYear = Math.max(newYearTime - curTime, 0);

    days = parseInt(timeTillNewYear / dayLength);
    hours = parseInt((timeTillNewYear % dayLength) / hourLength);
    minutes = parseInt((timeTillNewYear % hourLength) / minuteLength);
    seconds = parseInt(timeTillNewYear % minuteLength);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var remark = "Waitin' for the new year";
    if (days > 7) {
        remark = "C'mon it's not even the week of. You're not <i>that</i> sick of this year";
    }
    else if (days > 0) {
        remark = "Come back later this week";
    }
    else if (hours > 1) {
        remark = "Have a happy New Year's Day!";
    }
    else if (minutes > 0) {
        remark = "The anticipation is building!";
    }
    else if (seconds > 0) {
        remark = seconds;
    }
    else {
        remark = "HAPPY NEW YEAR!!!!!"
    }

    document.getElementById("remark").innerHTML = remark;
}