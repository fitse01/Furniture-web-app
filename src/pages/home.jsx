import React from "react";
import Hero from "@/components/home/hero";
import FetureCard from "@/components/home/fetures";
import HomeShop from "@/components/home/homeShop";
const home = () => {
  return (
    <div>
      <Hero />
      <FetureCard />
      <HomeShop />
    </div>
  );
};

export default home;
