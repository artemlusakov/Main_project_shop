import React from 'react';
import s from './AboutUs.module.css'

const AboutUs = (props) => {
    return (
        <form className={`${s.AboutUsCard} ${s.gradient}`}>
            <div className='AboutUsCardImg'><img src={props.Img} alt="AboutUsCardImg" /></div>
            <h2>{props.Text}</h2>
        </form>
    );
};

export default AboutUs;