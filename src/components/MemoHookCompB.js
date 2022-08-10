import React, { memo } from "react";

const MemoHookCompB = ({ val }) => {
    console.log("Increment Comp Rendered");
    return (
        <div>
            <h2>Increment Counter : {val}</h2>
        </div>
    );
};

export default memo(MemoHookCompB); //HOC - Higher Order Component
