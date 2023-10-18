import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const Testimonial = () => {
  const [slider, setSlider] = useState(null);
  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };
  // slider settings
  //card data
  const data = [
    {
      title: `“ Design Quality ”`,
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi. `,
      name: `Rakib Siddiki`,
    },
    {
      title: `“ Development ”`,
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi. `,
      name: `Rakib siddiki`,
    },
    {
      title: `“ Hosting ”`,
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi. `,
      name: `Rakib siddiki`,
    },
    {
      title: `“ Development ”`,
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi. `,
      name: `Rakib siddiki`,
    },
  ];
  // card data

  // mapping data
  let silderCard = [];
  silderCard = data.map((item, i) => <Card item={item} key={i}></Card>);

  return (
    <>
      <section className=" bg-[#3300c9] py-10 md:py-16 xl:py-17">
        <div className="container-main">
          {/* title  */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-primary font-semibold text-4xl md:text-[60px] text-white ">
                Testimonials
              </h2>
              <p className="font-secondary text-sm text-[#9277e1] sm:w-96 lg:w-[470px] mt-3 md:mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="hidden lg:flex gap-x-5">
              <span
                onClick={() => setSlider(slider.slickPrev)} // Go to the previous slide
                className=" w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold bg-[#5c33d3] text-white hover:text-black hover:bg-white duration-300 ease-linear rounded-full active:scale-90"
              >
                <AiOutlineArrowLeft />
              </span>
              <span
                onClick={() => setSlider(slider.slickNext)} // Go to the previous slide
                className=" w-[60px] h-[60px] flex items-center justify-center text-xl font-semibold bg-[#5c33d3] text-white hover:text-black hover:bg-white duration-300 ease-linear rounded-full active:scale-90"
              >
                <AiOutlineArrowRight />
              </span>
            </div>
          </div>
          {/* title  */}

          {/* cards  */}
          <div className=" md:mt-16 xl:mt-20">
            <Slider {...settings} ref={(arrowRef) => setSlider(arrowRef)}>
              {silderCard}
            </Slider>
          </div>
          {/* cards  */}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
