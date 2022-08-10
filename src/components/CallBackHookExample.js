import React, { useState, useCallback } from "react";
import CallBackTodos from "./CallBackTodos";

const CallBackHookExample = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(count + 1);
    };

    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <CallBackTodos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default CallBackHookExample;
