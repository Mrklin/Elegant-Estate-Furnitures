import React from 'react'
import hand_icon from "../assets/Images/hand_icon.png"
import arrow_icon from "../assets/Images/arrow.png"
import hero_image from "../assets/Images/hero_image.png"

const Hero = () => {
  return (
    <div className='h-svh custom_bg flex'>
        <div className='flex flex-1 flex-col justify-center gap-5 pl-[180px] 
        leading-1.5'>
            <h2 className='text-[#090909] text-2xl font-semibold'>
            NEW ARRIVALS ONLY</h2>
            <div className='text-[#171717] text-7xl font-bold '>
                <div className='flex items-center gap-5'>
                    <p>new</p>
                    <img src={hand_icon} alt='hand_icon' className='w-[105px]'/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='flex justify-center items-center gap-3.5 w-[310px] h-[60px] mt-[30px]
             bg-[#ff4141] rounded-full text-white text-[22px] font-medium'>
                <div>Latest Collections</div>
                <img src={arrow_icon} alt='arrow_icon' />
            </div>
        </div>


        <div className='flex flex-1 justify-center items-center'>
            <img src={hero_image} alt='hero_image' className='w-[78%]'/>
        </div>
    </div>
  )
}

export default Hero