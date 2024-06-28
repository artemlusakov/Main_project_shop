import React from 'react';
import s from './GameCard.module.css'
import {useTranslation} from "react-i18next";

const GameCard = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={s.GameCartMain}>
            <img src={props.ImgGame} alt="img game"/>
            <h1>{props.NameGame}</h1>
            <div className={s.GameCartDescription}>

            </div>
            <div className={GameCartPrice}>
                <h3>{props.Price}</h3>
                <button>{t('gamescard.pay')}</button>
            </div>
        </div>
    );
};

export default GameCard;