import React from 'react'
import p1 from "../../assets/p1.jpg"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";

const ProductItem = ({offer , className}) => {
  return (
    <div className={`w-[370px] group ${className}`}>
      <div className="image w-full h-[370px] bg-slate-300 relative overflow-hidden">
        <img className='w-full  h-full object-cover' src={p1} alt="" />
        <button className={`absolute left-5 top-5 bg-[#262626] text-white ${offer ?" px-7":"px-0"}  py-2`}>
    {offer}
        </button>
        <div className="overlay w-full absolute bg-white bottom-0 translate-y-[100%] left-0  group-hover:translate-y-[0] transition-all duration-300">
            <ul className='pr-7'>
         <li className='flex items-center  lg:py-3 py-1 pr-2 lg:pr-0 lg:text-xl text-sm text-[#7c7c7c] hover:text-black hover:font-semibold justify-end gap-4'> Add to Wish List <FaHeart /> </li>
         <li className='flex items-center  lg:py-3 py-1 pr-2 lg:pr-0 lg:text-xl text-sm text-[#7c7c7c] hover:text-black hover:font-semibold justify-end gap-4'> Compare <TfiReload /> </li>
        <li className='flex items-center  lg:py-3 py-1 pr-2 lg:pr-0 lg:text-xl text-sm text-[#7c7c7c] hover:text-black hover:font-semibold justify-end gap-4'> Add to Cart <FaShoppingCart /></li>    
            </ul>
        </div>
      </div>
      <div className="text lg:p-3  lg:pr-0 pr-10">
       <h2 className='flex justify-between font-bold lg:text-[18px] text-sm'>
        Basic Crew Neck Tee <p className='text-[#767676] font-thin'>$44.00</p>
        </h2>
       <p className='pt-2'>Black</p>
      </div>
    </div>
  )
}

export default ProductItem
