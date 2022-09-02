import React, { useEffect } from "react";
import Image from "next/image";
import { Assets } from "assets";
import Slider from "react-slick";

export const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const Card = (props) => {
    return (
      <div className="bg-white w-full lg:w-[21rem] h-[40rem] rounded-xl relative overflow-hidden">
        <div className="relative">
          <Image className="rounded-t-xl" src={Assets.Img1} alt="Image 1" />
        </div>
        <div className="bg-white w-full px-4 py-6 absolute top-[12.5rem] h-full">
          <div className="flex flex-col justify-between space-y-8 ">
            <div className="flex flex-col space-y-4 w-full">
              <h2 className="font-bold text-xl tracking-wide">
                {/* {props.title} */}
                #129 Compound Kings: Lessons Learned as an Investor and Emerging
                Manager | Robert Cantwell, Portfolio Manager
              </h2>
              <p className="text-base tracking-wider">
                {/* {props.desc} */}
                In Episode #129, Robert Cantwell, Founder & Portfolio Manager of
                Compound Kings joins us for our Outlier Investors series. We
                discuss lessons Robert has learned as an investor and portfolio
                manager and the future of active management.
              </p>
            </div>
            <div>
              <span className="text-base font-semibold text-[#FF9900]">
                Show Notes
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto w-full flex justify-center items-center">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6">
          {/* <Slider className="" {...settings}> */}
          <Card />
          <Card />
          <Card />
          {/* </Slider> */}
        </div>
      </div>

      {/* <div className="bg-white w-[21rem] h-[40rem] rounded-xl relative overflow-hidden">
        <div className="relative">
          <Image className="rounded-t-xl" src={Assets.Img1} alt="Image 1" />
        </div>
        <div className="bg-white w-full px-4 py-6 absolute top-[12.5rem] h-full">
          <div className="flex flex-col justify-between space-y-8 ">
            <div className="flex flex-col space-y-4 w-full">
              <h2 className="font-bold text-xl tracking-wide">
                #129 Compound Kings: Lessons Learned as an Investor and Emerging
                Manager | Robert Cantwell, Portfolio Manager
              </h2>
              <p className="text-base tracking-wider">
                In Episode #129, Robert Cantwell, Founder & Portfolio Manager of
                Compound Kings joins us for our Outlier Investors series. We
                discuss lessons Robert has learned as an investor and portfolio
                manager and the future of active management.
              </p>
            </div>
            <div>
              <span className="text-base font-semibold text-[#FF9900]">
                Show Notes
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
