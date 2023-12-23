import React, { useState } from "react";

const Toggle = (prop) => {
    const [check, setCheck] = useState(true)
    const checked = () => {
        setCheck(!check);
        prop.checkedValue(check)
    }

    return (<>
        <div className="toggle">
            <label className="switch">
                <input type="checkbox" onChange={checked} className={prop.state ? "input": "none"}/>
                <span className="slider round"></span>
            </label>  
        </div>
    </>)
}

export default Toggle;