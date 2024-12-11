import { useCallback, useState } from 'react';
import './App.css';
import { CounterSelect } from './CounterSelect';

function App() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback((value: number) => {
    setCount((prevCount) => prevCount + value);
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <CounterSelect onChange={handleCount} />
        </div>
        <h2>Selection count is: {count}</h2>
      </div>
    </>
  );
}

export default App;
