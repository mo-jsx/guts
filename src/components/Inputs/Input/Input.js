import React from "react";
import "./input.css";

const SimpleInput = ({ label, type, placeholder, size = "medium", ...rest }) => {
    return (
        <>
            <label htmlFor={label} className="label">{label}</label>
            <input 
                type={type} 
                className={`input ${size}`} 
                placeholder={placeholder} 
                {...rest} 
            />
        </>
    );
};

export default SimpleInput;
