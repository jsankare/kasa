import React from "react";
import style from "./slider.module.css";
import slideLeft from '../../assets/arrowleft.png';
import slideRight from '../../assets/arrowright.png';
import { useState } from 'react';
import PropTypes from 'prop-types'

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
    
    return (
        <section className={style.slider}>
            <img src={sliderImage?.[currentIndex]} className={style.flat} alt="" data-testid='current' />
            {sliderImage?.length > 1 && 
                <>
                    <img 
                        className={style.sliderLeftArrow}
                        src={slideLeft} 
                        alt="show previous slider" 
                        data-testid='previous'
                        onClick={previousSlide}
                    />
                    <img 
                        className={style.sliderRightArrow}
                        src={slideRight} 
                        alt="show next slider" 
                        data-testid='next'
                        onClick={nextSlide}
                    />
                    <p className={style.counter}>{currentIndex + 1} / {sliderImage?.length}</p>
                </>
            } 
        </section>
    );
}

Slider.propTypes = {
    sliderImage: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Slider;