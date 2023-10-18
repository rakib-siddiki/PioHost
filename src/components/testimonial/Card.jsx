/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
const Card = ({ item }) => {
  const { title, description, name } = item;

  const [show, setShow] = useState(false);

  return (
    <>
      {/* card  */}
      <div className=" px-7 py-8 lg:px-7 lg:py-8 xl:px-10 xl:py-12 bg-white rounded-sm cursor-pointer">
        <div className="lg:flex justify-between ">
          <div className="flex items-center  text-[#ff921e] md:ml-7 lg:ml-0">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>
            <h3 className="xl:text-lg text-primary font-medium font-secondary mt-2 lg:mt-0 ">
              {title}
            </h3>
          </div>
        </div>
        <div>
          <p
            onClick={() => setShow((prev) => !prev)}
            className={`font-secondary text-subHeading text-sm mt-4 mb-5 xl:mt-8 xl:mb-10 xl:w-[300px] line-clamp-4 xl:line-clamp-none ${
              show ? `line-clamp-none` : `line-clamp-4`
            }`}
          >
            {description}
          </p>
        </div>
        <div className="flex  items-center gap-x-5 ">
          {/* img  */}
          <div className="w-[60px] h-[60px] rounded-full lg:rounded-full bg-[#c5c5c5] overflow-hidden flex  items-center justify-center object-cover"></div>
          {/* img  */}
          <div>
            <h3 className="font-secondary font-medium text-base md:portrait:text-sm ">
              {name}
            </h3>
            <p className="font-secondary text-primary md:portrait:text-sm">
              Founder, Google
            </p>
          </div>
        </div>
      </div>
      {/* card  */}
    </>
  );
};

export default Card;
