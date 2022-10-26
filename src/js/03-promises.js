import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('.form');

function createPromise({i, delay}) {

  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    
      if (shouldResolve) {
        resolve({i, delay})
      } else {
        reject({i, delay});
      }
    }, delay)
  })
  return promise;
}

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let { elements: {
    delay,
    step,
    amount
  }} = e.currentTarget;

  delay = Number(delay.value);
  step = Number(step.value);

  for (let i = 0; i < Number(amount.value); i++) {

    createPromise({i, delay})
        .then(({i, delay}) => {
          Notify.success(`Fulfilled promise ${i + 1} in ${delay}ms`)
        })
        .catch(({i, delay}) => Notify.failure(`Rejected promise ${i + 1} in ${delay}ms`))
        delay += step;
  }
})


