import React, { useState } from 'react';
import {useTranslation} from "react-i18next";
import SwitchLanguage from "../../Elements/SwitchLanguage/SwitchLanguage.jsx";

import Navigate from "../../Elements/Navigation/Navigate.jsx"
import './Home.css'
import Game from '../../Elements/Slidet/data.js';



const Home = () => {
    const { t, i18n } = useTranslation();

    const [slider, setSlider] = useState(Game)
    const [currentIndex, setCurrentIIndex] = useState(0)

    return (
        <div className='HomeMain'>
            <Navigate/>

            <div className='HomeMainContent pt100'>
                
            </div>

        </div>
    );
};

export default Home;