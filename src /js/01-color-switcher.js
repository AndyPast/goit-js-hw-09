// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

//     Напиши скрипт, який після натискання кнопки «Start», раз на секунду
// змінює колір фону < body > на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

let c;

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId;

refs.startBtn.addEventListener('click', () => {
  refs.stopBtn.disabled = false;
  refs.startBtn.disabled = true;
  timerId = setInterval(() => {
    let color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
});

refs.stopBtn.disabled = true;

refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
