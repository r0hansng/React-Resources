
import { useState, useEffect } from 'react'

function MyComponent_2() {
    
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        //.addEventListener(event, callback)
        window.addEventListener("resize", handleResize)

        // return () => {
        //     window.removeEventListener("resize", handleResize)
        //     console.log("EVENT LISTENER REMOVED")
        // }
    }, [])

    useEffect(() => {
        document.title = `Size ${width} x ${height}`
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    )
}

export default MyComponent_2