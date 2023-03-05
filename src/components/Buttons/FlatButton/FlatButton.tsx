import React from 'react';
import "./flatButton.css";

export interface FlatButtonProps {
  variant: string,
  label: string,
  rest: string[]
}
const FlatButton = (props: FlatButtonProps) => {
  const { variant, label, ...rest } = props;
  return (
    <button 
      className={`btn striped-shadow ${variant}`} 
      {...rest}
    >
      <span>{label}</span>
    </button>
  )
}

export default FlatButton;