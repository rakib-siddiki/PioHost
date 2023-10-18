/* eslint-disable react/prop-types */
import { AiOutlineCalendar } from "react-icons/ai";
const NewsfeedCard = ({ image }) => {
  return (
    <>
      <main className="md:px-2 md:py-2 px-2 py-2  hover:shadow-sm duration-300 ease-linear rounded-md">
        <img src={image} alt="dataMigration" />
        <div className="px-2">
          {/* ==============  */}
          <div className="flex items-center mt-5 xl:mt-10">
            <div className="w-10 h-10 rounded-full bg-[#dbdbdb] "></div>
            <div className="font-secondary font-medium text-sm text-primary ml-3 mr-8">
              Aurthur William
            </div>
            <div>
              <p className=" flex items-center gap-x-2 font-secondary text-sm text-subHeading">
                <span>
                  <AiOutlineCalendar />
                </span>
                23rd Mar 2019
              </p>
            </div>
          </div>
          {/* ==============  */}

          <div>
            <h2 className="title  text-lg lg:text-2xl my-2 md:my-5 xl:my-7 w-80">
              Hosting as far as the eye is can see! visitor.
            </h2>
            <p className="text-subHeading w-72 text-sm xl:pb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod temp or incididunt ut labore.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default NewsfeedCard;
