import React from "react";

import YouTube from '../../assets/images/logos/YouTube.png';
import Instagram from '../../assets/images/logos/Instagram.png';
import Facebook from '../../assets/images/logos/Facebook.png';
import Phone from '../../assets/images/logos/Phone.png';
import Email from '../../assets/images/logos/Email.png';

import './Links.css';

export default function Links() {

    return(
        <div className="links">
            <ul>
                <a href='https://www.youtube.com' target="_blank" rel="noreferrer"><img src={YouTube} alt='YouTube Logo' /></a>
                <a href='https://www.instagram.com' target="_blank" rel="noreferrer"><img src={Instagram} alt='Instagram Logo' /></a>
                <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><img src={Facebook} alt='Facebook Logo' /></a>
                <a href='tel:512-270-9755' title='Contact Number'><img src={Phone} alt='Phone Symbol' /></a>
                <a href='mailto:aaron@thegrooverealty.com' title='Email'><img src={Email} alt='Email Symbol' /></a>
            </ul>
        </div>
    )
}
