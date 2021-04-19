let seconds = 0;
let minutes = 0;
let hours = 0;

//define vars to hold display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
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

    // display update time values to user
    document.getElementById("display").innerHTML =
        hours + ":" + minutes + ":" + seconds;
}

window.setInterval(stopWatch, 1000);
