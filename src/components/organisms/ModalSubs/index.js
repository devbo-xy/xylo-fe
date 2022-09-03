import React, { useEffect } from "react";
import Image from "next/image";
import { Assets } from "assets";

export default function ModalSubs({ closeModal }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "visible");
  }, []);

  return (
    <div className="h-screen w-full bg-black/80 backdrop-blur-sm fixed items-center justify-center z-[100] top-[0rem]">
      <div className="h-screen items-center flex flex-col justify-center">
        <div className="bg-[#171717] ring-1 ring-[#262626] shadow-lg px-4 lg:px-5 lg:h-[25rem] w-[22rem] lg:w-[25rem] h-[24rem] rounded-xl flex-col space-y-8  flex items-center justify-center relative">
          <button
            onClick={() => closeModal(false)}
            className="h-8 w-8 rounded-lg absolute top-2 right-2 font-bold hover:scale-105 text-white/25"
          >
            X
          </button>
          <div className="flex flex-col space-y-10">
            <div>
              <h2 className="text-white font-mono text-sm tracking-wider text-center w-full">
                Join 5k+ subscribers and receive exclusive tools, tips, and
                resources, sent directly from Daniel Scrivner.
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center relative">
              <div className="bg-black ring-1 ring-white px-4 py-2 h-[3.4rem] w-full rounded-t-lg  flex justify-start">
                <input
                  type="text"
                  placeholder="Enter your email ...."
                  className="bg-transparent text-base font-extralight tracking-wider outline-none text-white w-full"
                />
              </div>
              <div className="bg-white w-full lg:w h-[3.4rem] ring-1 ring-[#FFFFFF] rounded-b-lg hover:bg-[#FFFFFF]/70 flex items-center justify-center cursor-pointer">
                <span className="text-base font-mono">Try It</span>
              </div>
            </div>
            <div className="w-[90%] mx-auto">
              <h2 className="font-mono text-xs tracking-wider text-center w-full text-zinc-600">
                By subscribing, you agree to our ‍
                <span className="underline">privacy policy </span>
                and will added to Daniel’s free email newsletter.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
