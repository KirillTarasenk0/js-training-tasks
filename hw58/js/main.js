const timer = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let time = 0;
let interval = null;
let date = new Date().getSeconds();
console.log(date);
timer.innerHTML = '0';
startBtn.addEventListener('click', () => {
    if (interval) return;
    interval = setInterval(() => {
        time++;
        timer.innerHTML = `${time}`;
    }, 1000);
});
stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});