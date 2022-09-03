import React, { useEffect } from "react";
import Image from "next/image";
import { Assets } from "assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Card = () => {
  const Card = (props) => {
    return (
      <div className="bg-white w-full lg:w-[21rem] h-[40rem] rounded-xl relative overflow-hidden">
        <div className="relative">
          <Image className="rounded-t-xl" src={props.src} alt={props.alt} />
        </div>
        <div className="bg-white w-full px-4 py-6 absolute top-[12rem] h-full">
          <div className="flex flex-col justify-between space-y-8 ">
            <div className="flex flex-col space-y-4 w-full">
              <h2 className="font-bold text-lg lg:text-xl tracking-wide">
                {props.title}
              </h2>
              <p className="text-sm lg:text-base tracking-wider">
                {props.desc}
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="w-full px-10 py-4 lg:px-20 bg-[#050505]">
      <Slider className="lg:ml-7" {...settings}>
        <Card
          src={Assets.Img1}
          alt="Image 1"
          title="#129 Compound Kings: Lessons Learned as an Investor and Emerging
          Manager | Robert Cantwell, Portfolio Manager"
          desc=" In Episode #129, Robert Cantwell, Founder & Portfolio Manager of
                Compound Kings joins us for our Outlier Investors series. We
                discuss lessons Robert has learned as an investor and portfolio
                manager and the future of active management."
        />
        <Card
          src={Assets.Img2}
          alt="Image 2"
          title="#129 Compound Kings: Lessons Learned as an Investor and Emerging Manager | Robert Cantwell, Portfolio Manager"
          desc="In Episode #129, Robert Cantwell, Founder & Portfolio Manager of Compound Kings joins us for our Outlier Investors series. We discuss lessons Robert has learned as an investor and portfolio manager and the future of active management."
        />
        <Card
          src={Assets.Img3}
          alt="Image 3"
          title="#128 Andrew Herr of Fount: My Favorite Books, Tools, Habits and More | 20 Minute Playbook"
          desc="In Episode #128, we deconstruct Andrew Herr's peak performance playbook—from his favorite book to the tiny habit that's had the biggest impact on his life. Andrew is the Founder and CEO of Fount."
        />
        <Card
          src={Assets.Img4}
          alt="Image 4"
          title="#122 Smallhold: Growing the World’s Best Mushrooms in High-Tech Mini Farms Right in Restaurants and Grocery Stores | Andrew Carter, Co-Founder & CEO"
          desc="In Episode #122, we explore growing the world’s best mushrooms in high-tech mini-farms. We’re joined by Andrew Carter, Smallhold’s Co-Founder & CEO. We cover distributed farming and how Smallhold is aiming to revamp the food industry."
        />
        <Card
          src={Assets.Img5}
          alt="Image 5"
          title="#124 Andrew Carter of Smallhold: My Favorite Books, Tools, Habits and More | 20 Minute Playbook"
          desc="In Episode #124, we deconstruct Andrew Carter's peak performance playbook—from their favorite book to the tiny habit that's had the biggest impact on their life. Andrew is the Co-Founder & CEO of Smallhold."
        />
        <Card
          src={Assets.Img6}
          alt="Image 6"
          title="#126 Saad Alam of Hone: My Favorite Books, Tools, Habits and More | 20 Minute Playbook"
          desc="In Episode #126, we deconstruct Saad Alam's peak performance playbook—from his favorite book to the tiny habit that's had the biggest impact on his life. Saad is the Founder and CEO of Hone. "
        />
      </Slider>
    </div>
  );
};
