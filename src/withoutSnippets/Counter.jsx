import React from "react";

export const Counter = () => {
    // Attributes
    const [counter, setCounter] = React.useState(0);
    // Context
    // Methods
    // Component
    return(
        <>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </>
    );
};