import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInput = document.querySelector('#datetime-picker'),
      startBtn = document.querySelector('[data-start]'), 
      timerWrap = document.querySelector('.timer'),
      labelsValue = timerWrap.querySelectorAll('.value');

let startTimer;

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      Date.parse(selectedDates) - Date.parse(new Date()) <= 0 ? Notify.failure('Please choose a date in the future') : startBtn.disabled = false;
    },
  };

flatpickr(dateInput, options);

function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

function clockUpdate() {
  let timerObj = convertMs(Date.parse(dateInput.value) - Date.parse(new Date()));

  labelsValue.forEach((label, i) => label.textContent = Object.values(timerObj)[i])
}

startBtn.addEventListener('click', () => {
  if (startBtn.textContent === 'Start') {
    clockUpdate();
    startTimer = setInterval(clockUpdate, 1000);
    startTimer;
    startBtn.textContent = 'Stop';
  } else {
    clearInterval(startTimer);
    startBtn.textContent = 'Start';
    startBtn.disabled = true;
    labelsValue.forEach(label => label.textContent = '00')
  }
  
})

