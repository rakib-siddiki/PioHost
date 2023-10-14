import { useState } from "react";
import faqImg from "../../assets/faq/formImg.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Faq = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <>
      <section className="bg-primary py-10 md:py-24 xl:py-17">
        <div className="sm:grid grid-cols-2 gap-x-8 container-main">
          <div className=" sm:mt-24 md:mt-20 lg:mt-0">
            <img src={faqImg} alt="FaqImg" />
          </div>
          <div>
            <h3 className="text-white font-semibold">FAQ</h3>
            <div className="mt-3 md:mt-5 xl:mt-8">
              <h2 className="font-primary font-semibold text-2xl md:text-4xl xl:text-[46px] text-white md:leading-[50px] xl:leading-[65px]">
                Get Every Single Answer From Here.
              </h2>
              <p className="font-secondary text-sm md:text-lg xl:text-[22px] text-white my-3 md:my-5 xl:my-8">
                We're here to help. Get in touch and we'll get back to you as
                soon as we can.
              </p>
            </div>
            {/* acordian  */}
            <div className="flex flex-col gap-y-8">
              {/* =========================  */}

              <div
                className={`border  py-5 px-4 relative rounded-sm ${
                  show ? `border-white` : `border-borderColor`
                }`}
              >
                <div
                  onClick={() => setShow((prev) => !prev)}
                  className="absolute top-6 left-2 "
                >
                  {show ? (
                    <AiOutlineEyeInvisible className="text-white text-xl" />
                  ) : (
                    <AiOutlineEye className="text-white text-xl" />
                  )}
                </div>
                <div className="text-white ml-8">
                  <h3 className="font-secondary lg:text-[15px] xl:text-base">
                    How do I give my computer a static local IP address?
                  </h3>
                  <p
                    className={`text-white font-secondary mt-3 md:mt-5 xl:mt-6 
                ${show ? `block` : `hidden`} `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis with nostrud
                    exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
              {/* ============XXXX=============  */}

              {/* =========================  */}
              <div
                className={`border flex border-borderColor py-5 px-4 relative rounded-sm ${
                  show2 ? `border-white` : `border-borderColor`
                }`}
              >
                <div
                  onClick={() => setShow2((prev) => !prev)}
                  className="absolute top-6 left-2 "
                >
                  {show2 ? (
                    <AiOutlineEyeInvisible className="text-white text-xl" />
                  ) : (
                    <AiOutlineEye className="text-white text-xl" />
                  )}
                </div>
                <div className="text-white ml-8">
                  <h3 className="font-secondary lg:text-[15px] xl:text-base">
                    Why can't people connect to the web server on my PC?
                  </h3>
                  <p
                    className={`text-white font-secondary mt-3 md:mt-5 xl:mt-6 
                ${show2 ? `block` : `hidden`}`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis with nostrud
                    exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
              {/* ============XXXX=============  */}

              {/* =========================  */}
              <div
                className={`border flex border-borderColor py-5 px-4 relative rounded-sm ${
                  show3 ? `border-white` : `border-borderColor`
                }`}
              >
                <div
                  onClick={() => setShow3((prev) => !prev)}
                  className="absolute top-6 left-2 "
                >
                  {show3 ? (
                    <AiOutlineEyeInvisible className="text-white text-xl" />
                  ) : (
                    <AiOutlineEye className="text-white text-xl" />
                  )}
                </div>
                <div className="text-white ml-8">
                  <h3 className="font-secondary lg:text-[15px] xl:text-base">
                    What domain name should I choose for my site?
                  </h3>
                  <p
                    className={`text-white font-secondary mt-3 md:mt-5 xl:mt-6 
                ${show3 ? `block` : `hidden`}`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis with nostrud
                    exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
              {/* =========================  */}
            </div>

            {/* acordian  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
