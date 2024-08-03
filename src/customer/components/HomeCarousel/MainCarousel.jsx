// eslint-disable-next-line no-unused-vars
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData.js';
import './MainCarousel.css';




const MainCarousel = () => {
const items = MainCarouselData.map((item,index) =>
    <div className="carousel-item" key={index}>
        <img className='carousel-image cursor-pointer' role='presentation' src={item.image} alt={item.alt} />
        <div className="overlay-text">{item.text}</div>
    </div>
)
    return (
    <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
)}

export default MainCarousel