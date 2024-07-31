import React, { useState } from 'react';
import {useTranslation} from "react-i18next";

import Navigate from "../../Elements/Navigation/Navigate.jsx";
import './Home.css';
// import Game from '../../Elements/Slidet/data.js';
import AboutUs from '../../Elements/AboutUs/AboutUs.jsx';

import communite from '../../../assets/IMG/communite.png'
import suport from '../../../assets/IMG/suport.png'
import price from '../../../assets/IMG/price.png'
import GamesCatalog from '../../Elements/GamesCatalog/GamesCatalog.jsx';
import {Counter} from "../../../features/counter/Counter.jsx";

const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='HomeMain'>
            <Navigate/>

            <main className='HomeMainContent pt50'>
                <section className='Slider'>
                    <h2>{t("header.slider")}</h2>
                </section>

                <section className='SectionClick'>
                    <Counter/>
                </section>

                <section className='aboutUs'>
                    <h2>{t("header.aboutusmaintext")}</h2>
                    <div className='aboutUsMainContent'>
                    <AboutUs Text={t("header.aboutussuport")} Img={suport}/>
                    <AboutUs Text={t("header.aboutusprice")} Img={price}/>
                    <AboutUs Text={t("header.aboutusprice")} Img={price}/>
                    <AboutUs Text={t("header.community")} Img={communite}/>
                    
                    </div>
                </section>

                <section className='GamesCatalog'>
                    <GamesCatalog GamesCatalogName={t("gamescatalog.gamescatalognhits")}/>
                </section>


            </main>

        </div>
    );
};

export default Home;