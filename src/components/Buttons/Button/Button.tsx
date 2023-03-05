import React from 'react';
import "./button.css";

export interface ButtonProps {
  label: string, 
  variant: "primary" | "secondary",
}

const Button = (props: ButtonProps) => {
  const { label, variant } = props;
  
  return (
    <button className={`button ${variant}`}>
      {label}
    </button>
  )
}

export default Button
