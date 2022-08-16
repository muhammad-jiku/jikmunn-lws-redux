// addding listeners
const counterElemet = document.getElementById('counter');
const incrementCounterElement = document.getElementById('increment');
const decrementCounterElement = document.getElementById('decrement');

// type creator
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// declaring initialState
const initialState = {
  value: 0,
};

// action creators
const increment = (val) => {
  return {
    type: INCREMENT,
    payload: val,
  };
};
const decrement = (val) => {
  return {
    type: DECREMENT,
    payload: val,
  };
};

//  create reducer functions
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
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
  counterStore.dispatch(increment(3));
});

decrementCounterElement.addEventListener('click', () => {
  counterStore.dispatch(decrement(2));
});
