import React from "react";
import SimpleLink from "../../Navigation/Link";
import "./card.css";

const Card = ({ image, imageDesc, title, subtitle, cardDesc }) => {
    return (
        <div className='card_container flex_col justify_sp_bet align_center'>
            <picture className='card_pic'>
                <source srcset={image} media='(orientation: portrait)' />
                <img src={image} alt={imageDesc} />
            </picture>
            <div className='card_desc flex_col justify_start align_start'>
                <h2>
                    {
                        title.length < 10
                        ? <span>{title}</span>
                        : <span>{title.slice(0, 10)}...</span>
                    }
                </h2>
                <h4>
                    <span>{subtitle}</span>
                </h4>
                {
                    cardDesc.length < 30 
                    ? <p>{cardDesc}</p>
                    : <p>{cardDesc.slice(0, 30)}... <SimpleLink content="Afficher tout" href={`/${title}`} /></p>
                }
            </div>
        </div>
    );
};

export default Card;
