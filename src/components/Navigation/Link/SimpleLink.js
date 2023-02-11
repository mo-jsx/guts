import React from 'react';
import "./simplelink.css";

const SimpleLink = ({ content, href, variant, children, ...rest}) => {
  return (
    <>
    {
      content 
      ? (<a href={href} className={`link ${variant}`} {...rest}>{content}</a>)
      :(<a href={href} className={`link ${variant}`} {...rest}>{children}</a>)
    }
    </>
  )
}

export default SimpleLink