import { useState, useEffect } from 'react';
import { SliderData } from '../assets/Slidedata.js';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ImageSlider = ({ slides }) => {
  
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2500); 

    return () => {
      clearInterval(intervalId);
    };
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <IoIosArrowBack className='left-arrow' onClick={prevSlide} />
      <IoIosArrowForward className='right-arrow' onClick={nextSlide} />
      { 
      SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && <img src={slide.image} className='image' />}
          </div>
        );
      })
      }
    </section>
  );
};

export default ImageSlider;

