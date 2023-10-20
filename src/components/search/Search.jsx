import { BiChevronDown } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <>
      <section className="flex flex-col items-center pb-10 md:pb-16 xl:pb-17">
        <div className="relative">
          <input
            type="text"
            placeholder="Type your Domain..."
            className=" outline-none rounded-5 text-subHeading border border-borderColor font-secondary
            sm:w-[590px] sm:py-8 sm:pl-[60px] sm:pr-[230px] w-80 py-5 pl-4 pr-36 "
          />
          <div className="flex items-center sm:gap-x-2 text-subHeading absolute top-5 sm:top-8 right-24 sm:right-44">
            All <BiChevronDown />
          </div>
          <div className="flex items-center btn absolute top-[9px] sm:top-3.5 md:top-3 -right-5 bg-primary border-none gap-x-2 cursor-pointer py-3.5 sm:py-5   shadow-xl  xl:shadow-primary/30 shadow-primary/20">
            <BiSearch /> Search
          </div>
        </div>

        {/* priceing */}
        <div className="flex flex-wrap gap-x-3 md:gap-3 lg:gap-x-5 px-7 secondPortriait:px-12 sm:landscape:px-16 sm:px-20 md:px-0">
          <div className="mt-8">
            <div className="border border-borderColor rounded-5 py-3 pl-7 w-[140px] text-subHeading hover:bg-primary group duration-300 ease-linear">
              <h4 className="font-semibold duration-300 ease-linear group-hover:text-white">
                .com /{" "}
                <span className="text-primary group-hover:text-white duration-300 ease-linear ">
                  $7.54
                </span>
              </h4>
            </div>
          </div>
          <div className="mt-8">
            <div className="border border-borderColor rounded-5 py-3 pl-7 w-[140px] text-subHeading hover:bg-primary group duration-300 ease-linear">
              <h4 className="font-semibold duration-300 ease-linear group-hover:text-white">
                .net /{" "}
                <span className="text-primary group-hover:text-white duration-300 ease-linear ">
                  $6.89
                </span>
              </h4>
            </div>
          </div>
          <div className="mt-8">
            <div className="border border-borderColor rounded-5 py-3 pl-7 w-[140px] text-subHeading hover:bg-primary group duration-300 ease-linear">
              <h4 className="font-semibold duration-300 ease-linear group-hover:text-white">
                .hum /{" "}
                <span className="text-primary group-hover:text-white duration-300 ease-linear ">
                  $4.67
                </span>
              </h4>
            </div>
          </div>
          <div className="mt-8">
            <div className="border border-borderColor rounded-5 py-3 pl-7 w-[140px] text-subHeading hover:bg-primary group duration-300 ease-linear">
              <h4 className="font-semibold duration-300 ease-linear group-hover:text-white">
                .bok /{" "}
                <span className="text-primary group-hover:text-white duration-300 ease-linear ">
                  $5.98
                </span>
              </h4>
            </div>
          </div>
          <div className="mt-8">
            <div className="border border-borderColor rounded-5 py-3 pl-7 w-[140px] text-subHeading hover:bg-primary group duration-300 ease-linear">
              <h4 className="font-semibold duration-300 ease-linear group-hover:text-white">
                .aus /{" "}
                <span className="text-primary group-hover:text-white duration-300 ease-linear ">
                  $9.21
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
