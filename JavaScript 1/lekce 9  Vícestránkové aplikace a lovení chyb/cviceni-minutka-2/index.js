const input = document.querySelector('.time-input');
const form = document.querySelector('.controls');
const timer = document.querySelector('.alarm__seconds');
const audio = document.querySelector('audio');

let remainingTime = 0;
let countdownInterval;

startCountDown = () => {
    countdownInterval = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime -= 1;
            timer.textContent = remainingTime;
        } else {
            clearInterval(countdownInterval);
            playAlarmSound();
        }
    }, 1000);}
  

form.addEventListener('submit', (event) =>
{   event.preventDefault();
    let time = parseFloat(input.value);
    remainingTime = time;
    timer.textContent = time;
    input.value = '';
    startCountDown();
}
)
 
playAlarmSound = () => {
    audio.play();
}