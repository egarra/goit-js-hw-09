function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]'),
      stopBtn = document.querySelector('[data-stop]');
let timerColor;
      
startBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor();
    timerColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    },1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerColor);
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

