import { Button } from "@/components/ui/button";
const hero = () => {
  return (
    <section className="bg-gray-200">
      <div className=" rounded-3xl heroBg bg-cover  bg-no-repeat h-[670px]  realative flex justify-center items-center mx-[66px] px-[66px]">
        <div className="flex justify-around items-center max-md:flex-col  gap-[150px]   top-10">
          {/* left text */}

          <div className="w-[492px] top-[120px] relative">
            <h1 className="font-montaga font-[400] text-[36px] text-white ">
              Bringing Simplicity In The Furniture Market
            </h1>
          </div>
          {/* right text  */}
          <div className="w-[385px]  top-[140px] relative">
            <p className="font-montaga font-[500] text-[16px]  text-white ">
              Shop premium furniture crafted to transform your home into a
              haven. Explore our curated collections and find the perfect fit
              for your lifestyle.
            </p>
            <div className="my-6 ">
              <Button
                variant="outline"
                className="rounded-full w-[125px] h-[39px]"
              >
                Show Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
