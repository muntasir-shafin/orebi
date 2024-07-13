import React, { useState } from 'react'
import Container from '../Container';
import Breadcrumb from '../../Breadcrumb';
import ProductFilter from '../ProductFilter';
import ProductItem from '../ProductItem';
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import Pagination from '../../Pagination';

const Product = () => {

let [number , setNumber]= useState(12);

let selectNumber = (element)=>{
  let numberConverter= Number(element.target.value)
  setNumber(numberConverter);
  
}
  return (
    <div className=''>
      
      <Container>
      <div className="header py-32 ">
       <Breadcrumb title="Products" text="Product"/>
        </div>
        <div className="main flex justify-between ">
          <div className="sidebar w-[370px] ">
          <ProductFilter catTitle="Shop by Category"/>
          <ProductFilter catTitle="Shop by Color"/>
          <ProductFilter catTitle="Shop by Brand"/>
          <ProductFilter catTitle="Shop by Price"/>
          </div>

          <div className="products w-[1190px] ">

      {/*===============================================  */}
      <div className=' w-full flex justify-between mb-[60px]'>
        <div className='icon flex gap-x-5'>
              <div className='w-9 h-9 border border-[#F0F0F0] flex justify-center items-center text-[#737373]  hover:bg-[#272727] hover:text-white cursor-pointer transition-all duration-300  '><BsGridFill className='' /></div>
              <div className='w-9 h-9 border border-[#F0F0F0] flex justify-center items-center text-[#737373]  hover:bg-[#272727] hover:text-white cursor-pointer transition-all duration-300 '><FaList /></div>
            </div>
        <div className="right">
          <label className='text-base font-DM text-[#767676]' htmlFor=""> Sort by:</label>
          <select name="" id="" className='w-[239px] py-1 px-5 text-base leading-7 outline-none border text-[#767676] bg-transparent border-[#F0F0F0]'>
            <option className='p-7 bg-amber-100' value="Featured">Featured</option>
            <option className='p-7 bg-amber-100' value="junaid">junaid</option>
            <option className='p-7 bg-amber-100' value="shafin">shafin</option>
            <option className='p-7 bg-amber-100' value="muntasir">muntasir</option>
            <option className='p-7 bg-amber-100' value="ahmed">ahmed</option>
          </select>
          <label className='text-base font-DM text-[#767676]' htmlFor=""> Show:</label>
          <select
          onChange = {selectNumber}
           name=""
            id="" 
            className='py-1 px-5 text-base leading-7 outline-none border text-[#767676] bg-transparent border-[#F0F0F0]'>
            <option className='p-7 bg-amber-100' value="12">12</option>
            <option className='p-7 bg-amber-100' value="24">24</option>
            <option className='p-7 bg-amber-100' value="36">36</option>
          </select>
        </div>

        </div>

       

            <Pagination itemsPerPage={number} />
          </div>

        </div>
      </Container> 
    </div>
  )
}

export default Product
