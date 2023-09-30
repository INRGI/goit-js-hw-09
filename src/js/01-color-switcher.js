const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let timerId = null;

stopBtn.setAttribute('disabled','true')

function onStart() {
    document.body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor(); }, 1000);
    startBtn.setAttribute('disabled', 'true');
    stopBtn.removeAttribute('disabled')
};

function onStop() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', 'true');
}
startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
