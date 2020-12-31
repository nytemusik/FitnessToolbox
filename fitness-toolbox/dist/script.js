const EATING_TIME = 28800;
const FASTING_TIME = 57600;
time=0;
hasClicked=0;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
  hours = Math.floor(time / 3600);
  minutes = Math.floor(time % 3600 / 60);
  seconds = time % 60;
  
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  countdownEl.innerHTML = hours + ":" + minutes + ":" + seconds;
  
  if(time) time--;
  else if(hasClicked) {
    
  };
}

function toEating() {
  hasClicked = 1;
  time = EATING_TIME;
}

function toFasting() {
  hasClicked = 1;
  time = FASTING_TIME;
}

function reset() {
  hasClicked = 0;
  time = 0;
}