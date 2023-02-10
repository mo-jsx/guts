import React from "react";
import SimpleLink from "../../Link";
import "./headermenu.css";

const HeaderMenu = ({ titles, ...rest }) => {
    return (
        <header className="main_header" {...rest}>
            <div className="header_logo">
                <h2><SimpleLink content="Forsa" href="/" /></h2>
                <h6>Trouver des opportunités partout</h6>
            </div>

            <div className="header_right">
                <ul>
                    {titles.map((title, index) => (
                        <li key={index}><SimpleLink content={title} href={`/${title}`} /></li>
                    ))}
                </ul>
            </div>

            <div className="header_left">
                <SimpleLink content={"Login"} href="/login" />
                <SimpleLink content={"Register"} href="/register" variant="link__secondary"/>
            </div>
        </header>
    );
};

export default HeaderMenu;