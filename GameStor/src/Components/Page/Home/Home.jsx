import React, { useState } from 'react';
import {useTranslation} from "react-i18next";
import SwitchLanguage from "../../Elements/SwitchLanguage/SwitchLanguage.jsx";

import Navigate from "../../Elements/Navigation/Navigate.jsx"
import './Home.css'
import Game from '../../Elements/Slidet/data.js';



const Home = () => {
    const { t, i18n } = useTranslation();



    return (
        <div className='HomeMain'>
            <Navigate/>

            <main className='HomeMainContent pt100'>
                <section className='Slider'>
                    Вскоре тут будет слайдер!
                </section>

                <section className='aboutUs'>

                </section>
            </main>

        </div>
    );
};

export default Home;