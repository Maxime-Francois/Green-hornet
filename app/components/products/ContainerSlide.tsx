'use client'

import React from 'react';
import Slideshow from '../Slideshow';
import { products } from '../../utils/products';
import { Button } from '@material-tailwind/react';

interface ContainerSlideProps {
  category: string;
}

const ContainerSlide: React.FC<ContainerSlideProps> = ({ category }) => {
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className='flex justify-center flex-col m-8 bg-weedColor border rounded-xl shadow-xl container-product-slider'>
      <div className='flex justify-center flex-col p-8 '>
        <h3 className='text-2xl font-sans tracking-wider text-white pb-5 title-slider'>
          {category.toUpperCase()} CBD
        </h3>

        <Slideshow productData={filteredProducts} />

        <div className='flex justify-center mt-8'>
          <Button className='bg-white text-black hover:shadow-xl ease-in-out duration-300 hover:scale-110'>
            VOIR TOUTE LA COLLECTION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContainerSlide;