import dataMigration from "../../assets/choose/dataMigration.png";
import dDos from "../../assets/choose/dDos.png";
import dataSecurity from "../../assets/choose/dataSecurity.png";

const WhyChoose = () => {
  return (
    <>
      <section className="py-10 md:py-16 xl:py-17">
        <div className="container-main">
          <div className="text-center">
            <h1 className="title">Why Choose Us?</h1>
            <p className=" font-secondary text-subHeading max-w-xl mx-auto mt-3 sm:mt-4 lg:mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* ==========cards============ */}
          <div className="flex flex-wrap lg:flex-nowrap justify-evenly gap-4 md:gap-x-1 relative">
            {/* horizontal line  */}
            <div className=" xl:absolute content-[] top-[309px] left-[212px]  xl:w-[330px]  xl:h-[2px] z-10 bg-[#eeefff]"></div>
            {/* horizontal line  */}

            {/* card1  */}
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md mt-5  sm:mt-8 xl:mt-10">
              <img
                className="mx-auto"
                src={dataMigration}
                alt="dataMigration"
              />
              <div className="hidden lg:block md:my-8 xl:my-10">
                <button className="outline-none w-10 h-10 rounded-full border border-[#eeefff] font-secondary text-primary hover:bg-primary hover:text-white ">
                  1
                </button>
              </div>
              <h2 className="title text-3xl my-4 sm:mt-3 sm:mb-4 md:mt-5 xl:mt-10 xl:mb-8 ">
                Reseller Hosting
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
            </main>
            {/* card1  */}
            {/* card1  */}
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md mt-5  sm:mt-8 xl:mt-10">
              <img className="mx-auto" src={dDos} alt="dataMigration" />
              <div className="hidden lg:block md:my-8 xl:my-10">
                <button className=" outline-none w-10 h-10 rounded-full border border-[#eeefff] font-secondary text-primary hover:bg-primary hover:text-white ">
                  2
                </button>
              </div>
              <h2 className="title text-3xl my-4 sm:mt-3 sm:mb-4 md:mt-5 xl:mt-10 xl:mb-8 ">
                Reseller Hosting
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
            </main>
            {/* card1  */}

            {/* horizontal line  */}
            <div className=" xl:absolute content-[] top-[309px] right-[212px]  xl:w-[330px]  xl:h-[2px] z-10 bg-[#eeefff]"></div>
            {/* horizontal line  */}

            {/* card1  */}
            <main className="text-center mb-10 px-2 py-2 hover:shadow-sm duration-300 ease-linear rounded-md mt-5  sm:mt-8 xl:mt-10">
              <img className="mx-auto" src={dataSecurity} alt="dataMigration" />
              <div className="hidden lg:block md:my-8 xl:my-10">
                <button className=" outline-none w-10 h-10 rounded-full border border-[#eeefff] font-secondary text-primary hover:bg-primary hover:text-white ">
                  3
                </button>
              </div>
              <h2 className="title text-3xl my-4 sm:mt-3 sm:mb-4 md:mt-5 xl:mt-10 xl:mb-8 ">
                Reseller Hosting
              </h2>
              <p className="text-subHeading w-80 leading-7 xl:leading-8 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore.
              </p>
            </main>
            {/* card1  */}
          </div>
          {/* ========cards==========  */}
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
