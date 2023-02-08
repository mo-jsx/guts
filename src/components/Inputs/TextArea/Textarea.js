import React from 'react';
import "./textarea.css";

const Textarea = ({rows, size, label, placeholder, ...rest}) => {
  return (
    <>
        <label htmlFor={label}>{label}</label>
        <textarea className={`textarea ${size}`}rows={rows} placeholder={placeholder} {...rest} />
    </>
  )
}

export default Textarea