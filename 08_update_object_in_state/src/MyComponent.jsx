/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function MyComponent() {

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    })

    function handleYearChange(e) {
        // Using updater function for safer updates
        // We are using spread operator here to not change the whole object 
        setCar((c) => ({...c, year: e.target.value}));
    }

    function handleMakeChange(e) {

        setCar((c) => ({...c, make: e.target.value}));

    }

    function handleModelChange(e) {

        setCar((c) => ({...c, model: e.target.value}));

    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>
    )
}

export default MyComponent