
function Food(){
    
    const food1 = "Orange";
    const food2 = "Banana";

    // To write JS code inside the return statement we need to use {} but outside we don't
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food