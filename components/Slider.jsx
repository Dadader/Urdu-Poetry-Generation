import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div
      id="gallery"
      className="max-w-[1240px] mx-auto"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <h1 className="text-2xl font-bold text-center p-4">Poets</h1>
      <div className="relative flex justify-center p-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === current ? "opacity-[1] ease-in duration-1000" : "opacity-0"}
          >
            {showArrows && (
              <>
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]"
                  size={70}
                />
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]"
                  size={70}
                />
              </>
            )}
            {index === current && (
              <div className="grid grid-cols-2 gap-4">
              <Image
                src={slide.image}
                alt="/"
                width="1440"
                height="600"
                objectFit="cover"
              />
              <div>
                <h1>{slide.head}</h1>
              </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Slider;