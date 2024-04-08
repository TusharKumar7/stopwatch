const time = document.getElementById("time-container");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const lapBtn = document.getElementById("lap-btn");
const lapHeadContainer = document.getElementById("lap-head-container");
const lapNoContainer = document.getElementById("lap-no-container");
const lapTimeContainer = document.getElementById("lap-time-container");
const totalLapContainer = document.getElementById("total-lap-container");
const lapContainer = document.getElementById("lap-container");

let startTime;
let elapsedTime = 0;
let timeInterval;

startBtn.addEventListener("click", function () {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(printTime, 10);
  startBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
  resetBtn.style.display = "inline-block";
  lapBtn.style.display = "inline-block";
});

function printTime() {
  elapsedTime = Date.now() - startTime;
  time.innerText = timeTostring(elapsedTime);
}

function timeTostring(time) {
  let timeInHours = time / 3600000;
  let hh = Math.floor(timeInHours);
  let timeInMins = (timeInHours - hh) * 60;
  let mm = Math.floor(timeInMins);
  let timeInSec = (timeInMins - mm) * 60;
  let ss = Math.floor(timeInSec);
  let timeInMiliSec = (timeInSec - ss) * 100;
  let ms = Math.floor(timeInMiliSec);

  let preciseHour = hh < 9 ? "0" + hh : hh;
  let preciseMin = mm < 9 ? "0" + mm : mm;
  let preciseSec = ss < 9 ? "0" + ss : ss;

  return `${preciseHour}:${preciseMin}:${preciseSec}:${ms}`;
}

stopBtn.addEventListener("click", function () {
  console.log("stop button clicked");
  clearInterval(timeInterval);
  startBtn.style.display = "inline-block";
  stopBtn.style.display = "none";
  lapBtn.style.display = "none";
});

resetBtn.addEventListener("click", function () {
  console.log("reset button clicked");
  clearInterval(timeInterval);
  elapsedTime = 0;
  time.innerText = "00:00:00:00";
  startBtn.style.display = "inline-block";
  stopBtn.style.display = "none";
  lapBtn.style.display = "none";
});

let totalLapElapsedTime = 0;
let lapCount = 0;

lapBtn.addEventListener("click", function () {
  lapCount++;
  if (lapCount > 0) {
    lapNoContainer[0].style.display = "inline-block";
    lapNoContainer[0].style.display = "inline-block";
    lapNoContainer[0].style.display = "inline-block";
  }
  const lapRow = document.createElement("div");
  lapContainer.appendChild(lapRow);
  lapRow.classList.add("lap");

  const lapNoDiv = document.createElement("div");
  lapNoDiv.classList.add("lap-no");

  const lapTimeDiv = document.createElement("div");
  lapTimeDiv.classList.add("lap-time");

  const totalLapTime = document.createElement("div");
  totalLapTime.classList.add("total-lap-time");

  const lapCountNo = lapCount < 9 ? "0" + lapCount : lapCount;
  lapNoDiv.innerHTML = "Lap " + lapCountNo;

  const { hours, minutes, seconds, millisec } = time;
  
});

let lapStartTime = 0;

function getLap() {
  const elapsedLapTime = Date.now() - lapStartTime;
  const lapTime = timeTostring(elapsedLapTime);
  lapStartTime = Date.now();
  totalLapElapsedTime = totalLapElapsedTime + elapsedLapTime;
  const totalLapTime = timeTostring(totalLapElapsedTime);
  return { lapTime, totalLapTime };
}
