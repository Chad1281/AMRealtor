import React from 'react';

import AaronMullens from '../../assets/images/AMLogo.png';

export default function TallHeader() {

    return(
        <header>
            <a href="/home" ><img id="Aaron Mullens Realtor" src={AaronMullens} alt="Aaron Mullens Realtor Logo with Name and Home Picture" /></a>
        </header>
    )
}