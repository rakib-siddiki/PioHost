
import image1 from "../../assets/service/image1.png";
import image2 from "../../assets/service/image2.png";
import image3 from "../../assets/service/image3.png";
import { FaAngleRight } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <section id="hostiner" className="xl:pb-[120px]">
        <div className="container-main">
          {/* title  */}
          <div className="sm:flex justify-between items-center">
            <div>
              <h2 className="title text-heading">Our Services</h2>
              <p className="text-subHeading w-auto sm:w-96 xl:max-w-lg mt-3 xl:mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div>
              <button className="btn text-subHeading border border-[#dbdbdb] bg-transparent hover:bg-primary hover:text-white duration-300 ease-linear mt-3 sm:mt-0 py-3 px-5">
                Learn More
              </button>
            </div>
          </div>
          {/* title  */}

          {/* card  */}
          <div className=" md:flex flex-wrap gap-y-10 lg:justify-around xl:justify-between mt-5 xl:mt-20 ">
            {/* =======  */}
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md">
              <img className="mx-auto" src={image1} alt="sharedHosting" />
              <h2 className="title text-3xl xl:mt-10 xl:mb-8 mt-3 mb-2 sm:mt-3 sm:mb-4">
                Shared Hosting
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
              <span className=" group hover:bg-primary duration-300 ease-linear w-10 h-10 rounded-full leading-10 bg-[#f0f4ff] inline-block relative mt-4 sm:mt-5 xl:mt-8">
                <FaAngleRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-subHeading group-hover:text-white" />
              </span>
            </main>
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md">
              <img className="mx-auto" src={image2} alt="sharedHosting" />
              <h2 className="title text-3xl xl:mt-10 xl:mb-8 mt-3 mb-2 sm:mt-3 sm:mb-4">
                Shared Hosting
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
              <span className=" group hover:bg-primary duration-300 ease-linear w-10 h-10 rounded-full leading-10 bg-[#f0f4ff] inline-block relative mt-4 sm:mt-5 xl:mt-8">
                <FaAngleRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-subHeading group-hover:text-white" />
              </span>
            </main>
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md">
              <img className="mx-auto" src={image3} alt="sharedHosting" />
              <h2 className="title text-3xl xl:mt-10 xl:mb-8 mt-3 mb-2 sm:mt-3 sm:mb-4">
                Reseller Hosting
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
              <span className=" group hover:bg-primary duration-300 ease-linear w-10 h-10 rounded-full leading-10 bg-[#f0f4ff] inline-block relative mt-4 sm:mt-5 xl:mt-8">
                <FaAngleRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-subHeading group-hover:text-white" />
              </span>
            </main>
            {/* =======  */}

            {/* =======  */}
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md">
              <img className="mx-auto" src={image1} alt="sharedHosting" />
              <h2 className="title text-3xl xl:mt-10 xl:mb-8 mt-3 mb-2 sm:mt-3 sm:mb-4">
                Cloud Hosting
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
              <span className=" group hover:bg-primary duration-300 ease-linear w-10 h-10 rounded-full leading-10 bg-[#f0f4ff] inline-block relative mt-4 sm:mt-5 xl:mt-8">
                <FaAngleRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-subHeading group-hover:text-white" />
              </span>
            </main>
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md">
              <img className="mx-auto" src={image2} alt="sharedHosting" />
              <h2 className="title text-3xl xl:mt-10 xl:mb-8 mt-3 mb-2 sm:mt-3 sm:mb-4">
                Dedicated Hosting
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
              <span className=" group hover:bg-primary duration-300 ease-linear w-10 h-10 rounded-full leading-10 bg-[#f0f4ff] inline-block relative mt-4 sm:mt-5 xl:mt-8">
                <FaAngleRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-subHeading group-hover:text-white" />
              </span>
            </main>
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md">
              <img className="mx-auto" src={image3} alt="sharedHosting" />
              <h2 className="title text-3xl xl:mt-10 xl:mb-8 mt-3 mb-2 sm:mt-3 sm:mb-4">
                Domain Name
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
              <span className=" group hover:bg-primary duration-300 ease-linear w-10 h-10 rounded-full leading-10 bg-[#f0f4ff] inline-block relative mt-4 sm:mt-5 xl:mt-8">
                <FaAngleRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-subHeading group-hover:text-white" />
              </span>
            </main>
            {/* =======  */}
          </div>
          {/* card  */}
        </div>
      </section>
    </>
  );
};

export default Services;
