import React from "react";
import SimpleLink from "../Link";
import "./footer.css";

const Footer = ({ sections, ...rest }) => {
    return (
        <footer className="main_footer flex_row align_center" {...rest}>
            {sections.map((section, index) => (
                <div className="footer_section flex_col justify_sp_bet" key={index}>
                    <h2>{section.name}</h2>
                    <ul className="section_titles flex_col justify_sp_bet">
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
