import React from "react";
import "./select.css";

interface optionType {
    value: number,
    content: string,
}
export interface SelectProps {
    options: optionType[],
    label: string, 
    rest: string[],
}

const Select = (props: SelectProps) => {
    const { options, label, ...rest } = props;

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
