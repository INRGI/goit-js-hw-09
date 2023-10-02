import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('[datetime-picker]');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let timerId = null;

startBtn.setAttribute('disabled', true);



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = new Date().getTime();
    const selectedDate = selectedDates[0];
      if (selectedDate < currentTime) {
        window.alert("Please choose a date in the future")
        return;
      }
    startBtn.removeAttribute('disabled');
    renderTime(selectedDate - currentTime)
      
  },
};

startBtn.addEventListener('click', onStart);



flatpickr('#datetime-picker', { ...options });

function onStart() {
  inputDate.setAttribute('disabled', 'true');
  timerId = setInterval(() => {
    
  },1000)
}

function stopTimer() {
  if (
    (days.textContent === '00') &
    (hours.textContent === '00') &
    (minutes.textContent === '00') &
    (seconds.textContent === '00')
  ) {
    clearInterval(timerId);
  }
}

function renderTime(time) {
  const convertTime = convertMs(time)
  days.textContent = convertTime.days;
  hours.textContent = convertTime.hours;
  minutes.textContent = convertTime.minutes;
  seconds.textContent = convertTime.seconds;
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
