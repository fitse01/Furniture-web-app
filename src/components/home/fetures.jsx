import FetureCard from "@/components/home/fetureCard";
import { fetureCardData } from "@/constants";
const fetures = () => {
  return (
    <div className="container mx-auto bg-gray-200">
      <div className=" grid grid-cols-4 min-lg:grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 items-center justify-center px-[138px] gap-[30px] bg-gray-200 p-10 ">
        {fetureCardData.map((featureItems, index) => (
          <FetureCard
            key={index}
            icon={
              <img
                src={featureItems.icon}
                alt={featureItems.title}
                className="w-10 h-10"
              />
            }
            title={featureItems.title}
            description={featureItems.description}
          />
        ))}
      </div>
    </div>
  );
};

export default fetures;
