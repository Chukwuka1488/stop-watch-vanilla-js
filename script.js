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

buttonDone.addEventListener("click", function () {
    console.log("Done");
});

buttonPause.addEventListener("click", function () {
    console.log("Pause");
});

buttonResume.addEventListener("click", function () {
    console.log("Resume");
});
