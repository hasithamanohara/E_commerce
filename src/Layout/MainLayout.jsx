import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div className=" w-full h-screen overflow-hidden">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
