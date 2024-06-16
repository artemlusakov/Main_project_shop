import React from 'react';
import {useTranslation} from "react-i18next";
import s from './SwitchLanguage.module.css'

const SwitchLanguage = () => {

    const { t, i18n } = useTranslation();

    function en (){
        i18n.changeLanguage('en-US')
    }

    function ru (){
        i18n.changeLanguage('ru-RU')
    }
    return (
        <div className={s.SwitchLanguage}>
            <button  onClick={en}> En </button>
            /
            <button onClick={ru}> Ru </button>
        </div>
    );
};

export default SwitchLanguage;