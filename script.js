var buttonDone = document.getElementById("btn-done");
var buttonStart = document.getElementById("btn-start");
var buttonPause = document.getElementById("btn-pause");
var buttonResume = document.getElementById("btn-resume");

var appendHours = document.getElementById("hours");
var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");

// store a reference to the variable
startTimer = null;

// function timer() {

// }

buttonStart.addEventListener("click", function () {
    console.log("Start");
});
// window.onload = function () {
//     var seconds = 00;
//     var minutes = 00;
//     var hours = 00;

//     var Interval;
//
//     buttonStop.onclick = function () {
//         clearInterval(Interval);
//     };
//     buttonDone.onclick = function () {
//         clearInterval(Interval);
//         hours = "00";
//         minutes = "00";
//         seconds = "00";
//         appendHours.innerHTML = hours;
//         appendMinutes.innerHTML = minutes;
//         appendSeconds.innerHTML = seconds;
//     };

//     function startTimer() {
//         seconds++;
//         if (seconds <= 59) {
//             appendMinutes.innerHTML = seconds;
//         }
//         if (seconds > 59) {
//             console.log("minutes");
//             minutes++;
//             appendMinutes.innerHTML = "0" + minutes;
//             seconds = 0;
//             appendSeconds.innerHTML = "0" + 0;
//         }
//         if (minutes > 59) {
//             appendMinutes.innerHTML = minutes;
//         }
//     }
// };
