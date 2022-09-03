import { Assets } from "assets";
import React from "react";
import Image from "next/image";

export const SectionTwo = () => {
  return (
    <div className="min-h-screen w-full px-6 py-10 bg-[#050505] ring-1 ring-[#1c1c1c]">
      <div className="flex justify-center items-center max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 px-2">
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
              <div className="bg-white hover:bg-gray-200 h-[3rem] w-[12rem] mx-auto rounded-full flex justify-center items-center cursor-pointer">
                <span className="text-sm font-semibold font-mono">
                  Explore Episodes
                </span>
              </div>
            </div>
            <div>
              <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute bottom-[5rem] lg:bottom-[9rem]">
                <Image
                  className="rounded-r-xl"
                  src={Assets.ImgListen1}
                  alt="Image Listen 1"
                />
              </div>
              <div className="lg:w-[12rem] w-[6.3rem] h-[6.3rem] lg:h-[12rem] absolute bottom-[3.5rem] lg:left-[11.5rem] lg:bottom-[6.5rem]">
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
                  Every Friday, I share five things I've been reading, using,
                  and loving—including articles, biohacks, gadgets, and more.
                </p>
              </div>
              <div className="bg-white hover:bg-gray-200 h-[3rem] w-[12rem] mx-auto rounded-full flex justify-center items-center cursor-pointer">
                <span className="text-sm font-semibold font-mono">
                  Explore Episodes
                </span>
              </div>
            </div>
            <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute bottom-[5rem] lg:bottom-[11rem]">
              <Image
                className="rounded-r-xl"
                src={Assets.ImgSubs1}
                alt="Image Subscribe 1"
              />
            </div>
            <div className="lg:w-[12rem] w-[6.3rem] h-[6.3rem] lg:h-[12rem] absolute left-[6.1rem] bottom-[3.5rem] lg:left-[11.5rem] lg:bottom-[8rem]">
              <Image
                className="rounded-xl"
                src={Assets.ImgSubs2}
                alt="Image Subscribe 2"
              />
            </div>
            <div className="lg:w-[10.5rem] w-[5.5rem] h-[5.5rem] lg:h-[10.5rem] absolute right-0 bottom-[5rem] lg:bottom-[11rem]">
              <Image
                className="rounded-l-xl"
                src={Assets.ImgSubs3}
                alt="Image Subscribe 3"
              />
            </div>
            <div className="lg:w-[12rem] w-[5.5rem] h-[5.5rem] lg:h-[12rem] absolute -bottom-[2rem] lg:-left-[1.5rem] lg:-bottom-[3.5rem]">
              <Image
                className="rounded-r-xl"
                src={Assets.ImgSubs4}
                alt="Image Subscribe 4"
              />
            </div>
            <div className="lg:w-[12rem] w-[6.3rem] h-[6.3rem] lg:h-[12rem] absolute left-[6.1rem] -bottom-[3.5rem] lg:left-[11.5rem] lg:-bottom-[5.5rem]">
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
        </div>
      </div>
      <div className="w-full h-auto lg:h-[25rem] py-[6rem]">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <div className="flex flex-col space-y-8">
            <div className="flex-col space-y-5 flex items-center">
              <h2 className="uppercase text-white text-lg lg:text-2xl font-semibold tracking-wider text-center">
                Get The Weekly Summary
              </h2>
              <p className="text-white text-center tracking-wider font-extralight text-sm lg:text-base w-full lg:w-[55%]">
                Join 7,500+ including Fortune 500 CEOs, championship coaches,
                and bestselling authors who get my free weekly summary.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center relative">
              <div className="bg-black ring-1 ring-white px-4 py-2 h-[3.4rem] w-full lg:w-[20rem] rounded-t-lg lg:rounded-r-none lg:rounded-l-lg flex justify-start">
                <input
                  type="text"
                  placeholder="Enter your email ...."
                  className="bg-transparent text-base font-extralight tracking-wider outline-none text-white w-full"
                />
              </div>
              <div className="bg-white w-full lg:w-20 h-[3.4rem] ring-1 ring-[#FFFFFF] rounded-b-lg lg:rounded-l-none lg:rounded-r-lg hover:bg-[#FFFFFF]/70 flex items-center justify-center cursor-pointer">
                <span className="text-base font-mono">Try It</span>
              </div>
            </div>
            <div className="flex justify-center">
              <h4 className="text-gray-500 font-extralight tracking-wider text-xs lg:text-sm text-center">
                By subscribing, you agree to our
                <span className="underline cursor-pointer hover:text-gray-400">
                  privacy policy.
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
