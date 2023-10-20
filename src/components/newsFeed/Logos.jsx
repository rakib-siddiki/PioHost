import image1 from "../../assets/newsFeed/logos/image1.png";
import image2 from "../../assets/newsFeed/logos/image2.png";
import image3 from "../../assets/newsFeed/logos/image3.png";
import image4 from "../../assets/newsFeed/logos/image4.png";
import image5 from "../../assets/newsFeed/logos/image5.png";
const Logos = () => {
  return (
    <>
      <section className="container-main">
        <div className="flex flex-wrap justify-between gap-6 sm:gap-10 ">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
      </section>
    </>
  );
};

export default Logos;
