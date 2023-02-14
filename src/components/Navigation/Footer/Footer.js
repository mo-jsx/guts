import React from "react";
import SimpleLink from "../Link";
import "./footer.css";

const Footer = ({ sections, ...rest }) => {
    return (
        <footer className="main_footer" {...rest}>
            {sections.map((section, index) => (
                <div className="footer_section" key={index}>
                    <h2>{section.name}</h2>
                    <ul className="section_titles">
                        {section.titles.map((title, index) => 
                            <SimpleLink
                                content={title}
                                href={`/${title}`}
                                key={index}
                                className="title"
                            />
                        )}
                    </ul>
                </div>
            ))}
        </footer>
    );
};

export default Footer;
