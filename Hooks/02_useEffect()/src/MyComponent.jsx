/* eslint-disable no-unused-vars */
// useEffect() = React hook that tells React DO SOME WHEN (pick one):
// This component re-renders 
// This component mounts
// The state of a value

// useEffect(function, [dependencies])

// 1. userEffect(() => {}) // Runs after every re-render
// 2. userEffect(() => {}, []) // Runs only on mount
// 3. userEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscription (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from 'react'

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    function addCount() {
        setCount(c => c + 1)
    }

    function subtractCount() {
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    // If we pass in an empty dependency array then the code inside useEffect will execute only once.
    // If we pass in a dependency array like [count] then the code inside useEffect will execute every time count changes. Which is similar to passing no dependency array but, it is different in one way. The case in which we don't pass any dependency array the code will execute WHENEVER there is a change in any component but in the later case the code will execute only when the values inside the dependency array changes.f
    useEffect(() => {
        document.title = `Count: ${count} ${color}`

        // Clean up function. This will be called when the component unmounts.
        return () => {
            //SOME CLEANUP CODE
        }
    }, [count, color])

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default MyComponent