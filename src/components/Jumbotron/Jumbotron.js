import React from 'react';

import Groove from '../../assets/images/jumbotron/groove.webp';
import Sold from '../../assets/images/jumbotron/sold.webp';
import Fireplace from '../../assets/images/jumbotron/fireplace.webp';
import Houses from '../../assets/images/jumbotron/houses.webp';
import Living from '../../assets/images/jumbotron/living.webp';
import House from '../../assets/images/jumbotron/house.webp';

import './Jumbotron.css'

export default function Jumbotron() {

    const images = [Sold, Fireplace, Houses, Groove, Living, House];
    const imgAlts = [
        'Aaron holding sold sign with buyers',
        'Living room with a fireplace',
        'Row of two story townhouses',
        'Aaron holding sign that says The Groove Realty with buyers',
        'Living room with a fireplace',
        'Front of a two story house'
    ]

    var i = 0;

    const jumboImg = images[i];
    const jumboImgAlt = imgAlts[i];

    return(
        <div className='jumbotron'>
            <div id='jumboContainer'>
                <p>Start your search</p>
                <img src={jumboImg} alt={jumboImgAlt} />
            </div>
            
        </div>
    )
}