import React, { useState } from "react";
import MemoHookCompB from "./MemoHookCompB";
import MemoHookCompC from "./MemoHookCompC";

const MemoHookCompA = () => {
    const [incrementCounter, setIncrementCounter] = useState(0);
    const [decrementCounter, setDecrementCounter] = useState(0);

    return (
        <>
            <h2>Memo Hook</h2>
            <button onClick={() => { setIncrementCounter(incrementCounter + 1) }}>Increment</button>
            <button onClick={() => { setDecrementCounter(decrementCounter - 1) }}>Decrement</button>

            <MemoHookCompB val={incrementCounter} />
            <MemoHookCompC val={decrementCounter} />
        </>
    )
};

export default MemoHookCompA;
