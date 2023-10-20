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
    const productsInCategory = productData.filter(
      (product) => product.category === category
    );
    return Math.min(productsInCategory.length, 4);
  };

  useEffect(() => {
    const categories = Array.from(
      new Set(productData.map((product) => product.category))
    );
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
    responsive: [
      {
        breakpoint: 1024, // par exemple, vous pouvez définir le point de rupture
        settings: {
          slidesToShow: 3, // ajustez le nombre de diapositives pour une plus grande résolution
        },
      },
      {
        breakpoint: 768, // un autre point de rupture pour les résolutions plus petites
        settings: {
          slidesToShow: 2, // ajustez le nombre de diapositives pour une résolution plus petite
        },
      },
      {
        breakpoint: 540, // un autre point de rupture pour les résolutions plus petites
        settings: {
          slidesToShow: 1, // ajustez le nombre de diapositives pour une résolution plus petite
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {productData.map((product) => (
        <div key={product.id} className="px-4 my-8 overflow-x-clip">
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
