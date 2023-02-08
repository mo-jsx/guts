import React from 'react';
import "./button.css";

const Button = ({ label, variant }) => {
  return (
    <button className={`button ${variant}`}>
      {label}
    </button>
  )
}

export default Button