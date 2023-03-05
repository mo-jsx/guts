import React from "react";
import { ButtonProps } from "../../../types/Buttons/ButtonProps";
import "./button.css";

const Button = (props: ButtonProps) => {
    const { label, variant } = props;

    return <button className={`button ${variant}`}>{label}</button>;
};

export default Button;
