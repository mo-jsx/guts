import React from "react";
import SimpleLink from "../../Link";
import "./headermenu.css";

const HeaderMenu = ({ titles, img_uri, img_alt, actions, ...rest }) => {
    return (
        <header className='main_header flex_row justify_sp_bet'>
            <div className='header_logo center_content'>
                <SimpleLink href="/">
                    <img src={img_uri} alt={img_alt} className='logo_img' />
                </SimpleLink>
            </div>

            <div className='header_menu center_content'>
                <ul className="inline_links">
                    {titles.map((title, index) => (
                        <SimpleLink href={title} key={index} className="navigation_link center_content">{title}</SimpleLink>
                    ))}
                </ul>
            </div>

            <div className='header_actions'>
                <ul className="inline_links">
                    {
                        actions.map((action, index) => (
                        <SimpleLink href={action} key={index} className="navigation_link center_content">{action}</SimpleLink>
                        ))
                    }
                </ul>
            </div>
        </header>
    );
};

export default HeaderMenu;
