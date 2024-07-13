import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import List from './layer/List'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
 let [show , setShow] = useState(false);

 useEffect(()=>{
  function size(){
    if(window.innerWidth < 1024){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  
  size();

  window.addEventListener("resize", size)
 },[])


  let fdr = () =>{
    setShow(!show)
  } 

  return (
    <nav>
        <Container className="flex items-center justify-between lg:py-8 py-4 relative">
            <div className="logo pl-3 lg:pl-0">
              <Image href="" src="src/assets/Logo.png" alt="src/assets/Logo.png"/>
            </div>

            
            <div className={`menu  transition-all duration-500 py-7 lg:py-0 px-2 lg:px-0 absolute z-10 left-0 top-full lg:static bg-[#5f95ccd8] lg:bg-transparent flex w-full justify-center ${show?"opacity-100 visible":"opacity-0 invisible"}`}>
            <ul className='flex items-center flex-col gap-2 lg:flex-row gap-x-10'>
              <List className="after:!w-full" href="" text="Home" />
              <List href="/products" text="Shop" />
              <List href="" text="About" />
              <List href="" text="Contacts" />
              <List href="" text="Journal" />
            </ul>
           </div>
        
            <div className='pr-3'>
            <FaBars onClick={fdr} className='lg:hidden '/>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar
