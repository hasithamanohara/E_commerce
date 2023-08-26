import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div className='w-full h-screen'>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
