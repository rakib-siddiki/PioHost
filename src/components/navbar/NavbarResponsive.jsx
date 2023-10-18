import logo from "../../assets/navbar/logo.png";
import { TiKeyOutline } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineCloseSquare, AiOutlineBars } from "react-icons/ai";

const NavbarResponsive = () => {
    const [show,setShow] =useState(false)
  return (
    <>
      <section className=" flex flex-col items-center bg-behind md:hidden">
        <div className=" pt-5 px-5">
          {/* left */}
          <div className="relative">
            <img src={logo} alt="logo" />
            <div
              onClick={() => setShow((prev) => !prev)}
              className="absolute top-1/2 -translate-y-1/2 -right-16  text-2xl  text-white cursor-pointer"
            >
              {show ? <AiOutlineCloseSquare /> : <AiOutlineBars />}
            </div>
          </div>
          {/* left */}
          <div
            className={`absolute  duration-500  ${
              show ? `top-0` : `top-[-100%]`
            }`}
          >
            {show && (
              <div>
                {/* center  */}
                <div className=" text-left mt-3 mb-5 pl-5">
                  <ul className="font-secondary font-medium text-xl md:text-sm text-white flex flex-col gap-1">
                    <li className="active:scale-[.98] cursor-pointer">Home </li>
                    <li className="active:scale-[.98] cursor-pointer">
                      Hosting
                    </li>
                    <li className="active:scale-[.98] cursor-pointer">
                      Pages
                    </li>
                    <li className="active:scale-[.98] cursor-pointer">News</li>
                    <li className="active:scale-[.98] cursor-pointer">
                      Contact
                    </li>
                  </ul>
                </div>
                {/* center  */}

                {/* right */}
                <div className=" text-end flex justify-center items-center gap-x-5">
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
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarResponsive;
