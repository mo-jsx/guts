import React from 'react';
import "./center.css";

export interface CenterProps {
  children: React.ReactNode
}

const Center = (props: CenterProps) => {
  const { children } = props; 
  
  return (
    <div className="center">{children}</div>
  )
}

export default Center
