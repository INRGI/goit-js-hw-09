import Notiflix from 'notiflix';

const formSelector = document.querySelector('.form');
const delaySelector = document.querySelector('input[name="delay"]');
const stepSelector = document.querySelector('input[name="step"]');
const amountSelector = document.querySelector('input[name="amount"]');

formSelector.addEventListener('submit', onSubmit)

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



