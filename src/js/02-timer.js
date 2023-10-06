import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let timerId = null;
const currentTime = new Date().getTime();
let deltaTime

startBtn.setAttribute('disabled', true);



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    deltaTime = selectedDate - currentTime;
      if (selectedDate < currentTime) {
        return Notiflix.Notify.failure('Please choose a date in the future');
      }
    startBtn.removeAttribute('disabled');

  },
};

startBtn.addEventListener('click', onStart);



flatpickr('#datetime-picker', { ...options });

function onStart() {
  startBtn.setAttribute('disabled', true);
  Notiflix.Notify.success('Start')
  timerId = setInterval(() => {
    stopTimer();
    deltaTime -= 1000;
    renderTime(convertMs(deltaTime));
  },1000)
}

function stopTimer() {
  if (
    (daysEl.textContent === '00') &
    (hoursEl.textContent === '00') &
    (minutesEl.textContent === '00') &
    (secondsEl.textContent === '01')
  ) {
    clearInterval(timerId);
  }
}

function renderTime({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addZeroToStart(Math.floor(ms / day));
  const hours = addZeroToStart(Math.floor((ms % day) / hour));
  const minutes = addZeroToStart(Math.floor(((ms % day) % hour) / minute));
  const seconds = addZeroToStart(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function addZeroToStart(time) {
  return time.toString().padStart(2, "0")
}
