import React, { useState } from 'react';
import ArrowLeft from '../../assets/arrow-left.png'; // Corrected import
import ArrowRight from '../../assets/arrow-right.png'; // Corrected import

import '../carousel/_carousel.scss';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0); // State for the current image index

    const nextImage = () => { // Go to the next image
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const prevImage = () => { // Go to the previous image
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
        
        <section className='ContSlider'>
            {images.length > 1 && (
                <>
                    {/* Left arrow: Clicking this should take you to the previous image */}
                    <img className='ArrowSliderLeft' src={ArrowLeft} alt="Previous" onClick={prevImage} />
                    
                    {/* Right arrow: Clicking this should take you to the next image */}
                    <img className='ArrowSliderRight' src={ArrowRight} alt="Next" onClick={nextImage} />

                    {/* Image counter */}
                    <p className='CountSlider'>{currentIndex + 1} / {images.length}</p> 
                </>
            )}
            
            {/* Current image displayed */}
            <img className='ImgSlider' src={images[currentIndex]} alt="Current view" />
        </section>
    );
}

export default Carousel;


