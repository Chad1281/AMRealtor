import React, { useEffect, useState } from 'react';

import Groove from '../../assets/images/jumbotron/groove.webp';
import Sold from '../../assets/images/jumbotron/sold.webp';
import Fireplace from '../../assets/images/jumbotron/fireplace.webp';
import Houses from '../../assets/images/jumbotron/houses.webp';
import Living from '../../assets/images/jumbotron/living.webp';
import House from '../../assets/images/jumbotron/house.webp';

import './Carousel.css';

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Sold, Fireplace, Houses, Groove, Living, House];
    const imgAlts = [
        'Aaron holding sold sign with buyers',
        'Living room with a fireplace',
        'Row of two story townhouses',
        'Aaron holding sign that says The Groove Realty with buyers',
        'Living room with a fireplace',
        'Front of a two story house'
    ]

    let carouselImg = images[currentIndex];
    let carouselImgAlt = imgAlts[currentIndex];

    useEffect(() => {
        const interval = setInterval(changeIndex, 6000);
        return () => clearInterval(interval);
    }) 

    function changeIndex() {
        const isLastIndex = currentIndex === images.length - 1;
        let newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return(
        <div className='carousel'>
            <img className='carouselImgs' src={carouselImg} alt={carouselImgAlt} />
        </div>
    )
}