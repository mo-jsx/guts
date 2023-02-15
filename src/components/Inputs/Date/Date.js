import React from 'react';
import "./date.css";

const Date = ({ label }) => {
  return (
    <>
        <label htmlFor={label}>{label}</label>
        <input type="date" name="date" className="date" />
    </>
  )
}

export default Date