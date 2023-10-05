import Notiflix from 'notiflix';

const formSelector = document.querySelector('.form');
const delaySelector = document.querySelector('input[name="delay"]');
const stepSelector = document.querySelector('input[name="step"]');
const amountSelector = document.querySelector('input[name="amount"]');

formSelector.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault();

  let delay = Number(delaySelector.value);
  const step = Number(stepSelector.value);
  const amount = Number(amountSelector.value);
  let position = 0;

  if (delay <= 0 || step <= 0 || amount <= 0) {
    return Notiflix.Notify.failure('Please enter a correct value');
  }

  for (let i = 1; i <= amount; i++){
    position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  };
  formSelector.reset();
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}



