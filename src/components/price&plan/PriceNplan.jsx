import React from "react";
import cloudHosting from "../../assets/planNprice/cloudHosting.png";
import vpsHosting from "../../assets/planNprice/vpsHosting.png";
import sharedHosting from "../../assets/planNprice/sharedHosting.png";
const PriceNplan = () => {
  return (
    <>
      <section className="bg-[#f0f4ff] py-10 md:py-16 xl:py-[120px]">
        <div className="text-center">
          <h2 className="title">Price & Plans</h2>
          <p className="text-subHeading sm:w-[525px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        {/* card  */}
        <div className="sm:flex flex-wrap lg:flex-nowrap gap-2 justify-around items-center container-main">
          <main className="text-center mt-10 md:my-0 md:mt-5 xl:my-20 py-10 md:py-16 xl:py-20 px-5 md:px-10 xl:px-[52px] hover:shadow-sm duration-300 ease-linear rounded-md bg-white md:scale-95">
            <img className="mx-auto" src={cloudHosting} alt="cloudHosting" />
            <h2 className="title text-3xl xl:mt-10 xl:mb-5 my-2 sm:mt-3 sm:mb-4">
              Cloud Hosting
            </h2>
            <h3 className="text-primary text-[70px] font-primary font-bold">
              <span className="text-subHeading text-sm">$</span>34{""}
              <span className="text-subHeading text-sm">/mo</span>
            </h3>
            <p className="text-subHeading w-64  mx-auto font-normal text-center">
              PioHosting offers hosting <br /> plans that are secure, reliable,
              and performing for just $580.58/year.
            </p>
            <div className=" mt-5 md:mt-7 xl:mt10">
              <button className="btn text-subHeading border border-[#dbdbdb] bg-transparent hover:bg-primary hover:text-white duration-300 ease-linear mt-3 sm:mt-0 py-3 px-5 hover:shadow-lg hover:shadow-primary/20">
                Learn More
              </button>
            </div>
          </main>
          <main className="text-center mt-10 md:my-0 md:mt-5 xl:my-20 py-10 md:py-16 xl:py-20 px-5 md:px-10 xl:px-[52px] hover:shadow-sm duration-300 ease-linear rounded-md bg-white md:scale-95">
            <img className="mx-auto" src={vpsHosting} alt="cloudHosting" />
            <h2 className="title text-3xl xl:mt-10 xl:mb-5 my-2 sm:mt-3 sm:mb-4">
              Vps Hosting
            </h2>
            <h3 className="text-primary text-[70px] font-primary font-bold">
              <span className="text-subHeading text-sm">$</span>46{""}
              <span className="text-subHeading text-sm">/mo</span>
            </h3>
            <p className="text-subHeading w-64  mx-auto font-normal text-center">
              PioHosting offers hosting <br /> plans that are secure, reliable,
              and performing for just $580.58/year.
            </p>
            <div className=" mt-5 md:mt-7 xl:mt10">
              <button className="btn text-subHeading border border-[#dbdbdb] bg-transparent hover:bg-primary hover:text-white duration-300 ease-linear mt-3 sm:mt-0 py-3 px-5 hover:shadow-lg hover:shadow-primary/20">
                Learn More
              </button>
            </div>
          </main>
          <main className="text-center mt-10 md:my-0 md:mt-3 xl:my-20 py-10 md:py-16 xl:py-20 px-5 md:px-10 xl:px-[52px] hover:shadow-sm duration-300 ease-linear rounded-md bg-white md:scale-95">
            <img className="mx-auto" src={sharedHosting} alt="sharedHosting" />
            <h2 className="title text-3xl xl:mt-10 xl:mb-5 my-2 sm:mt-3 sm:mb-4">
              Shared Hosting
            </h2>
            <h3 className="text-primary text-[70px] font-primary font-bold">
              <span className="text-subHeading text-sm">$</span>17{""}
              <span className="text-subHeading text-sm">/mo</span>
            </h3>
            <p className="text-subHeading w-64  mx-auto font-normal text-center">
              PioHosting offers hosting <br /> plans that are secure, reliable,
              and performing for just $580.58/year.
            </p>
            <div className=" mt-5 md:mt-7 xl:mt10">
              <button className="btn text-subHeading border border-[#dbdbdb] bg-transparent hover:bg-primary hover:text-white duration-300 ease-linear mt-3 sm:mt-0 py-3 px-5 hover:shadow-lg hover:shadow-primary/20">
                Learn More
              </button>
            </div>
          </main>
        </div>
        {/* card  */}
        <div className="flex justify-center items-center px-2 mt-5
        ">
          <h4 className=" w-[450px] md:w-[570px] rounded-5 text-[#000c35] text-sm sm:text-base font-medium  bg-white py-5 inline-block text-center">
            <span className="text-primary underline  cursor-pointer">
              See plan details
            </span>{" "}
            and pricing for more information
          </h4>
        </div>
      </section>
    </>
  );
};

export default PriceNplan;
