import serviceImg1 from "@/assets/image/service-img-1.png";
import serviceImg2 from "@/assets/image/service-img-2.png";
import serviceImg3 from "@/assets/image/service-img-3.png";
import { GoDotFill } from "react-icons/go";
const service = () => {
  return (
    <section className="container mx-auto my-20 lg:px-[138px] ">
      <div className="grid lg:grid-cols-2  max-md:grid-cols-1  gap-7">
        {/* left */}
        <div className="grid grid-flow-col grid-rows-2 gap-5">
          <div className="row-span-1 w-full h-full">
            <img
              src={serviceImg1}
              alt="serice img "
              className="w-full h-full"
            />
          </div>
          <div className="col-span-1  flex  gap-10 ">
            <div className=" ">
              <img src={serviceImg2} alt="" className="w-full h-full" />
            </div>
            <div className=" w-[324px] h-[317px] rounded-[17px] bg-primary-50 flex_center gap-10">
              <div>
                <div className="bg-[#FFA600] text-white text-center  w-[183px] h-[35px] rounded-[42px] ">
                  <p className="pt-1">See What We Offer</p>
                </div>
                <p className="font-montaga font-[400] text-[40px] text-white mt-5">
                  30% offer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="bg-[#E9EEF1] rounded-[38px] w-full relative ">
          <div className="w-[198px] bg-white text-center text-primary-50 h-[45px] rounded-[27px] border-[1px] border-primary-50 top-10 left-10 absolute">
            <p className="font-montaga font-[400] text-[20px] leading-[100%] text-center mt-3">
              Our Quality Chair
            </p>
          </div>
          <div className="top-[150px] left-[300px] absolute">
            <p className="font-inter  font-[600] text-[20px] text-primary-50">
              Chairs
            </p>
            <div className="flex flex-col gap-2 mt-5 relative">
              <p className="font-inter  font-[400] text-[14px] flex gap-2">
                <span className="text-primary-50 top-5 ">
                  <GoDotFill />
                </span>{" "}
                <h1 className="font-inter  font-[400] text-[20px] text-[#898989] flex gap-2">
                  ergonomic design
                </h1>
              </p>
              <p className="font-inter  font-[400] text-[14px] flex gap-2">
                <span className="text-primary-50 top-5 ">
                  <GoDotFill />
                </span>{" "}
                <h1 className="font-inter  font-[400] text-[20px] text-[#898989] flex gap-2">
                  durable materials
                </h1>
              </p>
              <p className="font-inter  font-[400] text-[14px] flex gap-2">
                <span className="text-primary-50 top-5 ">
                  <GoDotFill />
                </span>{" "}
                <h1 className="font-inter  font-[400] text-[20px] text-[#898989] flex gap-2">
                  high-density cushioning
                </h1>
              </p>
              <p className="font-inter  font-[400] text-[14px] flex gap-2">
                <span className="text-primary-50 top-5 ">
                  <GoDotFill />
                </span>{" "}
                <h1 className="font-inter  font-[400] text-[20px] text-[#898989] flex gap-2">
                  breathable upholstery
                </h1>
              </p>
            </div>
          </div>
          <div className="bottom-0 top-[260px] absolute left-0 w-full h-full">
            <img src={serviceImg3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default service;
