import React from 'react';
import {useTranslation} from "react-i18next";
import SwitchLanguage from "../../Elements/SwitchLanguage/SwitchLanguage.jsx";
import Navigation from "../../Elements/Navigation/Navigation";


const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>

            <p>{t('header.massage')}</p>
            <Navigation/>
            <SwitchLanguage/>

        </div>
    );
};

export default Home;