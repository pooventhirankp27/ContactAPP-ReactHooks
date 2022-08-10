import React, { useContext } from "react";
import { Context } from "./ContextHookCompA";

const ContextHookCompC = () => {
    const val = useContext(Context);
    return (
        <>
            <h1>Use Context Hook - Componenet C - Child</h1>
            <h3>Name : {val}</h3>
        </>
    );
};

export default ContextHookCompC;
