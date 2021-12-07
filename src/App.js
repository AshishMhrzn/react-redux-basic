import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
