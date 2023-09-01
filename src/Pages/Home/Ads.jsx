import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

const Ads = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="rounded-lg overflow-hidden h-48"
            >
                <SwiperSlide><AdsImg name="Slide1" Slide={"https://plus.unsplash.com/premium_photo-1692485023026-a8eadddf8128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"} SlideAlt={"Slide1"} /> </SwiperSlide>
                <SwiperSlide><AdsImg name="Slide2" Slide={"https://images.unsplash.com/photo-1692260122105-28c26fc3c882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"} SlideAlt={"Slide2"} /></SwiperSlide>
                <SwiperSlide><AdsImg name="Slide3" Slide={"https://plus.unsplash.com/premium_photo-1664439520308-999f63a17f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"} SlideAlt={"Slide3"} /></SwiperSlide>
                <SwiperSlide><AdsImg name="Slide3" Slide={"https://images.unsplash.com/photo-1692607431536-00f30fb59685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"} SlideAlt={"Slide4"} /></SwiperSlide>
                <SwiperSlide><AdsImg name="Slide4" Slide={"https://images.unsplash.com/photo-1619472376731-3ca648a34b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"} SlideAlt={"Slide5"} /></SwiperSlide>
            </Swiper>
        </>
    )
}

//edit relleated to firebase after complete this

export default Ads

const AdsImg = ({ Slide, SlideAlt }) => (
    <div>
        <img src={Slide} alt={SlideAlt} className="object-fill cursor-pointer"/>
    </div>
)
