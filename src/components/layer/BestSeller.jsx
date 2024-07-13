import React from 'react'
import Container from './Container'
import Title from './Title'
import ProductItem from './ProductItem'


const BestSeller = () => {
  return (
    <div className='pt-10 lg:mt-32 mt-5 px-3 lg:px-0 '>
      <Container >
      <Title text="Best Seller"/>
      <div className=' flex   justify-between flex-wrap  gap-y-3'>
        
      <ProductItem />
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>

      </div>
      </Container>
    </div>
  )
}

export default BestSeller
