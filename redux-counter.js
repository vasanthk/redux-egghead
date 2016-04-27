// Redux Counter example

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Counter = ({
  value,
  onIncrement,
  onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>

  </div>
);

const {createStore} = Redux;
// import {createStore} from 'redux';

const store = createStore(counter); // bind reducer
/*
 console.log(store.getState()); // get the current state obj. of store
 store.dispatch({type: 'INCREMENT'});
 console.log(store.getState());
 */

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} onIncrement={() => store.dispatch({type: 'INCREMENT'})}
             onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render(); // inital render

/*
 document.addEventListener('click', () => {
 store.dispatch({type: 'INCREMENT'});
 })*/


expect(
  counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
  counter(1, {type: 'DECREMENT'})
).toEqual(0);

expect(
  counter(0, {type: 'SOMETHING_ELSE'})
).toEqual(0);

expect(
  counter(undefined, {})
).toEqual(0);

console.log('tests passed!');
