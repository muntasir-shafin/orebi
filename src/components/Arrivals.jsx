import React from 'react'
import Container from './layer/Container'
import ProductItem from './layer/ProductItem'
import Slider from 'react-slick'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Title from './layer/Title';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="w-16 h-16 absolute right-5 top-1/2 translate-y-[-50%] rounded-full bg-[#c2c2c2] !flex justify-center items-center "
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    >
      <FaLongArrowAltRight />

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className="w-16 h-16 absolute left-5 top-1/2 translate-y-[-50%] rounded-full bg-[#c2c2c2] !flex justify-center items-center z-10 "
    style={{ ...style, display: "block",  }}
    onClick={onClick}
  >
    <FaLongArrowAltLeft />

  </div>
  );
}

const Arrivals = () => {
  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='lg:pt-32 pt-5 px-3 lg:px-0'>
      <Container>
        <Title text="New Arrivals"/>
              
      </Container>

      <Container className="max-w-[1640px]">
      <div>
         <Slider {...settings}>
              <div>
              <ProductItem className="mx-auto" offer="10%"/>
              </div>
              <div>
              <ProductItem className="mx-auto" offer="New"/>
              </div>
              <div>
              <ProductItem className="mx-auto" offer="New"/>
              </div>
              <div>
              <ProductItem className="mx-auto" offer="New"/>
              </div>
              <div>
              <ProductItem  className="mx-auto" offer="New"/>
              </div> 
       </Slider>
       </div>
      </Container>

    </div>
    
  )
}

export default Arrivals
