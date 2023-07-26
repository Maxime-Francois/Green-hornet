'use client'
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { flowerList } from '../../datas/flowerList';


const FlowerSlider: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
     
      <Slider {...sliderSettings}>
        {flowerList.map((flower) => (
          <div key={flower.id} className="slider-image-container">
            <Image src={flower.cover.src} alt={flower.name} width={flower.width} height={flower.height} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlowerSlider;