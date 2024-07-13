import React from 'react'
import Container from './layer/Container'
import { Link } from 'react-router-dom'
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import Image from './layer/Image';
import footerlogo from '../assets/footer_logo.png'


const Footer = () => {
  return (
  <div className='pt-14 pb-[52px] bg-[#F5F5F3] mt-[106px]'>
     <Container className="flex justify-between flex-wrap px-3 lg:px-0">
    <div className="left ">
    <div className="menu flex-warp lg:flex  lg:gap-x-36 gap-x-6">
    <ul>
            <h3 className='font-DM font-bold text-base text-[#262626]'> MENU</h3>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Home</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'> Shop</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>About</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Home</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Journal</Link>
            </li>
        </ul>

        <ul>
            <h3 className='font-DM font-bold text-base text-[#262626]'>  SHOP</h3>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 1</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'> Category 2</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 3</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 4</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Category 5</Link>
            </li>
        </ul>

        <ul>
            <h3 className='font-DM font-bold text-base text-[#262626]'> HELP</h3>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Privacy Policy</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'> Terms & Conditions</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Special E-shop</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Shipping</Link>
            </li>
            <li>
                <Link className='font-DM font-normal text-sm text-[#6D6D6D]'>Secure Payments</Link>
            </li>
        </ul>

        
            <ul>
            <li>
                <Link className='font-DM font-bold text-[16px] text-[#262626]' to='tel:05587035165'>(052) 611-5711</Link>
            </li>
            <li>
                <Link className='font-DM font-bold text-[16px] text-[#262626]' to='#'>company@domain.com </Link>
            </li>
            <p className=' text-[#6D6D6D] pt-4'>75 Crescent Ave. Quakertown, PA 18951</p>
            </ul>

             <Image className='md:hidden block w-20' src={footerlogo}/>
    </div>
  <div className="icon flex mt-16 gap-x-6">
  <FaFacebookF />
  <FaLinkedinIn />
  <FaInstagram />
  </div>
    </div>
    <div className="right flex flex-col justify-between">
    <Image className='hidden md:block' src={footerlogo}/>
        <p className='text-[#6D6D6D] text-sm font-DM pt-3 lg:pt-0 '>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
    </div>
   </Container>
  </div>
  )
}






// (052) 611-5711
// company@domain.com
// 575 Crescent Ave. Quakertown, PA 18951

export default Footer
