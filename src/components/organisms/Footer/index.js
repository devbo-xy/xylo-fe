import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-[#050505] px-8 py-0 lg:py-4 h-full flex flex-col space-y-20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0">
        <div className="flex-col flex space-y-10 lg:space-y-12">
          <div className="flex-col flex space-y-1">
            <h2 className="text-white text-xs font-mono tracking-widest w-full lg:w-[70%] leading-6 text-center lg:text-left">
              Daniel Scrivner is an entreprenuer and investor focused on
              building enduring companies and breakthrough products.
            </h2>
            <Link href="# ">
              <div className="cursor-pointer">
                <p className="text-white text-xs font-mono tracking-widest hover:text-[#FF9900] transition-all text-center lg:text-left">
                  See what he’s working on now
                </p>
              </div>
            </Link>
          </div>
          <div>
            <h2 className="text-white text-3xl text-center lg:text-left">
              Daniel Scrivner
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 space-x-0 lg:space-x-0">
          <div className="w-[11rem]">
            <ul className="flex flex-col space-y-4 lg:space-y-8">
              <h2 className="text-white text-center lg:text-left text-xs font-mono tracking-widest fot-bold">
                Explore
              </h2>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Most Popular
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Most Recent
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Topics & Tags
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Friday Five
              </li>
            </ul>
          </div>
          <div className="w-[11rem]">
            <ul className="flex flex-col space-y-4 lg:space-y-8">
              <h2 className="text-white text-center lg:text-left text-xs font-mono tracking-widest fot-bold">
                Outliers
              </h2>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Episodes
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Subscribe Now
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                About The Show
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Sponsors
              </li>
            </ul>
          </div>
          <div className="w-[11rem]">
            <ul className="flex flex-col space-y-4 lg:space-y-8">
              <h2 className="text-white text-center lg:text-left text-xs font-mono tracking-widest fot-bold">
                Articles
              </h2>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Show Notes
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Transcripts
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Essays
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Snippets
              </li>
            </ul>
          </div>
          <div className="w-[11rem]">
            <ul className="flex flex-col space-y-4 lg:space-y-8">
              <h2 className="text-white text-center lg:text-left text-xs font-mono tracking-widest fot-bold">
                More
              </h2>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                About Daniel
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Business Card
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Newsroom
              </li>
              <li className="text-gray-500 hover:text-gray-400 text-center lg:text-left text-xs font-mono tracking-widest">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center space-y-4 lg:space-y-0 flex-col lg:flex-row p-4 lg:py-0">
        <div className="w-[60%]">
          <h2 className="text-zinc-600 text-[12px] text-center lg:text-left">
            Copyright © 2020 Daniel Scrivner. All rights reserved.
          </h2>
        </div>
        <div className="">
          <ul className="flex flex-row space-x-4">
            <li className="text-zinc-600 hover:text-gray-400 text-[12px]">
              Privacy & Terms
            </li>
            <li className="text-zinc-600 hover:text-gray-400 text-[12px]">
              Disclosures
            </li>
            <li className="text-zinc-600 hover:text-gray-400 text-[12px]">
              Sitemap
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
