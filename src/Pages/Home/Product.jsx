import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './SwiperStyles.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { IconButton } from "@mui/material";

const productArray = [
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1692485023026-a8eadddf8128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    Price: "100",
    ProductName: "product_Name",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1692485023026-a8eadddf8128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    Price: "100",
    ProductName: "product_Name",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1692485023026-a8eadddf8128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    Price: "100",
    ProductName: "product_Name",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1692485023026-a8eadddf8128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    Price: "100",
    ProductName: "product_Name",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1692485023026-a8eadddf8128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    Price: "100",
    ProductName: "product_Name",
  },
];

const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section className="w-full mt-6">
      <h1 className="text-lg font-bold mb-5 flex items-center justify-center">{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {productArray.map(({ imageUrl, Price, ProductName }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              Price={Price}
              ProductName={ProductName}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit = ({ imageUrl, Price, ProductName, id }) => (
  <div className="w-full">
    <IconButton
      sx={{
        padding: "4px",
        borderRadius: "5px",
      }}
    >
      <img
        src={imageUrl}
        alt={`Product_Unit_${id}`}
        className="object-contain cursor-pointer w-full"
      />
    </IconButton>

    <div className="mb-7">
      <h5 className="text-stone-700 font-bold items-center justify-center flex">
        Rs.{Price}/_
      </h5>
      <h5 className="text-sm font-semibold text-stone-900  items-center justify-center flex">
        {ProductName}
      </h5>
    </div>
  </div>
);
