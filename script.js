// declaration
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

// declaring intialstate
let count = 0;

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
