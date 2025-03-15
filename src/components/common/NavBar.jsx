import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
const NavBar = () => {
  return (
    <div className="flex max-smflex-col max-sm:bg-primary-100 gap-20  items-center justify-center bg-gray-200 py-5">
      <div className="min-w-[1164px]  bg-white flex justify-between px-10 items-center  rounded-full max-lg:hidden">
        <h1 className="font-italianno font-[400] text-[36px] ">
          {" "}
          <span className="text-[#145D76] ">Luxury </span>Kits
        </h1>
        <Menubar className="shadow-none border-0 flex gap-5 justify-between">
          <MenubarMenu>
            <a href="/">
              <MenubarTrigger className="font-montaga font-[400] text-[20px] cursor-pointer">
                Home
              </MenubarTrigger>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <a href="/shop">
              <MenubarTrigger className="font-montaga font-[400] text-[20px] cursor-pointer">
                Shop
              </MenubarTrigger>
            </a>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="font-montaga font-[400] text-[20px] cursor-pointer">
              New Arival
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="font-montaga font-[400] text-[20px] cursor-pointer">
              Salse & offer
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <a href="/contact" className="cursor-pointer">
          <Button className="bg-[#145D76] cursor-pointer font-montaga font-[400] text-[20px] rounded-full hover:bg-primary-100 hover:text-black">
            Contact Us
          </Button>
        </a>
      </div>

      <div className="hidden  max-lg:flex justify-between items-center px-10 w-full">
        <div>
          <h1 className="font-italianno font-[400] text-[36px] ">
            {" "}
            <span className="text-[#145D76] ">Luxury </span>Kits
          </h1>
        </div>
        <Sheet className="bg-white text-black">
          <SheetTrigger>
            <div>
              <IoMdMenu className="w-10 h-10" />
            </div>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-center justify-center gap-10 my-20 text-black font-montaga ">
              <a href="/" className="hover:text-blue-800">
                Home
              </a>
              <a href="/shop" className="hover:text-gray-600">
                {" "}
                Shope
              </a>
              <a href="/new-arrivals" className="hover:text-gray-600">
                New Arrivals
              </a>
              <a href="/sales-ofers" className="hover:text-gray-600">
                Sales & Offers{" "}
              </a>
              <a href="/contact" className="hover:text-gray-600">
                Contact
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
