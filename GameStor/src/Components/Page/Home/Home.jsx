import React, { useState } from 'react';
import {useTranslation} from "react-i18next";
import SwitchLanguage from "../../Elements/SwitchLanguage/SwitchLanguage.jsx";

import Navigate from "../../Elements/Navigation/Navigate.jsx"
import './Home.css'
import Game from '../../Elements/Slidet/data.js';
import AboutUs from '../../Elements/aboutUs/AboutUs.jsx';



const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='HomeMain'>
            <Navigate/>

            <main className='HomeMainContent pt100'>
                <section className='Slider'>
                    <h2>{t("header.slider")}</h2>
                </section>

                <section className='aboutUs'>
                    <h2>{t("header.aboutusmaintext")}</h2>
                    <div className='aboutUsMainContent'>
                    <AboutUs Text={t("header.aboutussuport")} Img="https://cdn-icons-png.flaticon.com/512/1152/1152935.png"/>
                    <AboutUs Text={t("header.aboutusprice")} Img="https://cdn-icons-png.flaticon.com/512/166/166817.png"/>
                    <AboutUs Text={t("header.aboutussuport")} Img="https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-online-support-line-icon-vector-png-image_6680431.png"/>
                    <AboutUs Text={t("header.aboutussuport")} Img="https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-online-support-line-icon-vector-png-image_6680431.png"/>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Home;