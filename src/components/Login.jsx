import React from 'react'
import Container from './layer/Container'
import Breadcrumb from './Breadcrumb'
import Button from './layer/Button'

const Login = () => {
  return (
    <div>
      <Container>
      <Breadcrumb title="Login" text="Login"/>
        <div className='border-b-2 border-[#F0F0F0] mb-[57px]'>
        <p className='max-w-[644px] mt-32 leading-7 pb-16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni qui sed blanditiis ea maxime expedita ipsum suscipit exercitationem nam.</p>
        </div>

        <div className="main mb-[70px] ">
         <h2 className=' mb-10 text-[39px] font-bold text-[#262626]'>
         Returning Customer
        </h2>  
   
   <div className=' border-b-2 border-[#F0F0F0]'>
   <div className="label flex flex-wrap gap-10 pb-7">

<div 
   className='w-[507px] flex flex-col relative border-b-2 border-[#F0F0F0]'>  
   <label
   className='text-base font-bold text-[#262626]' 
    htmlFor="">Email address</label>
   <input className='pt-[33px] pb-4 outline-none ' type="text" placeholder='mail' />
</div>

   <div 
   className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
   <label
   className='text-base font-bold text-[#262626]' 
    htmlFor=""> Password</label>
    <div className='flex justify-between items-center'>
    <input className='pt-[33px] pb-4 outline-none  ' type="password" placeholder='Password' />
  </div>
  </div>
   
 </div>
 <div className='pb-[70px]'>
 <Button className="w-[200px] " text="Log in"/>
 </div>
</div>

<div className=''>
    <h2 className='text-[39px] mt-14 font-bold text-[#262626]'>New Customer</h2>
    <p className='max-w-[644px] pt-[38px] pb-[51px] leading-7 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
    
        <Button className="w-[200px]" text="Continue"/>
    
   </div>
   </div>
   

      </Container>
    </div>
  )
}

export default Login
