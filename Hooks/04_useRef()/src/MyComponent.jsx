// useRef() = "use Reference" does not cause re-renders when its value changes. When you want a component to "remember" some information, but you don't want that information to trigger new renders.

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, animations and transitions
// 3. Managing Timers and Intervals

import { useState, useEffect, useRef } from 'react'

function MyComponent() {

    //useRef returns an object. The object that only has one property current that has the reference of the current value.
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })

    function handleClick1() {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "yellow"
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = "yellow"
    }

    function handleClick3() {
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = "yellow"
    }

    return (
        <div>
            <button onClick={handleClick1}>
                Click Me 1!
            </button>
            {/* Ref attribute is a special attribute that is used to create reference to another value */}
            <input ref={inputRef1} />
            <button onClick={handleClick2}>
                Click Me 2!
            </button>
            {/* Ref attribute is a special attribute that is used to create reference to another value */}
            <input ref={inputRef2} />
            <button onClick={handleClick3}>
                Click Me 3!
            </button>
            {/* Ref attribute is a special attribute that is used to create reference to another value */}
            <input ref={inputRef3} />
        </div>
    )

}

export default MyComponent