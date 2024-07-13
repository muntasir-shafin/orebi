import React from 'react'
import Container from './layer/Container'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaVanShuttle } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";


const BannerBottom = () => {
  return (
    <div className='border-b border-[##D8D8D8]'>
      <Container className="py-0 lg:py-7 flex justify-between items-center">
       <p className='flex items-center gap-x-2 lg:text-base text-[12px] text-[#6D6D6D]'>
       <PiNumberTwoBold className='text-black lg:text-2xl text-xl' />
       Two years warranty
       </p>

       <p className='flex items-center gap-x-2 lg:text-base text-[12px] text-[#6D6D6D]'>
       <FaVanShuttle className='text-black lg:text-2xl text-xl ' />
       Free shipping
       </p>

       <p className='flex items-center gap-x-2 lg:text-base text-[12px] text-[#6D6D6D]'>
       <TbReload className='text-black lg:text-2xl text-xl ' />
       Return policy in 30 days
       </p>
      </Container>
    </div>
  )
}

export default BannerBottom
