import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import { textState } from './atoms/textState';
import { product } from './atoms/products';
import { countNum } from './atoms/count';

function App() {
  const [text, setText] = useRecoilState(textState)
  const [count, setCount] = useRecoilState(countNum)
  
  const x = useRecoilValue(product)

  return (
    <div className="App">
      <h3>{text}</h3>
      
      <h3>Change the neme of bojan</h3>
      <input type='text' onChange={(e) => setText(e.target.value)} value={text} />

      <p>{x.name}</p>

      <br />
      <button onClick={() => setCount(count - 1)}> - 1</button>

      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}> + 1</button>
    </div>
  );
}

export default App;
