import React, { memo } from "react";

const MemoHookCompC = ({ val }) => {
    console.log("Decrement Comp Rendered");
    return (
        <div>
            <h2>Decrement Counter : {val}</h2>
        </div>
    );
};

export default memo(MemoHookCompC); //HOC - Higher Order Component
