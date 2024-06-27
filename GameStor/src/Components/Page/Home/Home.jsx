import React, { useState } from 'react';
import {useTranslation} from "react-i18next";
import SwitchLanguage from "../../Elements/SwitchLanguage/SwitchLanguage.jsx";

import Navigate from "../../Elements/Navigation/Navigate.jsx"
import './Home.css'
import Game from '../../Elements/Slidet/data.js';
import AboutUs from '../../Elements/AboutUs/AboutUs.jsx';

import communite from '../../../assets/IMG/communite.png'
import suport from '../../../assets/IMG/suport.png'
import price from '../../../assets/IMG/price.png'

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
                    <AboutUs Text={t("header.aboutussuport")} Img={suport}/>
                    <AboutUs Text={t("header.aboutusprice")} Img={price}/>
                    <AboutUs Text={t("header.community")} Img={communite}/>
                    
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Home;