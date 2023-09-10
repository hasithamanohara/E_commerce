import React, { useState } from "react";
import Ads from "./Ads";
import Product from "./Product";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  //loading use state(remporary state)
  const [loading, setLoading] = useState(false);

  if(loading) return <Loading />;

  return (
    <div className="px-5 pt-[100px] w-full h-screen overflow-x-scroll">
      <Ads />
      <Product title="Trending_product" rowsCount={1} slidesPerView={5} />
      <Product title="Electronic_product" rowsCount={1} slidesPerView={5} />
      <Product title="Bathware_product" rowsCount={1} slidesPerView={5} />
    </div>
  );
};

export default Home;
