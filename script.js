// addding listeners
const counterElemet = document.getElementById('counter');
const incrementCounterElement = document.getElementById('increment');
const decrementCounterElement = document.getElementById('decrement');

// declaring initialState
const initialState = {
  value: 0,
};

//  create reducer functions
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === 'decrement') {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
};

// creating store by accepting reducer
const counterStore = Redux.createStore(counterReducer);

const renderStore = () => {
  const stateCounter = counterStore.getState();
  counterElemet.innerText = stateCounter.value;
};

// updating ui initially
renderStore();

//  subscribing store
counterStore.subscribe(renderStore);

incrementCounterElement.addEventListener('click', () => {
  counterStore.dispatch({
    type: 'increment',
  });
});

decrementCounterElement.addEventListener('click', () => {
  counterStore.dispatch({
    type: 'decrement',
  });
});
