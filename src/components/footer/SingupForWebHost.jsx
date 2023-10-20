const SingupForWebHost = () => {
  return (
    <>
      <section
      className="border-b border-[#37477c] pb-8 xl:pb-20">
        <div className="md:flex lg:items-center justify-between">
          <div>
            <p className="font-secondary font-medium text-lg text-[#707eac]">
              Get an easy quote
            </p>
            <h2 className="font-primary font-semibold md:w-60 lg:w-64 xl:w-full text-3xl xl:text-4xl text-white my-5 xl:mt-8">
              Sign Up For Web Hosting Today!
            </h2>
          </div>
          <div>
            <p className="font-secondary text-lg text-white">
              Starting At Only
            </p>
            <h2 className="font-primary font-semibold text-4xl text-white my-5 xl:mt-0">
              $2.75/mo*
            </h2>
          </div>
          <div>
            <button className="font-secondary font-medium text-sm bg-gradient-to-t from-[#5b26fb] to-[#6b30f6]  w-[229px] h-[60px] rounded-full text-white active:scale-95 ">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingupForWebHost;
