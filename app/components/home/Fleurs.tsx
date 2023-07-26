import React from 'react'
import FlowerSlider from './FlowerSlider'

const Fleurs = () => {
  return (
    <div className='flex justify-center flex-col m-8 bg-green-400 border rounded-xl shadow-xl'>
       <div className='flex justify-center flex-col p-8 '>
        <h1 className='text-2xl font-sans tracking-wider text-white pb-5'>
            FLEURS CBD
        </h1>
        
        <FlowerSlider/>
        

       </div>
    </div>
  )
}

export default Fleurs