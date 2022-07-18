import React from 'react';

import Carousel from '../Carousel/Carousel';

import './Jumbotron.css'

export default function Jumbotron() {    

    return(
        <div className='jumbotron'>
            <div id='jumboContainer'>
                <div id='side'>Start your search</div>
                <Carousel />
            </div>            
        </div>
    )
}