import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './slice/counterSlice';

function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div className="App">

    <button onClick={() => dispatch(increment())}>+1</button>
      <h3>
        {count}
      </h3>
    <button onClick={() => dispatch(decrement())}>-1</button>

    </div>
  );
}

export default App;
