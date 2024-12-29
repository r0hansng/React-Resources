/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Counter(){

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(0)
    }
    
    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button onClick={decrement} className="counter-button">Decrement</button>
            <button onClick={reset} className="counter-button">Reset</button>
            <button onClick={increment} className="counter-button">Increment</button>
        </div>
    )
}

export default Counter