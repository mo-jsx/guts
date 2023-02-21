import React from 'react';
import "./textarea.css";

export interface TextareaProps {
  rows: number,
  size: string,
  label: string,
  placeholder: string,
  rest: string[],
}

const Textarea = (props: TextareaProps) => {
  const {rows, size, label, placeholder, ...rest} = props;

  return (
    <>
        <label htmlFor={label}>{label}</label>
        <textarea className={`textarea ${size}`}rows={rows} placeholder={placeholder} {...rest} />
    </>
  )
}

export default Textarea