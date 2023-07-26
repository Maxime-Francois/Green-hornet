'use client'
import React from 'react'
import Slideshow from './Slideshow'
import { flowerList } from '../../datas/flowerList';
import { Button } from '@material-tailwind/react';

const Resine = () => {
  return (
    <div className='flex justify-center flex-col m-8 bg-shitColor border rounded-xl shadow-xl container-product-slider'>
       <div className='flex justify-center flex-col p-8 '>
        <h3 className='text-2xl font-sans tracking-wider text-white pb-5 title-slider'>
            RÉSINES CBD
        </h3>
        
        <Slideshow flowerData={flowerList} />
        <div className='flex justify-center mt-8'>
          <Button className='bg-white text-black hover:shadow-xl ease-in-out duration-300 hover:scale-110 '>VOIRE TOUTE LA COLLECTION</Button>
          </div>
       </div>
    </div>
  )
}

export default Resine;