import logo from './logo.svg';
import './App.css';
import useToggle from './hooks/useToggle';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const { toggleValue, value } = useToggle()

  const { windowSize } = useWindowSize()
  
  return (
    <div className="App">
      <button onClick={toggleValue}>{value.toString()}</button>
      <br />
      <p>this page is with this size == {windowSize.width} x {windowSize.height}</p>
      
    </div>
  );
}

export default App;
