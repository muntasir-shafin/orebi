import React, { useEffect, useRef } from 'react'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Container from './layer/Container'
import List from './layer/List';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import cartImag from '../assets/cart_mg.jpg';
import Button from './layer/Button';

const Searchbar = () => {
  let [cat,setCat] = useState(false)
  let [cart,setCart] = useState(false) 

  let catRef = useRef()
  let cartRef = useRef()
   

    


    useEffect(()=>{
    document.body.addEventListener("click" , (element)=>{
      if(catRef.current.contains(element.target)){
        setCat(true)
      }else{
        setCat(false)
      }
    })
    },[])

    
    useEffect(()=>{
    document.body.addEventListener("click" , (element)=>{
      if(cartRef.current.contains(element.target)){
        setCart(true)
      }else{
        setCart(false)
      }
    })
    },[])

  return (
    <div className='lg:py-5 pt-3 bg-[#F5F5F3]'>
      <Container className="flex justify-between lg:items-center  flex-row flex-wrap">
        <div ref={catRef} className='relative lg:order-1 order-1 pl-3 lg:pl-0'>
          <p className='flex items-center gap-x-2 font-DM text-sm lg:text-base text-[#262626]'><HiOutlineBars3BottomLeft /> Shop by Category
          </p>

         {
          cat && (
            <ul className='absolute translate-y-[23px] top-full left-0  bg-[#2B2B2B] z-10  lg:w-[263px] w-28'>   
        <List className='hover:after:w-0 text-white/70 hover:text-white lg:py-4  font-DM hover:font-bold py-2 lg:px-5 px-3  lg:hover:ml-3 border-b border-[#828181]' text="Accesories"/>
        <List className='hover:after:w-0 text-white/70 hover:text-white lg:py-4 py-2 font-DM hover:font-bold lg:px-5 px-3  lg:hover:ml-3 border-b border-[#828181]' text="Furniture"/>
        <List className='hover:after:w-0 text-white/70 hover:text-white lg:py-4 py-2 font-DM hover:font-bold lg:px-5 px-3  lg:hover:ml-3 border-b border-[#828181]' text="Electronics"/>
        <List className='hover:after:w-0 text-white/70 hover:text-white lg:py-4 py-2 font-DM hover:font-bold lg:px-5 px-3  lg:hover:ml-3 border-b border-[#828181]' text="Clothes"/>
        <List className='hover:after:w-0 text-white/70 hover:text-white lg:py-4 border-b border-[#828181] py-2 font-DM hover:font-bold lg:px-5 px-3  lg:hover:ml-3 ' text="Bags"/>
        <List className='hover:after:w-0 text-white/70 hover:text-white lg:py-4 py-2 font-DM hover:font-bold lg:px-5 px-3  lg:hover:ml-3 ' text="Home appliances"/>
          </ul> 
          )
         }

         
          </div>

        <div className='relative lg:order-2  order-3 w-full lg:w-auto mt-3 lg:mt-0'>
          <input type="text" placeholder='Search Products' className=' text-sm lg:text-base lg:w-[601px] w-full lg:py-4 py-2 lg:px-5 px-3 bg-white border-0 outline-none border-b border-[#F5F5F3]' />
          <IoSearchSharp className='absolute right-5 top-1/2 translate-y-[-50%]' />
        </div>
        <div className='flex items-center gap-x-10 lg:order-3  order-2 pr-3 lg:pr-0'>
          <div className='flex items-center gap-x-1'>
          <FaUser />
          <FaCaretDown />
          </div>
          <div ref={cartRef} className='relative'>
          <FaShoppingCart />
          {cart&&(<div className="cart w-[360px] absolute right-0 top-full translate-y-[15px] z-10">
            <div className="top p-5 bg-[#F5F5F3] flex justify-between items-center">
              <div className="image w-20 h-20 ">
                <img className='border-gray-300' src={cartImag} alt="" />
              </div>
              <div className="text-sm font-DM font-bold text-[#262626]">
                <h3>Black Smart Watch</h3>
                <p>$44.00</p>
              </div>
              <div className="cross font-bold">
              <RxCross2 />
              </div>
            </div>
            <div className="bottom p-5 pt-3.5  bg-[#FFFFFF]">
            <h2 className='font-DM text-base text-[#767676]'>Subtotal: <span className='font-DM font-bold text-base text-black'> $44.00</span></h2>
            <div className="button pt-3 flex gap-x-5">
              <Button text="View Cart"/>
              <Button text="Checkout"/>
              
            </div>
            </div>
          </div>)}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Searchbar
