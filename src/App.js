import {useState} from 'react';
import Counter from './components/Counter';

function App() {

  const [counter, changeCounter] = useState(0);

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
