import React from 'react';

import Groove from '../../assets/images/jumbotron/groove.webp';
import Sold from '../../assets/images/jumbotron/sold.webp';
import Fireplace from '../../assets/images/jumbotron/fireplace.webp';
import Houses from '../../assets/images/jumbotron/houses.webp';
import Living from '../../assets/images/jumbotron/living.webp';
import House from '../../assets/images/jumbotron/house.webp';

import './Jumbotron.css'

export default function Jumbotron() {

    return(
        <div className='jumbotron'>
            <img id="mySlides" src={Houses} alt='Row of two story townhouses' />
            <img id="mySlides" src={Sold} alt='Aaron holding sold sign with buyers' />
            <img id="mySlides" src={Fireplace} alt='Living room with a fireplace' />
            <img id="mySlides" src={Groove} alt='Aaron holding sign that says The Groove Realty with buyers' />
            <img id="mySlides" src={Living} alt='Living room with stairs and kitchen in background' />
            <img id="mySlides" src={House} alt='Front of a two story house' />
        </div>
    )
}