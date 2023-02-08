import React from 'react';
import "./flatButton.css";

const FlatButton = ({ variant, label, ...rest }) => {
  return (
    <button 
      className={`btn striped-shadow ${variant}`} 
      {...rest}
    >
      <span>{label}</span>
    </button>
  )
}

export default FlatButton