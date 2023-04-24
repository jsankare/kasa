import React from "react";
import style from './slider.module.css';
import slideLeft from '../../assets/arrowleft.png';
import slideRight from '../../assets/arrowright.png';
import { useState } from 'react';

const Slider = ({sliderImage = []}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        // useState(prevState => prevState +1)
        setCurrentIndex(currentIndex + 1);
        if(currentIndex === sliderImage.length - 1)
            setCurrentIndex(0)
    };

    const previousSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(sliderImage?.length - 1)
    };

    console.log(`sliderImage: ${sliderImage}`);
    console.log(`currentIndex: ${currentIndex}`);
    
    return (
        <section style={{backgroundImage : `url(${sliderImage?.[currentIndex]})`}} className='carousel'>
            {sliderImage?.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={slideLeft} 
                        alt="show previous slider" 
                        onClick={previousSlide}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={slideRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {sliderImage?.length}</p>
                </>
            } 
        </section>
    );
}

export default Slider;