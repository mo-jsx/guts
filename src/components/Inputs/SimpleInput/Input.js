import React from "react";
import "./input.css";

const SimpleInput = ({ label, placeholder, size = "medium", ...rest }) => {
    return (
        <>
            <label htmlFor={label} className="label">{label}</label>
            <input 
                type="text" 
                className={`input ${size}`} 
                placeholder={placeholder} 
                {...rest} 
            />
        </>
    );
};

export default SimpleInput;
