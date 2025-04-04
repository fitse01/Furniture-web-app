import React from "react";
import shop from "@/assets/image/shop-img.png";

const homeShop = () => {
  return (
    <div className=" bg-gray-200  flex_center max-lg:flex-col max-lg:gap-[50px] max-md:px-6 min-lg:gap-[92px] py-20">
      <div>
        <img
          src={shop}
          alt="shop img"
          className="w-[581px]  h-[376px] rounded-[21px] "
        />
      </div>
      <div className=" min-lg:w-[581px] h-[376px] bg-white   rounded-[21px] ">
        <div className="my-12 mx-16">
          <div className="bg-[#5A5A5A26] w-[170px] font-[500] text-[12px] py-2 text-[#145D76] h-[35px] rounded-[27px]  border-2 px-5 border-[#145D76]  ">
            Our Comfortable Sofas
          </div>
          <p className=" font-[400] text-[14px] leading-[163%] w-full text-text-primary max-md:my-5 lg:my-10">
            discover ultimate relaxation with our comfortable sofa collection.
            Designed with premium materials, plush cushions, and ergonomic
            support, our sofas are perfect for lounging, entertaining, or
            creating cozy moments. Available in a variety of styles, sizes, and
            colors to complement any space, these sofas bring both style and
            comfort to your home.
          </p>

          <button
            href="/shop"
            className="w-[153px] h-[45px] bg-primary-50 text-white rounded-[35px]"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default homeShop;
