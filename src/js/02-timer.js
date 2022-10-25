const dateInput = document.querySelector('#datetime-picker'),
      startBtn = document.querySelector('[data-start]');

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let t = Date.parse(selectedDates) - Date.parse(new Date())
        t <= 0 ? alert("Please choose a date in the future") : startBtn.disabled = false;
        return t;
    },
  };

flatpickr(dateInput, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

startBtn.addEventListener('click', () => {
    console.log(Date.parse(dateInput.value))
})