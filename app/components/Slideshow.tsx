import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./products/ProductCard";

interface SlideshowProps {
  productData: Products[];
}

const Slideshow: React.FC<SlideshowProps> = ({ productData }) => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  const calculateSlidesToShow = (category: string) => {
    const productsInCategory = productData.filter((product) => product.category === category);
    return Math.min(productsInCategory.length, 4);
  };

  useEffect(() => {
    const categories = Array.from(new Set(productData.map((product) => product.category)));
    let totalSlides = 0;

    categories.forEach((category) => {
      const slides = calculateSlidesToShow(category);
      totalSlides += slides;
    });

    setSlidesToShow(totalSlides);
  }, [productData]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Slider>
  );
};

export default Slideshow;