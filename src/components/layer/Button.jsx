import React from 'react'

const Button = ({text , className , onClick}) => {
  return (
    <button
    onClick={onClick}
    className={`w-1/2 py-4 bg-[#262626] font-DM text-white font-bold text-sm  border border-transparent hover:border-[#262626] hover:bg-white hover:text-[#262626] transition-all duration-300 ${className}`}>{text}</button>
  )
}

export default Button
