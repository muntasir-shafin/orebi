import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import add from '../assets/Ad.jpg'
const Add = () => {
  return (
   
      <Container >
        <Image className="w-full mt-5 lg:mt-32 " src={add} />
      </Container>
   
  )
}

export default Add
