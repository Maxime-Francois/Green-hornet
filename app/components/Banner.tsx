'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselItems = [
    '/images/carousel/banner1.jpg',
    '/images/carousel/banner2.jpg',
  ];

  const handlePrevClick = () => {
    setActiveItem((prevItem) => (prevItem === 0 ? carouselItems.length - 1 : prevItem - 1));
  };

   const handleNextClick = useCallback(() => {
    setActiveItem((prevItem) => (prevItem === carouselItems.length - 1 ? 0 : prevItem + 1));
  }, [carouselItems.length]);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 4000); // Change slide every 4 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [activeItem, handleNextClick]); // Ajoutez handleNextClick au tableau des dépendances

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-96 overflow-hidden md:h-96">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              activeItem === index ? 'opacity-100' : 'opacity-0'
            } absolute top-0 left-0 w-full h-full transition-opacity`}
            data-carousel-item
          >
            <Image
              src={item}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        {/* Previous button SVG */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        {/* Next button SVG */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Banner;