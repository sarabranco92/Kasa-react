import React, { useState } from 'react';
import ArrowLeft from '../../assets/arrow-left.png'; 
import ArrowRight from '../../assets/arrow-right.png'; 

import '../carousel/_carousel.scss';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0); 

    const nextImage = () => { 
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const prevImage = () => { 
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
        
        <section className='ContSlider'>
            {images.length > 1 && (
                <>
                   
                    <img className='ArrowSliderLeft' src={ArrowLeft} alt="Previous" onClick={prevImage} />
                    
                    
                    <img className='ArrowSliderRight' src={ArrowRight} alt="Next" onClick={nextImage} />

                   
                    <p className='CountSlider'>{currentIndex + 1} / {images.length}</p> 
                </>
            )}
            <img className='ImgSlider' src={images[currentIndex]} alt="Current view" />
        </section>
    );
}

export default Carousel;


