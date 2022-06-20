import React from 'react';

import AaronMullens from '../../assets/images/AMLogo.png';

export default function Header() {

    return(
        <header>
            <a href="/home" ><img id="Aaron Mullens Realtor" src={AaronMullens} alt="Aaron Mullens Realtor Logo with Name and Home Picture" /></a>
            <nav>
                <a href="/home">Home</a>
                <a href="/buying">Buying</a>
                <a href="/selling">Selling</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
            </nav>
            <ul>
                <a href='youtube.com' target="_blank" rel="noreferrer"><img src={YouTube} alt='YouTube Logo' /></a>
                <a href='instagram.com' target="_blank" rel="noreferrer"><img src={Instagram} alt='Instagram Logo' /></a>
                <a href='facebook.com' target="_blank" rel="noreferrer"><img src={Facebook} alt='Facebook Logo' /></a>
                <a href='tel:512-270-9755' title='Contact Number'><img src={Phone} alt='Phone Symbol' /></a>
                <a href='mailto:aaron@thegrooverealty.com' title='Email'><img src={Email} alt='Email Symbol' /></a>
            </ul>
        </header>
    )
}