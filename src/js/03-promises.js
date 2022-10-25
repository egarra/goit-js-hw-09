import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('.form');

const { elements: {
  delay,
  step,
  amount
}} = inputForm;

console.log(delay);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(Notify.success('Sol lucet omnibus'));
    // Fulfill
  } else {
    reject(Notify.failure('Please choose a date in the future'));
    // Reject
  }
}


