import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    function handleNavigation(action) {
        if (action === "UseContext") {
            navigate("../useContextHookExample", { replace: true });
        }
        else if (action === "UseRef") {
            navigate("../useRefHookExample", { replace: true });
        }
        else if (action === "UseReducer") {
            navigate("../useReducerHookExample", { replace: true });
        }
        else if (action === "UseCallBack") {
            navigate("../useCallbackHookExample", { replace: true });
        }
        else if (action === "UseMemo") {
            navigate("../useMemoHookExample", { replace: true });
        }
        else if (action === "CustomHooks") {
            navigate("../customHookExample", { replace: true });
        }
    };

    return (
        <div className="ui fixed menu" style={{ padding: "10px", textAlign: "center" }}>
            <div className="ui container center">
                <h2>Contact Manager</h2>
                <button onClick={() => handleNavigation("UseContext")}>UseContext</button>
                <button onClick={() => handleNavigation("UseRef")}>UseRef</button>
                <button onClick={() => handleNavigation("UseReducer")}>UseReducer</button>
                <button onClick={() => handleNavigation("UseCallBack")}>UseCallBack</button>
                <button onClick={() => handleNavigation("UseMemo")}>UseMemo</button>
                <button onClick={() => handleNavigation("CustomHooks")}>Custom Hooks</button>
            </div>
        </div>
    )
}

export default Header;
