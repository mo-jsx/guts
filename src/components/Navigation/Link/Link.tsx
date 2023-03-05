import React from 'react';
import "./link.css";

export interface LinkProps {
  content: string,
  href: string,
  variant?: string,
  children?: React.ReactNode,
  rest?: string[],
}

const Link = (props: LinkProps) => {
  const { content, href, variant, children, ...rest} = props;
  
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

export default Link;