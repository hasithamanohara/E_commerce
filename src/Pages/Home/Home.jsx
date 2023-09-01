import React from 'react'
import Ads from './Ads'
import Product from './Product'

const Home = () => {
  return (
    <div className="px-5 pt-[100px] w-full h-screen overflow-x-scroll">
      <Ads/>
      <Product title="Trending_product" rowsCount={1} slidesPerView={3} />
    </div>
  )
}

export default Home
