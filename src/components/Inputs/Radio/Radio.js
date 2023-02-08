import React from "react";
import "./radio.css";

const Radio = ({ label, options, orientation, ...rest }) => {
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
