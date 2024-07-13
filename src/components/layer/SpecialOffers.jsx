import React from 'react'
import Container from './Container'
import Title from './Title'
import ProductItem from './ProductItem'

const SpecialOffers = () => {
  return (
    <div className='pt-10 lg:mt-32 mt-5 px-3 lg:px-0'>
      <Container >
      <Title text="Special Offers"/>
      <div className='flex justify-between flex-wrap  gap-y-3'>
        
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>

      </div>
      </Container>
    </div>
  )
}

export default SpecialOffers
