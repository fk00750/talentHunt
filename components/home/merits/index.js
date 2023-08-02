import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Merits() {
  const meritsData = [
    {
      value: "8K+",
      description: "Success Stories",
    },
    {
      value: "200+",
      description: "Expert Instructors",
    },
    {
      value: "108k+",
      description: "Nationwide Students",
    },
    {
      value: "310+",
      description: "Trendy Subjects",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the time interval for each slide in milliseconds (3 seconds in this case)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-blue-700 w-full md:hidden">
        <div>
          <div className="">
            <Slider {...settings}>
              {meritsData &&
                meritsData.map((value, index) => {
                  return (
                    <div key={index} className="mx-4 my-4 text-white  py-8 ">
                      <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center w-fit border px-8 py-8 border-y-0">
                          <span className="text-4xl">{value.value}</span>
                          <span>{value.description}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
      {/* Desktop Version */}
      <div className="bg-blue-700 w-full hidden md:block">
        <div>
          <div className="grid md:grid-cols-4 grid-cols-2">
            <div className="border border-white border-l-0 border-y-0  mx-4 my-4 text-white flex flex-col justify-center items-center px-4 py-8 ">
              <span className="text-4xl">8K+</span>
              <span>Success Stories</span>
            </div>
            <div className="border border-white border-l-0 border-y-0  mx-4 my-4 text-white flex flex-col justify-center items-center px-4 py-8 ">
              <span className="text-4xl">200+</span>
              <span>Expert Instructor</span>
            </div>
            <div className="border border-white border-l-0 border-y-0  mx-4 my-4 text-white flex flex-col justify-center items-center px-4 py-8 ">
              <span className="text-4xl">108k+</span>
              <span>Nationwide Students</span>
            </div>
            <div className="border border-white border-x-0 border-y-0  mx-4 my-4 text-white flex flex-col justify-center items-center px-4 py-8 ">
              <span className="text-4xl">310+</span>
              <span>Trendy Subjects</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Merits;
