import React, { useEffect, useRef, useState } from "react";

// 1. DOM Reference
// While clicking reset button, it will clear the value from text box and focus will be still there in
// textbox. To make fous in textbox we are using useRef. Because this hook can access DOM element
// directly.

// 2. useRef for storing the previous state

//3. hold mutable value prevent re-render of component

const UseRefHookExample = () => {
    const [name, setName] = useState("Pooven");
    const [counter, setCounter] = useState(0);

    const inputEle = useRef();
    const previousCounterValue = useRef("");

    useEffect(() => {
        previousCounterValue.current = counter; //current - property to hold the value between re-renders
    }, [counter]);

    const resetInput = () => {
        setName("");
        inputEle.current.focus();
    }

    return (
        <>
            <input type="text" name="name" value={name} autoComplete="off"
                ref={inputEle}
                onChange={(e) => { setName(e.target.value) }} />
            <button onClick={resetInput}>Reset</button>
            <div>My name is {name}</div>

            <div>
                <h1>Random Counter : {counter}</h1>
                <button onClick={(e) => { setCounter(Math.ceil(Math.random() * 100)) }}>
                    Generate Number
                </button>
                <div>Previous Number: {!!previousCounterValue.current && previousCounterValue.current}</div>
            </div>
        </>
    )
};

export default UseRefHookExample;