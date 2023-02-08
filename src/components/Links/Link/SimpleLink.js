import React from 'react';
import "./simplelink.css";

const SimpleLink = ({ content, href, variant, ...rest}) => {
  return (
    <a href={href} className={`link ${variant}`} {...rest}>{content}</a>
  )
}

export default SimpleLink