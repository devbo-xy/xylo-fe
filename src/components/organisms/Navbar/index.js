import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Assets } from "assets";
import ModalSearch from "../ModalSearch";
import ModalSubs from "../ModalSubs";

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  useEffect(() => {
    const hamburger = document.querySelector("#hamburger");
    const navlinks = document.querySelector("#navlinks");

    const line = hamburger.querySelector("#line");
    const line2 = hamburger.querySelector("#line2");
    const line3 = hamburger.querySelector("#line3");

    hamburger.addEventListener("click", function () {
      if (navlinks.classList.contains("hidden")) {
        navlinks.classList.remove("hidden");
        line.classList.add("rotate-45", "absolute");
        line2.classList.add("-rotate-45", "absolute");
        line2.classList.remove("mt-1.5");
        line3.classList.add("absolute", "-right-[100rem]");
      } else {
        navlinks.classList.add("hidden");
        line.classList.remove("rotate-45", "absolute");
        line2.classList.remove("-rotate-45", "absolute");
        line2.classList.add("mt-1.5");
        line3.classList.remove("absolute", "-right-[100rem]");
      }
    });
  }, []);

  return (
    <header
      id="nav"
      style={{ transition: "0.5s" }}
      className="nav fixed lg:relative w-full h-14 items-center lg:flex lg:justify-center bg-[#050505] transition z-50 lg:h-12"
    >
      <nav className="container max-w-7xl mx-auto ">
        <div className="relative flex flex-wrap lg:flex-row items-center justify-between w-full">
          <div className="relative top-2 lg:top-0 z-10 w-full px-4 flex lg:flex-row-reverse items-center justify-between lg:max-w-7xl mx-auto">
            <div className="lg:hidden block">
              <button id="hamburger" className="relative w-10 h-10  ">
                <div
                  role="hidden"
                  id="line"
                  className="inset-0 w-6 h-0.5 m-auto bg-[#FFFFFF] transition duration-300"
                />
                <div
                  role="hidden"
                  id="line2"
                  className="inset-0 w-6 h-0.5 mt-1.5 m-auto bg-[#FFFFFF] transition duration-300"
                />
                <div
                  role="hidden"
                  id="line3"
                  className="inset-0 w-6 h-0.5 mt-1.5 m-auto bg-[#FFFFFF] transition duration-300"
                />
              </button>
            </div>
            <div className="hidden lg:block">
              <button
                onClick={() => {
                  setOpenSub(true);
                }}
                className="bg-[#292929] ring-1 ring-[#FFFFFF]/25 px-4 py-2 rounded-lg"
              >
                <h2 className="text-white text-xs font-mono tracking-widest">
                  Subscribe
                </h2>
              </button>
            </div>
            <Link href="# ">
              <div className="relative lg:w-[10.5rem] lg:-right-8 w-[11rem] h-full flex justify-center items-center cursor-pointer hover:text-[#FF9900]">
                <Image src={Assets.Logo} alt="Logo Litedex" />
              </div>
            </Link>
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="flex justify-center items-center lg:w-6 lg:h-6 w-8 h-8 rounded-md p-1 bg-[#292929] ring-1 ring-[#FFFFFF]/25"
            >
              <div className="text-white">
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
            </button>
          </div>
          <div
            id="navlinks"
            style={{ transition: "0.5s" }}
            className="hidden w-full h-auto items-center bg-[#050505] mt-[0.7rem] lg:mt-0 z-8 transition "
          >
            <ul className="py-4 text-gray-600 text-lg tracking-wide justify-center items-center flex flex-col lg:flex-row lg:space-x-12 lg:py-0">
              <li>
                <Link href="# ">
                  <a className="block w-full py-3 transition hover:text-[#1EC01E] text-white font-mono text-sm tracking-widest">
                    Podcast
                  </a>
                </Link>
              </li>
              <li>
                <Link href="# ">
                  <a
                    href=""
                    className="block w-full py-3 transition hover:text-[#1EC01E] text-white font-mono text-sm tracking-widest"
                  >
                    Newsletter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="# ">
                  <a className="block w-full py-3 transition hover:text-[#1EC01E] text-white font-mono text-sm tracking-widest">
                    Topics & Tags
                  </a>
                </Link>
              </li>
              <li>
                <Link href="# ">
                  <a className="block w-full py-3 transition hover:text-[#1EC01E] text-white font-mono text-sm tracking-widest">
                    Newsroom
                  </a>
                </Link>
              </li>
              <li>
                <Link href="# ">
                  <a className="block w-full py-3 transition hover:text-[#1EC01E] text-white font-mono text-sm tracking-widest">
                    Contact
                  </a>
                </Link>
              </li>
              <div className="flex">
                <button
                  onClick={() => {
                    setOpenSub(true);
                  }}
                  className="bg-[#292929] ring-1 ring-[#FFFFFF]/25 px-4 py-2 rounded-lg w-[18rem]"
                >
                  <h2 className="text-white text-sm font-mono tracking-widest">
                    Subscribe
                  </h2>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {openModal && <ModalSearch closeModal={setOpenModal} />}
      {openSub && <ModalSubs closeModal={setOpenSub} />}
    </header>
  );
};
