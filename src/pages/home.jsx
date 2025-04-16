import Hero from "@/components/home/hero";
import FetureCard from "@/components/home/fetures";
import HomeShop from "@/components/home/homeShop";
import Service from "@/components/home/service";
const home = () => {
  return (
    <div>
      <Hero />
      <FetureCard />
      <HomeShop />
      <Service />
    </div>
  );
};

export default home;
