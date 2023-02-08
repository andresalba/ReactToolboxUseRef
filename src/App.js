import { useRef } from 'react';
import './App.css';

function App() {

const inputRef = useRef(null);
const resultRef = useRef(null);

const makeThings = () => {
  alert(inputRef.current.value);//capture by inputRef reference
  resultRef.current.innerHTML = inputRef.current.value;//show by inputRef reference
}

return (
  <div className="App">
    <input type="text" ref={inputRef} />
    <button onClick={makeThings}>Capture Input</button>
    <div ref={resultRef}></div>
  </div>
);

}

export default App;
