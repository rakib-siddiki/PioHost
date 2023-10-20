import logo from "../../assets/navbar/logo.png";
import { TiKeyOutline } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import NavbarResponsive from "./NavbarResponsive";
import { Link} from "react-scroll";
const Navbar = () => {
  return (
    <>
      <section id="home" className=" hidden md:block">
        <div className="flex items-center md:justify-between lg:justify-around  bg-behind pt-5 xl:pt-[50px] px-5">
          {/* left */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* left */}

          {/* center  */}
          <div className=" text-center">
            <ul className="flex justify-center items-center md:gap-x-4 lg:gap-x-8 font-secondary font-medium text-sm text-white cursor-pointer">
              <Link to="home" className="underline-effect hover:after:w-14 ">
                Home +
              </Link>
              <Link
                to="hostiner"
                smooth={true}
                spy={true}
                offset={-10}
                duration={500}
                className="underline-effect hover:after:w-14 "
              >
                Hosting +
              </Link>
              <Link
                to="whyChosse"
                smooth={true}
                spy={true}
                offset={50}
                duration={500}
                className="underline-effect hover:after:w-14 "
              >
                {" "}
                Pages +
              </Link>
              <Link
                to="news"
                smooth={true}
                spy={true}
                offset={50}
                duration={500}
                className="underline-effect hover:after:w-14 "
              >
                News
              </Link>
              <Link
                to="contact"
                smooth={true}
                spy={true}
                offset={100}
                duration={500}
                className="underline-effect hover:after:w-14 "
              >
                Contact
              </Link>
            </ul>
          </div>
          {/* center  */}

          {/* right */}
          <div className=" text-end flex items-center gap-x-2 xl:gap-x-10">
            <button className="btn md:px-4 md:py-3 xl:py-[20px] xl:px-[50px] md:text-xs lg:text-base bg-primary border-none flex items-center justify-center gap-x-1.5">
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
