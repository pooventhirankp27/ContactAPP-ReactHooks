import React, { useState } from "react";
import UseCounter from "./UseCounter";

const CustomHooksExample = () => {
    // const [count, setCount] = useState(0);
    const [count, increment, decrement, reset] = UseCounter(0);

    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };

    // const handleDecrement = () => {
    //     setCount(count - 1);
    // };

    return (
        <>
            <h2>Custom Hooks</h2>
            <h3>Count : {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default CustomHooksExample;
