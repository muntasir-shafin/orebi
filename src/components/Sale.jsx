import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import ad1 from "../assets/Ad_1.jpg"
import ad2 from "../assets/Ad_2.jpg"
import ad3 from "../assets/Ad_3.jpg"

const Sale = () => {
  return (
    <div className='lg:pt-44 pt-3 px-3 lg:px-0'>
     <Container className="flex justify-between flex-wrap gap-y-3 lg:gap-y-0 ">
        <div className='left lg:w-[780px] w-auto lg:h-[780px] h-auto'>
          <Image className="w-full h-full object-contain" src={ad1} href=""/>
        </div>
        <div className='left lg:w-[780px] w-auto  lg:h-[780px] h-auto flex flex-col justify-between gap-y-3 lg:gap-y-0'>
            <div className="child w-full lg:h-[370px] h-auto">
               <Image className="w-full h-full object-contain" src={ad2} href=""/>
            </div>
            <div className="child w-full lg:h-[370px] h-auto">
              <Image className="w-full h-full object-contain" src={ad3} href=""/>
            </div>
        </div>
     </Container>
    </div>
  )
}

export default Sale
