const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

let timerId = null;

btnStart.addEventListener('click', colorSwitcher);
btnStop.addEventListener('click', stopColorSwitcher)

function colorSwitcher() {
  timerId = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  btnStart.disabled = true;
};

function stopColorSwitcher() {
  clearInterval(timerId);
  btnStart.disabled = false;
}

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};