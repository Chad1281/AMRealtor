import React from 'react';

import AaronMullens from '../../assets/images/logos/AMHeaderLogo.png';

import './Header.css';

export default function Header() {

    return(
        <header>
            <a href="/" ><img id="Aaron Mullens Realtor" src={AaronMullens} alt="Aaron Mullens Realtor Logo" /></a>
            <nav>
                <a href="/">Home</a>
                <a href="/search">Property Search</a>
                <a href="/sell">Sell</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
            </nav>
        </header>
    )
}