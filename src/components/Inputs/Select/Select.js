import React from "react";
import "./select.css";

const Select = ({ options, label, ...rest }) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <div className="select">
                <select id="standard-select" {...rest}>
                    {options.map((op, index) => {
                        const { value, content } = op;

                        return (
                            <>
                                {value === 0 ? (
                                    <option value={value} key={index} disabled>
                                        {content}
                                    </option>
                                ) : (
                                    <option value={value} key={index}>
                                        {content}
                                    </option>
                                )}
                            </>
                        );
                    })}
                </select>
                <span className="focus"></span>
            </div>
        </>
    );
};

export default Select;
