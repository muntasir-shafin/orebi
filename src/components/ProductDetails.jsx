import React from 'react'
import Container from './layer/Container'
import Breadcrumb from './Breadcrumb'
import Slider from "react-slick";
import  './layer/page/ProductDetails.css'
import star from '../assets/Stars.png'
import { HiMinusSmall } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import Button from './layer/Button';



const ProductDetails = () => {
 var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div >
              <ul className='m-0 flex gap-x-3'> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "100px",
                height:"100px",
                color: "blue",
                border: "1px blue solid"
              }}
            >
              {/* {i + 1} */}
            </div>
          )
      };

  return (
    <div>
      <Container>
        <Breadcrumb title="Product Details" text="Product Details"/>
        <div className="main flex justify-between ">
            <div className="child w-[780px] h-[780px] border">
            <Slider {...settings}>
            <div className='w-full h-[780px] bg-lime-200'>
                <h3 className='text-4xl'>1</h3>
            </div>
            <div className='w-full h-[780px] bg-lime-200'>
                <h3 className='text-4xl'>2</h3>
            </div>
            </Slider>
       

            </div>
            <div className="child w-[780px] h-[780px] ">
             <h2 className='text-[39px] font-bold'>Product </h2>
             <div className=' flex items-center gap-x-6 my-5'>
             <img src={star} alt="star" />
             <p> 1 Review</p>
             </div>
             <div className='flex items-center gap-x-6 border-b-2  border-[#F0F0F0] pb-6'>
              <p className=' text-base text-[#767676]'>$88.00</p>
              <p className='font-bold text-[#262626] text-xl'>$44.00</p>
             </div>
             <div className='flex gap-x-3 py-7'>
              <p className='text-[#262626] font-bold text-xl '>color:</p>
              <div className='w-7 h-7 bg-slate-600 rounded-full'></div>
              <div className='w-7 h-7 bg-red-600 rounded-full'></div>
              <div className='w-7 h-7 bg-orange-300 rounded-full'></div>
              <div className='w-7 h-7 bg-amber-200 rounded-full'></div>
             </div>
             <div className='flex gap-x-[76px] items-center'>
             <label
      className='text-base font-bold text-[#262626] ' 
       htmlFor="">size:</label>
       <select className=' w-[139px] py-1 px-1 outline-none border-2 border-[#F0F0F0]'   name="" id="">
        <option  value="">s</option>
        <option  value="">m</option>
        <option  value="">xl</option>
        <option  value="">xxl</option>
        <option  value="">xxxl</option>
       </select>
             </div>
             <div className='flex items-center gap-x-[28px] py-7 border-b-2 border-[#F0F0F0]'>
              <p className='font-bold text-[#262626] text-base'>QUANTITY:</p>
              <div className='flex items-center  w-[139px] justify-between border-2 border-[#F0F0F0] px-3'>
              <HiMinusSmall />
              <p>1</p>
              <GoPlus />

              </div>
             </div>
             <div className='flex items-center gap-x-7 py-6 border-b-2 border-[#F0F0F0]'>
              <p className='font-semibold text-xl text-[#262626]'>STATUS:</p>
              <p>In stock</p>
             </div>
             <div className='flex gap-x-5 py-7 border-b-2 border-[#F0F0F0]'>
              <Button className="w-[200px]" text="Add to Wish List"/>
              <Button className="w-[200px]" text="Add to Cart"/>
             </div>
             <div className='py-7 border-b-2 border-[#F0F0F0]'>
              <p className='flex items-center justify-between'>FEATURES  & DETAILS <span><GoPlus /></span></p>
             </div>
             <div className='py-7 border-b-2 border-[#F0F0F0]'>
              <p className='flex items-center justify-between'>SHIPPING & RETURNS <span><GoPlus /></span></p>
             </div>
             <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            </div>
        </div>
        <div className="description pt-80 mb-[349px]">
         <div className='flex gap-x-5 '>
          <p className=' text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300'>Description</p>
          <p className='text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300'>Reviews (1)</p>
         </div>
         <p className='py-6 border-b-2 border-[#F0F0F0] text-[#767676]'>1 review for Product</p>
         <div className=' border-b-2 border-[#F0F0F0]'>
         <div className='flex items-center justify-between py-5'>
          <p className=' text-[#767676] flex items-center gap-x-9'>John Ford <img src={star} alt="" /></p>
          <p className='text-[#767676]'>6 month ago</p>
         </div>
         <p className='text-[#767676] pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
         </p>
         </div>
         <div className='w-[780px]'>
          <h2 className='text-[#262626] font-bold text-[18px] py-5'>Add a Review</h2>
          <div className='flex flex-col pb-3'>
            <label className='text-[#262626] font-bold' htmlFor="">Name</label>
            <input className='py-2  border-b-2 border-[#F0F0F0]' type="text" placeholder='Your name here' />
          </div>
          <div className='flex flex-col  pb-3'>
            <label className='text-[#262626] font-bold' htmlFor="">Email</label>
            <input className='py-2  border-b-2 border-[#F0F0F0]' type="text" placeholder='Your email here' />
          </div>
          <div className='flex flex-col  pb-3'>
            <label className='text-[#262626] font-bold' htmlFor="">Review</label>
            <input className='pt-3 pb-[87px] border-b-2 border-[#F0F0F0]' type="text" placeholder='Your review here' />
          </div>
          <div className='mt-5'>
          <Button className='w-[200px] ' text='post'/>
          </div>
          
         </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
