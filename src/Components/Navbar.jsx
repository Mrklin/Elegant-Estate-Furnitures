import React, { useState } from 'react'
import logo from "../assets/Images/logo.png"
import cart_icon from "../assets/Images/cart_icon.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu]= useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);


  return (
    <div className='flex flex-row justify-around p-[.8rem] shadow'>
        <div className='flex items-center gap-2.5'>
            <img className='w-[70%]' src={logo} alt='logo' />
            <p className=' text-3xl font-semibold text-[#171717]'>Shopee</p>
        </div>
        <ul className='flex items-center list-none text-xl gap-12 text-[#626262] font-semibold'>
            <li className='cursor-pointer ' onClick={()=> setMenu('shop')}> <Link to='/'>Shop</Link>  {menu==='shop' ? <hr className='hr'/>: <></>}</li>
            <li className='cursor-pointer ' onClick={()=> setMenu('men')}> <Link to='/men'>Men</Link>  {menu==='men' ? <hr className='hr'/>: <></>}</li>
            <li className='cursor-pointer ' onClick={()=> setMenu('women')}> <Link to='/women'>Women</Link> {menu==='women' ? <hr className='hr'/>: <></>}</li>
            <li className='cursor-pointer ' onClick={()=> setMenu('kids')}> <Link to='/kids'>Kids</Link> {menu==='kids' ? <hr className='hr'/>: <></>}</li>
        </ul>
        <div className='flex items-center gap-11'>
           <Link to='/login'> <button className=' w-[148px] h-[38px] outline-none rounded-[75px] border-2
            font-medium bg-white text-[#515151] cursor-pointer text-xl
             border-black active:bg-[#f3f3f3]' onClick={()=> setMenu('login')}>{menu==='login' ? <hr className='hidden'/> : <></>}Login</button> </Link> 

             <div className='flex flex-row '>
                    <Link to='/cart'>
                    <img  onClick={()=> setMenu('cart')} className={`${menu === 'cart' ? <hr className='hidden'/> : <></>} cursor-pointer`} src={cart_icon} alt='cart_icon'/>
                    </Link>
                    <div className=' w-4 h-4 flex justify-center items-center rounded-2xl bg-red-600
                     text-white text-[12px]'>{getTotalCartItems()}</div>
                
             </div>
            
        </div>
    </div>
  )
}

export default Navbar