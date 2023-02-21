import React from "react";
import "./input.css";

export interface SimpleInputPropos {
    label: string, 
    type: string, 
    placeholder: string,
    size: "small" | "medium" | "large",
    rest: string[]
}

const SimpleInput = (props: SimpleInputPropos) => {
    const { label, type, placeholder, size = "medium", ...rest } = props;

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
