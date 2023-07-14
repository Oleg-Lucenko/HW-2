import {useState} from 'react';
import './counter.css';

function Counter() {

    const [counter, changeCounter] = useState(0);

    return (
        <div className="counter-container">
        <button onClick={() => changeCounter(counter-1)}>-</button>
            <span>{counter}</span>
        <button onClick={() => changeCounter(counter+1)}>+</button>
      </div>
    )
}

export default Counter;