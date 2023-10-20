import logo from "../../assets/navbar/logo.png";
import { TiKeyOutline } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineCloseSquare, AiOutlineBars } from "react-icons/ai";
import { Link } from "react-scroll";

const NavbarResponsive = () => {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <nav className=" relative flex flex-col items-center bg-behind md:hidden ">
        <div className="pt-5 px-5">
          {/* left */}
          <div className="fixed top-0 left-0 z-50  flex justify-center items-center bg-behind bg-no-repeat w-full py-3">
            <img src={logo} alt="logo" />
            <div
              onClick={() => setShow((prev) => !prev)}
              className="text-2xl text-white ml-12 cursor-pointer"
            >
              {show ? <AiOutlineCloseSquare /> : <AiOutlineBars />}
            </div>
          </div>
          {/* left */}
          <div
            className={`fixed duration-500 bg-behind w-full h-full mt-10 z-50 ${
              show ? `left-0` : `-left-full`
            }`}
          >
            <div>
              {/* center  */}
              <div className=" text-left mt-3 mb-5 pl-5">
                <ul className="font-secondary font-medium text-xl md:text-sm text-white flex flex-col gap-1 ml-[90px] secondPortriait:ml-[105px]  sm:landscape:ml-[235px] sm:landscape3:ml-[270px] cursor-pointer">
                  <Link
                    onClick={() => setShow((prev) => !prev)}
                    to="home2"
                    smooth={true}
                    spy={true}
                    offset={-50}
                    duration={500}
                    className="active:scale-[.98]  underline-effect"
                  >
                    Home{" "}
                  </Link>
                  <Link
                    onClick={() => setShow((prev) => !prev)}
                    to="hostiner"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={500}
                    className="active:scale-[.98]  underline-effect"
                  >
                    Hosting
                  </Link>
                  <Link
                    onClick={() => setShow((prev) => !prev)}
                    to="whyChosse"
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={500}
                    className="active:scale-[.98]  underline-effect"
                  >
                    Pages
                  </Link>
                  <Link
                    onClick={() => setShow((prev) => !prev)}
                    to="news"
                    smooth={true}
                    spy={true}
                    offset={-50}
                    duration={500}
                    className="active:scale-[.98]  underline-effect"
                  >
                    News
                  </Link>
                  <Link
                    onClick={() => setShow((prev) => !prev)}
                    to="contact2"
                    smooth={true}
                    spy={true}
                    offset={-100}
                    duration={500}
                    className="active:scale-[.98]  underline-effect"
                  >
                    Contact
                  </Link>
                </ul>
              </div>
              {/* center  */}

              {/* right */}
              <div className=" text-end flex justify-center items-center gap-x-5 pb-5">
                <button className="btn active:scale-90 bg-primary border-none flex items-center justify-center gap-x-1.5">
                  <TiKeyOutline className="text-white font-medium " />
                  WHMSC
                </button>
                <div className="flex gap-x-2">
                  <BiSearch className="text-xl text-white" />
                  <FaBars className="text-xl text-white" />
                </div>
              </div>
              {/* right */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarResponsive;
