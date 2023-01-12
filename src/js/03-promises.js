// import Notiflix from "notiflix";

const refs = {
  Form: document.querySelector(".form"),
  Delay: document.querySelector("[name='delay']"),
  Step: document.querySelector("[name='step']"),
  Amount: document.querySelector("[name='amount']"),
};

refs.Form.addEventListener("submit", submitPromises);

function submitPromises(e) {
  e.preventDefault();

  let currentDelay = Number(refs.Delay.value);

  for (let i = 1; i <= Number(refs.Amount.value); i += 1) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    currentDelay += Number(refs.Step.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objectPromise = { position, delay };

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(objectPromise);
    } else {
      reject(objectPromise);
    }
  });
}
