import React from "react";
import "./radio.css";

export interface RadioProps {
  label: string,
  options: string[],
  orientation: "vertical" | "horizontal",
  rest: string[],
}

const Radio = (props: RadioProps) => {
  const { label, options, orientation, ...rest } = props;
  
    return (
        <div className="container" {...rest}>
          <label htmlFor={label}>{label}</label>
          <div className={orientation}>
            {
              options.map((op, index) => (
                <label className="radio_label" key={index}>
                  <input type="radio" name="radio" className="radio_field" />
                  {op}
                </label>
              ))
            }
          </div>
        </div>
    );
};

export default Radio;
