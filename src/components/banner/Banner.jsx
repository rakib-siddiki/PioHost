const Banner = () => {
  return (
    <>
      <section className="bg-banner bg-cover bg-no-repeat bg-top  xl:pb-16 flex justify-center">
        <div className="flex flex-col items-center pt-10 md:pt-[100px]">
          <p className="font-secondary font-medium text-white text-sm">
            Inclued Every Isometric Illustrations
          </p>
          <h1 className="font-primary font-semibold text-3xl sm:text-5xl xl:text-8xl  max-w-[890px] text-white text-center xl:py-10 py-5">
            Domain & Hosting In One Platform
          </h1>
          <div className="pb-64 sm:pb-72 md:pb-[280px] xl:pb-[370px] flex ">
            <button className="btn">Get Started</button>
            <button className="btn ml-5 ">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
