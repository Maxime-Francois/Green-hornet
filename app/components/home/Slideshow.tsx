'use client'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";

interface Flower {
  name: string;
  category: string;
  id: string;
  light: number;
  water: number;
  cover: StaticImageData;
  price: number;
}

interface SlideshowProps {
  flowerData: Flower[];
}

const Slideshow: React.FC<SlideshowProps> = ({ flowerData }) => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    // Mettre à jour le nombre de cartes en fonction de la taille de l'écran
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1440) {
        setSlidesToShow(4);
      } else if (screenWidth >= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize(); // Mettre à jour le nombre de cartes lors du premier rendu

    // Écouter les événements de redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {flowerData.map((flower) => (
        <div key={flower.id} className="px-4 ">
          <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl ease-in-out duration-300">
            <Image
              src={flower.cover}
              alt={flower.name}
              className="object-cover w-full h-40 mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">{flower.name}</h2>
            <p className="text-gray-600 mb-2">{flower.category}</p>
            <p className="text-gray-600 mb-2">
              Light: {flower.light}, Water: {flower.water}
            </p>
            <p className="text-gray-600 mb-2">${flower.price}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;