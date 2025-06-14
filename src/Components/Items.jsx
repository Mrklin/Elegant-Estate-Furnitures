import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='w-[250px] hover:transform-[scale(1.05)] hover:transition-[0.6s] '>
       <Link to={`/products/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt={`${props.name}`} /> </Link> 
        <p className=' my-1.5 mx-0 '>{props.name}</p>
        <div className='flex gap-5'>
            <div className=' font-semibold text-[#374151] text-[18px]'>${props.new_price}</div>
            <div className='font-medium text-[#8c8c8c] line-through text-[18px]'>${props.old_price}</div>
        </div>
    </div>
  )
}

export default Items