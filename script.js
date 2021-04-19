let seconds = 0;
let minutes = 0;
let hours = 0;

//define vars to hold display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//var to hold set interval function
let interval = null;

//Define status to hold stopwatch status
let status = "stopped";

// stopwatch function (logic to determine when to increment to the next level)
function stopWatch() {
    seconds++;

    // logic to determine when to increment next value
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    //if seconds/minutes/hours are only one digit, add a leading 0
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }
    //Display updated time values to user

    document.getElementById("display").innerHTML =
        displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startPauseResume() {
    if (status === "stopped") {
        // start the stopwatch by calling the setInterval() function
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startPauseResume").innerHTML = "Pause";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startPauseResume").innerHTML = "Resume";
        status = "stopped";
    }
}

function done() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startPauseResume").innerHTML = "Start";
    status = "stopped";
}
