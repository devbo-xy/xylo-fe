import { Assets } from "assets";
import React from "react";
import Image from "next/image";

export const SectionTwo = () => {
  return (
    <div className="min-h-screen w-full px-6 py-10 bg-[#050505] ring-1 ring-[#1c1c1c]">
      <div className="flex justify-center items-center max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 px-2">
          <div className="bg-[#171717] ring-1 ring-[#1c1c1c] w-full lg:w-[35rem] h-[33rem] lg:h-[100vh] rounded-xl py-10 relative overflow-hidden">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center flex-col space-y-3">
                <h4 className="text-[#FF9900] font-bold text-xs lg:text-sm uppercase tracking-wider text-center">
                  Listen Now
                </h4>
                <h2 className="text-white text-2xl lg:text-3xl tracking-wide text-center">
                  Outliers Podcast
                </h2>
                <p className="text-center text-lg lg:text-xl text-white w-full lg:w-[80%] tracking-wider font-extralight">
                  Every week, I sit down with someone in the Top 1% of their
                  field to decode what they've mastered and what they've learned
                  along the way.
                </p>
              </div>
              <div className="bg-white h-[3rem] w-[12rem] mx-auto rounded-full flex justify-center items-center">
                <span className="text-sm tracking-wider font-semibold">
                  Explore Episodes
                </span>
              </div>
            </div>
            <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute bottom-[5rem] lg:bottom-[9rem]">
              <Image
                className="rounded-r-xl"
                src={Assets.ImgListen1}
                alt="Image Listen 1"
              />
            </div>
            <div className="lg:w-[12rem] w-[6.3rem] h-[6.3rem] lg:h-[12rem] absolute left-[6.1rem] bottom-[3.5rem] lg:left-[11.5rem] lg:bottom-[6.5rem]">
              <Image
                className="rounded-xl"
                src={Assets.ImgListen2}
                alt="Image Listen 2"
              />
            </div>
            <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute right-0 bottom-[5rem] lg:bottom-[9rem]">
              <Image
                className="rounded-l-xl"
                src={Assets.ImgListen3}
                alt="Image Listen 3"
              />
            </div>
            <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute -bottom-[2rem] lg:-bottom-[4rem]">
              <Image
                className="rounded-r-xl"
                src={Assets.ImgListen4}
                alt="Image Listen 4"
              />
            </div>
            <div className="lg:w-[12rem] w-[6.3rem] h-[6.3rem] lg:h-[12rem] absolute left-[6.1rem] -bottom-[3.5rem] lg:left-[11.5rem] lg:-bottom-[6.2rem]">
              <Image
                className="rounded-xl"
                src={Assets.ImgListen5}
                alt="Image Listen 5"
              />
            </div>
          </div>
          <div className="bg-[#171717] ring-1 ring-[#1c1c1c] w-full lg:w-[35rem] h-[33rem] lg:h-[100vh] rounded-xl py-10 relative overflow-hidden">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center flex-col space-y-3">
                <h4 className="text-[#FF9900] font-bold text-xs lg:text-sm uppercase tracking-wider text-center">
                  Subscribe Now
                </h4>
                <h2 className="text-white text-2xl lg:text-3xl tracking-wide text-center">
                  Friday 5 Email
                </h2>
                <p className="text-center text-lg lg:text-xl text-white w-full lg:w-[80%] tracking-wider font-extralight">
                  Every week, I sit down with someone in the Top 1% of their
                  field to decode what they've mastered and what they've learned
                  along the way.
                </p>
              </div>
              <div className="bg-white h-[3rem] w-[12rem] mx-auto rounded-full flex justify-center items-center">
                <span className="text-sm tracking-wider font-semibold">
                  Explore Episodes
                </span>
              </div>
            </div>
            <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute bottom-[5rem] lg:bottom-[9rem]">
              <Image
                className="rounded-r-xl"
                src={Assets.ImgSubs1}
                alt="Image Subscribe 1"
              />
            </div>
            <div className="lg:w-[12rem] w-[6.3rem] h-[6.3rem] lg:h-[12rem] absolute left-[6.1rem] bottom-[3.5rem] lg:left-[11.5rem] lg:bottom-[6.5rem]">
              <Image
                className="rounded-xl"
                src={Assets.ImgSubs2}
                alt="Image Subscribe 2"
              />
            </div>
            <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute right-0 bottom-[5rem] lg:bottom-[9rem]">
              <Image
                className="rounded-l-xl"
                src={Assets.ImgSubs3}
                alt="Image Subscribe 3"
              />
            </div>
            <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute -bottom-[2rem] lg:-bottom-[4rem]">
              <Image
                className="rounded-r-xl"
                src={Assets.ImgSubs4}
                alt="Image Subscribe 4"
              />
            </div>
            <div className="lg:w-[12rem] w-[6.3rem] h-[6.3rem] lg:h-[12rem] absolute left-[6.1rem] -bottom-[3.5rem] lg:left-[11.5rem] lg:-bottom-[6.2rem]">
              <Image
                className="rounded-xl"
                src={Assets.ImgSubs5}
                alt="Image Subscribe 5"
              />
            </div>
            <div className="lg:w-[12rem] w-[5.5rem] h-[5.5rem] lg:h-[12rem] absolute right-0 -bottom-[2rem] lg:-right-[1.5rem] lg:-bottom-[3.5rem]">
              <Image
                className="rounded-l-xl"
                src={Assets.ImgSubs6}
                alt="Image Subscribe 6"
              />
            </div>
          </div>
          {/* <div className="bg-[#171717] ring-1 ring-[#1c1c1c] w-full lg:w-[35rem] h-[100vh] rounded-xl py-10 relative overflow-hidden">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center flex-col space-y-3">
                <h4 className="text-[#FF9900] font-bold text-sm uppercase tracking-wider text-center">
                  Subscribe Now
                </h4>
                <h2 className="text-white text-3xl tracking-wide text-center">
                  Friday 5 Email
                </h2>
                <p className="text-center text-xl text-white w-[80%] tracking-wider font-extralight">
                  Every Friday, I share five things I've been reading, using,
                  and loving—including articles, biohacks, gadgets, and more.
                </p>
              </div>
              <div className="bg-white h-[3rem] w-[12rem] mx-auto rounded-full flex justify-center items-center">
                <span className="text-sm tracking-wider font-semibold">
                  Subscribe Now
                </span>
              </div>
            </div>
            <div className="w-[10.5rem] h-[10.5rem] absolute bottom-[11rem]">
              <Image
                className="rounded-r-xl"
                src={Assets.ImgSubs1}
                alt="Image Subscribe 1"
              />
            </div>
            <div className="w-[12rem] h-[12rem] absolute left-[11.5rem] bottom-[8rem]">
              <Image
                className="rounded-xl"
                src={Assets.ImgSubs2}
                alt="Image Subscribe 2"
              />
            </div>
            <div className="w-[10.5rem] h-[10.5rem] absolute right-0 bottom-[11rem]">
              <Image
                className="rounded-l-xl"
                src={Assets.ImgSubs3}
                alt="Image Subscribe 3"
              />
            </div>
            <div className="w-[12rem] h-[12rem] absolute -left-[1.5rem] -bottom-[3.5rem]">
              <Image
                className="rounded-r-xl"
                src={Assets.ImgSubs4}
                alt="Image Subscribe 4"
              />
            </div>
            <div className="w-[12rem] h-[12rem] absolute left-[11.5rem] -bottom-[5.5rem]">
              <Image
                className="rounded-xl"
                src={Assets.ImgSubs5}
                alt="Image Subscribe 5"
              />
            </div>
            <div className="w-[12rem] h-[12rem] absolute -right-[1.5rem] -bottom-[3.5rem]">
              <Image
                className="rounded-l-xl"
                src={Assets.ImgSubs6}
                alt="Image Subscribe 6"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
