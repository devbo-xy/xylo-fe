import { Assets } from "assets";
import React from "react";
import Image from "next/image";

export const Section = () => {
  const CardTwo = (props) => {
    return (
      <div className="lg:w-[21rem] w-full h-[11rem] rounded-xl bg-white flex justify-center items-center text-center">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <div className="bg-black h-12 w-12 rounded-full flex justify-center items-center">
            <Image src={props.src} alt={props.alt} height={28} width={28} />
          </div>
          <div className="w-full items-center flex flex-col space-y-2">
            <h2 className="text-base uppercase text-black font-bold tracking-wider">
              {props.title}
            </h2>
            <p className="text-black text-sm font-semibold w-[70%]">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full py-10 px-8 bg-[#050505]">
      <div className="text-white max-w-7xl mx-auto flex justify-center items-center">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6">
          <CardTwo
            src={Assets.Fire}
            alt="Fire Icon"
            title="Trending Now"
            desc="Find the interviews and articles that are trending now."
          />
          <CardTwo
            src={Assets.Time}
            alt="Time Icon"
            title="Releases"
            desc="Catch up on all of the latest interviews and articles."
          />
          <CardTwo
            src={Assets.Archive}
            alt="Arcive Icon"
            title="The Archives"
            desc="Explore the archives by browsing categories and tags."
          />
        </div>
      </div>
    </div>
  );
};
