import React, { useState } from "react";
import ContextHookCompB from "./ContextHookCompB";

//1. Creating Context
//2. Creating Provider
//3. Consume

export const Context = React.createContext(); //1. Creating Context
const ContextHookCompA = () => {
    const [name, setName] = useState("Pooven");

    {/* Props-Drilling */ }
    // return (
    //     <>
    //         <h1>Use Context Hook - Componenet A - Parent</h1>
    //         <ContextHookCompB name={name} />
    //     </>
    // );

    {/* 2. Creating Provider */ }
    return (
        <Context.Provider value={name}>
            <h1>Use Context Hook - Componenet A - Parent</h1>
            <ContextHookCompB />
        </Context.Provider>
    );
};

export default ContextHookCompA;
