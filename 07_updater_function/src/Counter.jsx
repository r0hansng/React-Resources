/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Counter(){

    const [count, setCount] = useState(0)

    const increment = () => {

        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batcher together state updates for performance reasons. 
        // NEXT state becomes the CURRENT state after an update.

        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)

        // Takes the PENDING state to calculate the NEXT state
        // React puts your updater function in a queue
        // During the next render, it will call them in the same order

        // c is the previous count not CURRENT count

        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
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