import React from "react";
import SimpleLink from "../../Link";
import "./dropdown.css";

const DropDown = ({ label, label_bgc, options, ...rest }) => {
    return (
        <div className={`dropdown_menu ${label_bgc}`} {...rest}>
            <h3 className="dropdown_menu_label">
                <span>{label}</span>
            </h3>
            <ul className="dropdown_menu_list">
                {options.map((option, index) => (
                    <li key={index}>
                        <SimpleLink href={`/${option}`}>
                            <span className="dropdown_menu_list_icon">{option.icon}</span>
                            <span className="dropdown_menu_list_content">{option.content}</span>
                        </SimpleLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;
