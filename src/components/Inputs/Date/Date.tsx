import React from 'react';
import "./date.css";

export interface DateProps {
  label: string,
}

const Date = (props: DateProps) => {
  const { label } = props;
  
  return (
    <>
        <label htmlFor={label}>{label}</label>
        <input type="date" name="date" className="date" />
    </>
  )
}

export default Date