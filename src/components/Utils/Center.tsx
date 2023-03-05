import React, { ReactNode } from "react";
import "./center.css";

export interface CenterProps {
    children: ReactNode;
}

const Center = (props: CenterProps) => {
    return <div className='center'>{props.children}</div>;
};

export default Center;
