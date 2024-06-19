import React from 'react';

const AboutUs = (props) => {
    return (
        <form className='AboutUsCard'>
            <div className='AboutUsCardImg'><img src={this.props.Img} alt="AboutUsCardImg" /></div>
            <h2>{this.props.Text}</h2>
        </form>
    );
};

export default AboutUs;