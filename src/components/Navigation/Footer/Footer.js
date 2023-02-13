import React from "react";
import SimpleLink from "../Link";
import "./footer.css";

const Footer = ({ sections, ...rest }) => {
    return (
        <div {...rest}>
            {sections.map((section, index) => (
                <div key={index}>
                    <h2>{section.name}</h2>
                    <ul>
                        {section.titles.map((title, index) => 
                            <SimpleLink
                                content={title}
                                href={`/${title}`}
                                key={index}
                            />
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Footer;
