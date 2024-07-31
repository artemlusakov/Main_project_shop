import React from 'react';
import s from './AboutUs.module.css'

const AboutUs = (props) => {

    const {
        Img,
        Text
    } = props;

    return (
        <form className={`${s.AboutUsCard} ${s.gradient}`}>
            <div className='AboutUsCardImg'><img src={Img} alt="AboutUsCardImg" /></div>
            <h2>{Text}

            </h2>
        </form>
    );
};

export default AboutUs;