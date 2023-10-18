import NewsfeedCard from "./NewsfeedCard";
import img1 from "../../assets/newsFeed/image1.png";
import img2 from "../../assets/newsFeed/image2.png";
import img3 from "../../assets/newsFeed/image3.png";
const NewsFeed = () => {
  return (
    <>
      <section className="py-17">
        <div className="text-center">
          <h2 className="title">News Feeds</h2>
          <p className="font-secondary text-subHeading  sm:max-w-xl sm:mx-auto xl:mt-8 mb-10 md:mb-16 xl:mb-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        {/* cards  */}
        <div className=" container-main">
          <div className="sm:grid grid-cols-2 lg:flex flex-wrap xl:flex-nowrap justify-evenly xl:justify-start gap-y-6 gap-x-3 lg:gap-x-0 xl:gap-6">
            <NewsfeedCard  image={img1} />
            <NewsfeedCard image={img2} />
            <NewsfeedCard  image={img3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsFeed;
