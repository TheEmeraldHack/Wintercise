let startTime, timer, isRunning = false, score = 0;

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now();
    timer = setInterval(updateStopwatch, 1000);
    isRunning = true;
    score = 0;
    updateScore();
  } else {
    clearInterval(timer);
    isRunning = false;
    document.querySelector('.stopwatch').innerText = "0";
    score = 0;
    updateScore();
  }
}

function updateStopwatch() {
  let seconds = Math.floor((Date.now() - startTime) / 1000);
  document.querySelector('.stopwatch').innerText = seconds + ' Seconds';

  if (seconds % 10 === 0 && seconds !== 0) {
    score++;
    updateScore();
  }
}

function updateScore() {
  document.getElementById('score').innerText = score;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'a' || event.key === 'A') {
    startStopwatch();
  }
});
