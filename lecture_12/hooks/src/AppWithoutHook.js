import logo from './logo.svg';
import './App.css';
import useToggle from './hooks/useToggle';

function App() {
    const [value, setValue] = useState(false)
    
    const toggleValue = () => {
        setValue(!value)
    }

  return (
    <div className="App">
      <button onClick={toggleValue}>{value.toString()}</button>
    </div>
  );
}

export default App;
