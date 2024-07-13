import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { RiArrowRightSFill } from "react-icons/ri";


const ProductFilter = ({catTitle,}) => {

    let [show,setshow]= useState(false)
    let [showheading,setshowheading]= useState(false)
    let [show2,setshow2]= useState(false)

  return (
    <div>
       <h3 onClick={()=> setshowheading(!showheading)} className='font-DM font-bold text-xl text-[#262626]  mb-8 flex justify-between'>{catTitle}
       <RiArrowRightSFill  className={` transition-all duration-300 ${showheading?"rotate-90":"rotate-0 "}`}/>
    </h3>

 {showheading &&(<ul className='flex flex-col gap-y-5'>
 <li className='relative overflow-hidden pb-5 border-b border-[#F0F0F0]'  onClick={()=> setshow(!show)}>
   <Link className='flex justify-between relative text-base leading-7 text-[#767676]'> <span>Category 1</span>  <FaPlus className={`absolute right-0 top-1/2 transition-all duration-300 translate-y-[-50%] ${show?"opacity-0 invisible ":" opacity-100 visible rotate-90"}`} />
   <FaMinus  className={`absolute right-0 top-1/2 translate-y-[-50%] ${show?"opacity-100 visible":"opacity-0 invisible"}`} /> </Link>

<ul
className={` transition-all duration-300  flex flex-col gap-5 ${show?"static":"absolute  translate-x-[-100%] invisible"}`}>
 <li> 
   <Link className='text-base leading-7 text-[#767676] pl-4 block'>Sub Category </Link> </li>
 <li> <Link className='text-base leading-7 text-[#767676] pl-4 block'>Sub Category </Link> </li>
 <li> <Link className='text-base leading-7 text-[#767676] pl-4 block'>Sub Category </Link> </li>
 <li> <Link className='text-base leading-7 text-[#767676] pl-4 block'>Sub Category </Link>
  </li>
</ul>

 </li>


 <li  className='pb-5 border-b border-[#F0F0F0]'>
   <Link className='flex justify-between relative text-base leading-7 text-[#767676]'> <span>Category 2</span> 
    </Link>
    </li>

    <li className='relative overflow-hidden pb-5 border-b border-[#F0F0F0]'  onClick={()=> setshow2(!show2)}>
   <Link className='flex justify-between relative text-base leading-7 text-[#767676]'> <span>Category 3</span>  <FaPlus className={`absolute right-0 top-1/2 transition-all duration-300 translate-y-[-50%] ${show2?"opacity-0 invisible ":" opacity-100 visible rotate-90"}`} />
   <FaMinus  className={`absolute right-0 top-1/2 translate-y-[-50%] ${show2?"opacity-100 visible":"opacity-0 invisible"}`} /> </Link>

<ul
className={` transition-all duration-300 flex flex-col gap-y-5 ${show2?"static":"absolute  translate-x-[-100%] invisible"}`}>
 <li> 
   <Link className='text-base leading-7 text-[#767676] pl-4 block'>Sub Category </Link> </li>
 <li> <Link className='text-base leading-7 text-[#767676] pl-4 block'>Sub Category </Link> </li>
 <li> <Link className='text-base leading-7 text-[#767676] pl-4 block'>Sub Category </Link> </li>
 <li> <Link className='text-base leading-7 text-[#767676] pl-4 block'>Sub Category </Link>
  </li>
</ul>

 </li>

 <li  className='pb-5 border-b border-[#F0F0F0]'>
   <Link className='flex justify-between relative text-base leading-7 text-[#767676]'> <span>Category 4</span> 
    </Link>
    </li>
    
    <li  className='pb-5 border-b border-[#F0F0F0]'>
   <Link className='flex justify-between relative text-base leading-7 text-[#767676]'> <span>Category 5</span> 
    </Link>
    </li>

</ul>)}
    </div>
  )
}

export default ProductFilter
