import logo from "../../assets/navbar/logo.png";
import { TiKeyOutline } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import NavbarResponsive from "./NavbarResponsive";
const Navbar = () => {
  return (
    <>
      <section className=" hidden md:block">
        <div className="flex items-center md:justify-between lg:justify-around  bg-behind pt-5 xl:pt-[50px] px-5">
          {/* left */}
          <div className=" ">
            <img src={logo} alt="logo" />
          </div>
          {/* left */}

          {/* center  */}
          <div className=" text-center">
            <ul className="flex justify-center items-center xl:gap-x-8 font-secondary font-medium text-sm text-white cursor-pointer">
              <li className="underline-effect hover:after:w-14 active:scale-90">Home +</li>
              <li className="underline-effect hover:after:w-14 active:scale-90">Hosting +</li>
              <li className="underline-effect hover:after:w-14 active:scale-90"> Pages +</li>
              <li className="underline-effect hover:after:w-14 active:scale-90">News</li>
              <li className="underline-effect hover:after:w-14 active:scale-90">Contact</li>
            </ul>
          </div>
          {/* center  */}

          {/* right */}
          <div className=" text-end flex items-center gap-x-2 lg:gap-x-10">
            <button className="btn bg-primary border-none flex items-center justify-center gap-x-1.5">
              <TiKeyOutline className="text-white font-medium " />
              WHMSC
            </button>
            <BiSearch className="text-xl text-white" />
            <FaBars className="text-xl text-white" />
          </div>
          {/* right */}
        </div>
      </section>
      <NavbarResponsive />
    </>
  );
};

export default Navbar;
