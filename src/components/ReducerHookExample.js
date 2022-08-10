import React, { useState, useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
    switch (action.type) {

        case "Increment":
            return state + 1;

        case "Decrement":
            return state - 1;

        default:
            throw new Error();
    };
}

const ReducerHookExample = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>UseReducer Hook</h2>
            <h3>Count is {state}</h3>
            <button onClick={() => { dispatch({ type: "Increment" }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: "Decrement" }) }}>Decrement</button>
        </>
    );
};

export default ReducerHookExample;
