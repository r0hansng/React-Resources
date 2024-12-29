/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        // The underscore is the previous array which is being displayed in the program
        // We use filter method to add only those elements in the new array (which will be rendered) whose index is not equal to the index of the element whose index being passed in the function. 
        setFoods(f => f.filter((_, i) => i!== index));
    }

    return(
        <div>
            <h1>List of Foods</h1>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default MyComponent