import SingupForWebHost from "./SingupForWebHost";
import footerLogo from '../../assets/footer/footerLogo.png'

// icons 
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {BsGlobe2} from 'react-icons/bs'
// social icons 
import {
  FaLinkedin,
  FaYoutube,
  FaBehance,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section className="bg-[#020e39] py-10 md:py16 xl:py-17">
        <div className="container-main">
          {/* signup for web host */}
          <div>
            <SingupForWebHost />
          </div>
          {/* contact info  */}
          <div>
            {/* logo and details  */}
            <div
              id="contact"
              className="pt-10 md:pt-20 lg:flex lg:gap-x-3 xl:gap-0"
            >
              <div className=" flex flex-col">
                <div className="bg-[#000f44] p-[50px]">
                  <div>
                    <img src={footerLogo} alt="footerLogo" />
                  </div>
                  <div className="text-[#9da7c9]">
                    <p className="w-80 my-5 md:my-7 font-secondary text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.{" "}
                    </p>
                    <ul className="flex flex-col  gap-4 font-secondary text-sm">
                      <li className="flex items-center gap-x-2">
                        <span>
                          <HiOutlineLocationMarker />
                        </span>
                        12/A, Hamilton City Way, Newyork, US
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <AiOutlinePhone />
                        </span>
                        +8987 5675 754 6
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <AiOutlineMail />
                        </span>
                        info@exampleweb.com
                      </li>
                      <li className="flex items-center gap-x-2">
                        <span>
                          <BsGlobe2 />
                        </span>
                        www.webexample.com
                      </li>
                    </ul>
                  </div>
                </div>
                {/* social media icons  */}
                <div>
                  <div className=" py-7 text-white bg-gradient-to-t from-[#3200cc] to-[#3500b2] ">
                    <div className="flex items-center justify-center gap-6 cursor-pointer">
                      <FaFacebookF />
                      <FaTwitter />
                      <FaBehance />
                      <FaLinkedin />
                      <FaYoutube />
                    </div>
                  </div>
                </div>
              </div>
              {/* others  */}

              {/* logo nad details  */}
              <div
                id="contact2"
                className="lg:flex lg:flex-wrap gap-x-2 lg:gap-x-6 xl:gap-x-14 lg:gap-y-10  mt-10 md:mt-0 grid grid-cols-2 sm:grid-cols-3"
              >
                <div className="xl:ml-[110px]">
                  <h3 className="font-primary font-semibold text-xl sm:text-2xl text-white mb-6 md:mb-8 xl:mb-10 mt-4 lg:mt-0 relative  after:absolute after:duration-300 after:top-0 after:left-0 after:w-[60px] after:h-[2px] after:bg-[#3300c2] pt-5 lg:pt-[30px] ">
                    Our Products
                  </h3>
                  <ul className="flex flex-col gap-y-4 md:gap-y-7  font-secondary text-sm text-[#9da7c9]">
                    <li className="underline-effect">Shared hosting</li>
                    <li className="underline-effect">WordPress hosting</li>
                    <li className="underline-effect">VPS hosting </li>
                    <li className="underline-effect">Dedicated hosting</li>
                    <li className="underline-effect">Reseller hosting</li>
                    <li className="underline-effect">Hosting features</li>
                  </ul>
                </div>
                {/* ========  */}
                <div>
                  <h3 className="font-primary font-semibold text-xl sm:text-2xl text-white mb-6 md:mb-8 xl:mb-10 relative  after:absolute after:duration-300 after:top-0 after:left-0 after:w-[60px]  after:h-[2px] after:bg-[#3300c2] pt-5 lg:pt-[30px] mt-4 lg:mt-0 ">
                    Get Support
                  </h3>
                  <ul className="flex flex-col gap-y-4 md:gap-y-7  font-secondary text-sm text-[#9da7c9]">
                    <li className="underline-effect">Chat</li>
                    <li className="underline-effect">Tickets</li>
                    <li className="underline-effect">Knowledge base</li>
                    <li className="underline-effect">System status</li>
                    <li className="underline-effect">Marketing services</li>
                    <li className="underline-effect">WordPress guide</li>
                  </ul>
                </div>
                {/* ============== */}
                <div>
                  <h3 className="font-primary font-semibold text-xl sm:text-2xl text-white mb-6 md:mb-8 xl:mb-10 relative  after:absolute after:duration-300 after:top-0 after:left-0 after:w-[60px]  after:h-[2px] after:bg-[#3300c2] pt-5 lg:pt-[30px] mt-4 lg:mt-0">
                    Our Company
                  </h3>
                  <ul className="flex flex-col gap-y-4 md:gap-y-7  font-secondary text-sm text-[#9da7c9]">
                    <li className="underline-effect">Associates </li>
                    <li className="underline-effect">About</li>
                    <li className="underline-effect">Careers </li>
                    <li className="underline-effect">Contact</li>
                    <li className="underline-effect">Terms of service</li>
                    <li className="underline-effect">Privacy policy</li>
                  </ul>
                </div>
                {/* ===Reffar a Friend==== */}
                <div className="hidden lg:flex justify-between border-t border-[#37477c] xl:ml-10">
                  <p className="w-80 font-secondary text-sm text-[#9da7c9] mt-4">
                    The promotional price is for the first term only and renews.
                    30-Day Money-Back Guarantee does not extend to domain names.
                  </p>
                  <button className="font-secondary font-medium text-xs bg-[#f07d34] px-6 py-2 lg:h-12 inline-block xl:w-[240px] xl:h-[50px] rounded-full text-white active:scale-95 mt-4">
                    Reffer A Friend!
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ===for sm device =====  */}
          <div className=" sm:flex justify-between lg:hidden  border-t border-[#37477c] mt-4">
            <p className=" font-secondary text-sm text-[#9da7c9] mt-4 ">
              The promotional price is for the first term only and renews.
              30-Day Money-Back Guarantee does not extend to domain names.
            </p>
            <button className="font-secondary font-medium text-sm bg-[#f07d34] px-4 py-3  sm:w-60 sm:Landscape3:w-52  rounded-full text-white active:scale-95 mt-4">
              Reffer A Friend!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
