import logo from "../../assets/navbar/logo.png";
import { TiKeyOutline } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
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
            <ul className="flex justify-center items-center xl:gap-x-8 font-secondary font-medium text-sm text-white">
              <li>Home +</li>
              <li>Hosting +</li>
              <li> Pages +</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* center  */}

          {/* right */}
          <div className=" text-end flex items-center gap-x-2 lg:gap-x-10">
            <button className="btn flex items-center justify-center gap-x-1.5">
              <TiKeyOutline className="text-white font-medium " />
              WHMSC
            </button>
            <BiSearch className="text-xl text-white" />
            <FaBars className="text-xl text-white" />
          </div>
          {/* right */}
        </div>
      </section>
    </>
  );
};

export default Navbar;
