import React from 'react'
import Banner from '../../Banner'
import BannerBottom from '../../BannerBottom'
import Sale from '../../Sale'
import ProductItem from '../ProductItem'
import Arrivals from '../../Arrivals'
import BestSeller from '../BestSeller'
import Add from '../../Add'
import SpecialOffers from '../SpecialOffers'






const Home = () => {
  return (
    <div>
     
      <Banner/>
      <BannerBottom/>
      <Sale/>
      <Arrivals/>
      <BestSeller/>
      <Add/>
      <SpecialOffers/>
    </div>
  )
}

export default Home
