import React from 'react'
import { FaAngleRight } from "react-icons/fa";
const Breadcrumb = ({title , text}) => {
  return (
    <>
      <h2 className='text-[49px] font-bold'>{title}</h2>
       <p className='flex items-center  mt-3 capitalize'>Home <FaAngleRight className='mt-1'/> <span>{window.location.pathname.split("/")[0]}</span>{text}</p>
    </>
  )
}

export default Breadcrumb
