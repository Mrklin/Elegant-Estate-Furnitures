import React from 'react'
import data_product from '../assets/Images/data'
import Items from './Items'

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-2.5 h-[90svh] mt-10'>
        <h1 className='text-[#171717] text-[50px]'>POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
        <div className='mt-[50px] flex gap-7'>
            {data_product.map((item, index) =>{
                return <Items key={index} 
                         id={item.id} 
                         name={item.name} 
                         image={item.image} 
                         new_price={item.new_price} 
                         old_price={item.old_price}    
                         />
            })}
        </div>

    </div>
  )
}

export default Popular