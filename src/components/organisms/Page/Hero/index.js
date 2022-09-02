import { Assets } from "assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-[#050505] pt-20 lg:pt-0">
      <div className="w-full h-[4rem] bg-[#050505] ring-1 ring-[#1c1c1c] relative hidden lg:block">
        <div className="flex h-full items-center justify-center">
          <div className="max-w-6xl w-full flex justify-center flex-row space-x-[17rem]">
            <Link href="# ">
              <h2 className="text-sm text-white font-semibold hover:text-[#FF9900]">
                Podcast
              </h2>
            </Link>
            <Link href="# ">
              <h2 className="text-sm text-white font-semibold hover:text-[#FF9900]">
                Newsletter
              </h2>
            </Link>
            <Link href="# ">
              <h2 className="text-sm text-white font-semibold hover:text-[#FF9900]">
                Topics & Tags
              </h2>
            </Link>
            <Link href="# ">
              <h2 className="text-sm text-white font-semibold hover:text-[#FF9900]">
                More
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-12 w-full h-[85vh] flex justify-center items-center space-y-6 relative">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <h2 className="lg:text-3xl text-2xl text-white font-semibold tracking-wider w-full text-center lg:text-left lg:w-[42%] ">
              Timeless insights for business and life.
            </h2>
            <p className="text-white text-center lg:text-left w-full lg:w-[39%] font-extralight text-base lg:text-xl tracking-wider leading-8 ">
              Every week, I sit down with someone in the Top 1% of their field —
              from NYT bestselling authors to Oscar winners — to decode what
              they've mastered. Listen as I uncover the tactics, routines, and
              habits that will propel you to the top of your field.
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <div
              style={{ transition: "0.4s" }}
              className="ring-1 ring-[#FFFFFF]/25 bg-[#050505] hover:bg-[#292929] w-full lg:w-[25rem] p-4 rounded-lg flex items-center cursor-pointer font-extralight"
            >
              <div className="flex justify-between w-full flex-col lg:flex-row items-center space-y-3 lg:space-y-0 space-x-0 lg:space-x-4">
                <div className="lg:w-36 lg:h-[4.8rem] w-24 h-20 relative flex justify-center items-center ">
                  <Image
                    className="rounded-md"
                    src={Assets.Img1}
                    alt="Image 1"
                    layout="fill"
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <div>
                    <h2 className="text-[10px] font-bold text-[#FF9900] uppercase tracking-wider text-center lg:text-left">
                      Latest Episode
                    </h2>
                  </div>
                  <Link href="# ">
                    <div>
                      <p className="text-white text-sm font-extralight text-center lg:text-left">
                        #129 Compound Kings: Lessons Learned as an Investor and
                        Emerging Manager | Robert Cantwell, Portfolio Manager
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 space-x-0 lg:space-x-2">
              <Link href="# ">
                <div
                  style={{ transition: "0.4s" }}
                  className="ring-1 ring-[#FFFFFF]/25 bg-[#050505] hover:bg-[#292929] rounded-lg w-full lg:w-[9rem] flex items-center justify-center py-[0.75rem] cursor-pointer"
                >
                  <span className="text-white text-sm tracking-wider">
                    Start Here
                  </span>
                </div>
              </Link>
              <Link href="# ">
                <div
                  style={{ transition: "0.4s" }}
                  className="ring-1 ring-[#FFFFFF]/25 bg-[#050505] hover:bg-[#292929] rounded-lg w-full lg:w-[15.5rem] flex items-center justify-center py-[0.75rem] cursor-pointer"
                >
                  <span className="text-white text-sm tracking-wider">
                    Listen to the Podcast
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute w-[37rem] h-[37rem] right-[3rem] -top-0 hidden lg:block">
          <Image src={Assets.ProfilePic} alt="Profile Pic" layout="fill" />
        </div>
      </div>
      <div className="w-full py-10 hidden lg:block">
        <div className="ring-1 ring-[#FFFFFF]/25 bg-[#050505] h-[4rem] flex justify-center items-center">
          <div className="relative w-[14rem] h-full flex justify-center items-center">
            <Image src={Assets.Billboard} alt="Logo Billboard" layout="fill" />
          </div>
          <div className="relative w-[14rem] h-full flex justify-center items-center">
            <Image src={Assets.NewYork} alt="Logo Billboard" layout="fill" />
          </div>
          <div className="relative w-[14rem] h-full flex justify-center items-center">
            <Image src={Assets.Bloomberg} alt="Logo Billboard" layout="fill" />
          </div>
          <div className="relative w-[14rem] h-full flex justify-center items-center">
            <Image
              src={Assets.WashingtonPost}
              alt="Logo Billboard"
              layout="fill"
            />
          </div>
          <div className="relative w-[15rem] h-full flex justify-center items-center">
            <Image src={Assets.Espn} alt="Logo Billboard" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
