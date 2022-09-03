import React, { useEffect } from "react";
import Image from "next/image";
import { Assets } from "assets";

export default function ModalSearch({ closeModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "visible");
  }, []);

  return (
    <div className="h-screen w-full bg-black/80 backdrop-blur-sm fixed items-center justify-center z-[100] top-[0rem]">
      <div className="h-screen items-center flex flex-col justify-center">
        <div className="bg-[#171717] ring-1 ring-[#262626] shadow-lg px-4 lg:px-8 lg:h-[25rem] w-[22rem] lg:w-[25rem] h-[24rem] rounded-xl flex-col space-y-8  flex items-center justify-center relative">
          <button
            onClick={() => closeModal(false)}
            className="h-8 w-8 rounded-lg absolute top-2 right-2 font-bold hover:scale-105 text-white/25"
          >
            X
          </button>
          <div className="flex flex-col space-y-6">
            <h2 className="text-white font-mono text-sm tracking-wider text-center w-full">
              Quickly find episodes, articles, and pages across the website.
            </h2>
            <div className="flex flex-col space-y-3">
              <div className="bg-[#171717] ring-1 ring-[#262626] rounded-full w-full py-4 flex items-center justify-center">
                <div className="text-white relative -right-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="lg:w-5 lg:h-5 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search ..."
                  className="bg-transparent text-white px-5 outline-none w-full"
                />
              </div>
              <div className="bg-[#212121] ring-1 ring-[#262626] rounded-full w-full py-4 flex items-center justify-center">
                <span className="text-white text-sm font-mono">Search</span>
              </div>
            </div>
          </div>
          <div className="w-full h-4 border-t-[0.1rem] border-t-[#262626] absolute top-[14rem]" />
          <div className="flex flex-row items-center justify-between w-full pt-5">
            <div className="flex items-center flex-col space-y-5 w-[7rem]">
              <div className="bg-[#212121] ring-1 ring-[#262626] w-12 lg:h-14 h-12 lg:w-14 rounded-full flex justify-center items-center">
                <Image
                  src={Assets.Fire}
                  alt="Logo Fire"
                  height={28}
                  width={28}
                />
              </div>
              <div className="flex items-center justify-center">
                <h2 className="font-mono text-white tracking-wider text-sm text-center">
                  Popular
                </h2>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 w-[7rem]">
              <div className="bg-[#212121] ring-1 ring-[#262626] w-12 lg:h-14 h-12 lg:w-14 rounded-full flex justify-center items-center">
                <Image
                  src={Assets.Time}
                  alt="Logo Time"
                  height={28}
                  width={28}
                />
              </div>
              <div className="flex items-center justify-center">
                <h2 className="font-mono text-white tracking-wider text-sm text-center">
                  Recent
                </h2>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 w-[7rem]">
              <div className="bg-[#212121] ring-1 ring-[#262626] w-12 lg:h-14 h-12 lg:w-14 rounded-full flex justify-center items-center">
                <Image
                  src={Assets.Archive}
                  alt="Logo Fire"
                  height={28}
                  width={28}
                />
              </div>
              <div className="flex items-center justify-center">
                <h2 className="font-mono text-white tracking-wider text-sm text-center">
                  Browse All
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
