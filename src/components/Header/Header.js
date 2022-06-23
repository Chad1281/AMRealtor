import React from 'react';

import AaronMullens from '../../assets/images/logos/AMHeaderLogo.png';
import YouTube from '../../assets/images/logos/YouTube.png';
import Instagram from '../../assets/images/logos/Instagram.png';
import Facebook from '../../assets/images/logos/Facebook.png';
import Phone from '../../assets/images/logos/Phone.png';
import Email from '../../assets/images/logos/Email.png';


import './Header.css';

export default function Header() {

    return(
        <header>
            <a href="/" ><img id="Aaron Mullens Realtor" src={AaronMullens} alt="Aaron Mullens Realtor Logo" /></a>
            <nav>
                <a href="/">Home</a>
                <a href="/buying">Buying</a>
                <a href="/selling">Selling</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
            </nav>
            {/* <ul>
                <a href='https://www.youtube.com' target="_blank" rel="noreferrer"><img src={YouTube} alt='YouTube Logo' /></a>
                <a href='https://www.instagram.com' target="_blank" rel="noreferrer"><img src={Instagram} alt='Instagram Logo' /></a>
                <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><img src={Facebook} alt='Facebook Logo' /></a>
                <a href='tel:512-270-9755' title='Contact Number'><img src={Phone} alt='Phone Symbol' /></a>
                <a href='mailto:aaron@thegrooverealty.com' title='Email'><img src={Email} alt='Email Symbol' /></a>
            </ul> */}
        </header>
    )
}