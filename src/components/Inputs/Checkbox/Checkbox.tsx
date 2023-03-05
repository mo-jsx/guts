import React from 'react';
import "./checkbox.css";

export interface CheckboxProps {
  options: string[],
  label: string,
  orientation: "vertical" | "horizontal",
  rest: string[]
}

const Checkbox = (props: CheckboxProps) => {
  const { options, label, orientation, ...rest } = props;
  
  return (
    <div className="container" {...rest}>
        <label htmlFor={label} className="container_label">{label}</label>
        <div className={orientation}>
            {
                options.map((op, index) => (
                    <label className="checkbox_label" key={index} htmlFor={op}>
                        <input type="checkbox" name="checkbox_field" className="checkbox_field" />
                    {op}
                  </label>
                ))
            }
        </div>
    </div>
  )
}

export default Checkbox