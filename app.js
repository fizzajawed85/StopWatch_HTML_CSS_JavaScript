let hr = 0, min = 0, sec = 0, ms = 0;
let interval;

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');

function updateDisplay() {
  hoursEl.innerText = hr.toString().padStart(2, '0');
  minutesEl.innerText = min.toString().padStart(2, '0');
  secondsEl.innerText = sec.toString().padStart(2, '0');
  millisecondsEl.innerText = ms.toString().padStart(2, '0');
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    ms++;
    if (ms === 10) { 
      ms = 0;
      sec++;
    }
    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hr++;
    }
    updateDisplay();
  }, 100); 
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  hr = min = sec = ms = 0;
  updateDisplay();
}

updateDisplay();
