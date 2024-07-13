import React from 'react'
import { Link } from 'react-router-dom'

const List = ({href , text, className }) => {
  return (
 <li>
    <Link className={` block font-DM text-[#767676] text-sm font-normal hover:text-black transition-all duration-300 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-slate-700 relative hover:after:w-full after:transition-all after:duration-300
     ${className}`}
     to={href}>
        {text}
    </Link>
 </li>
  )
}

export default List
