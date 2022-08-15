// declaration
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

const counter2 = document.getElementById('counter2');
const increment2 = document.getElementById('increment2');
const decrement2 = document.getElementById('decrement2');

// declaring intialstate
let count = 0;
let count2 = 0;

// incresing counter value
increment.addEventListener('click', () => {
  count++;
  counter.innerText = count;
});

// decresing counter value
decrement.addEventListener('click', () => {
  count--;
  counter.innerText = count;
});

// incresing counter value
increment2.addEventListener('click', () => {
  count2++;
  counter2.innerText = count2;
});

// decresing counter value
decrement2.addEventListener('click', () => {
  count2--;
  counter2.innerText = count2;
});
