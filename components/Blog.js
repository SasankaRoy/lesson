import React from "react";
import {StarIcon} from "@heroicons/react/solid";

export const Blog = () => {
  return (
    <>
      <section class="text-gray-700 body-font bg-yellow-100 pb-5 mb-3">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center justify-center items-center">
            <div class="flex flex-wrap  flex-col py-6 mb-12 text-center justify-center items-center">
              <h1 class="sm:w-2/5 text-black font-bold title-font text-5xl mb-2 sm:mb-0">
                Our Blog
              </h1>
              <p class="sm:w-3/5 text-lg leading-relaxed  sm:pl-10 pl-0 mt-4">
                Read our regular travel blog and know the latest updates of tour
                and travel.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-lg bg-white  ">
              <div class="rounded-lg h-64 overflow-hidden ">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/img1.jpg"
                />
              </div>
              <div className="flex flex-row items-center max-w-max space-x-3 mt-5  rounded-full shadow-xl px-5 py-3">
                <div>
                  <StarIcon className="h-3 text-yellow-400" />
                </div>
                <span class="text-md font-normal title-font text-gray-900 ">
                  20 October 2021
                </span>
              </div>
              <p class="text-lg font-bold text-black leading-relaxed mt-2">
                How to become a pro web designer in 2020 and get remat job?
              </p>
              <button className="px-5 p-2 mt-5 bg-black text-white rounded-full font-medium hover:bg-yellow-400 hover:text-black transition duration-200 ease-in-out">
                Book Now
              </button>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-lg bg-white ">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/img3.jpg"
                />
              </div>
              <div className="flex flex-row items-center max-w-max space-x-3 mt-5  rounded-full shadow-xl px-5 py-3">
                <div>
                  <StarIcon className="h-3 text-yellow-400" />
                </div>
                <span class="text-md font-normal title-font text-gray-900 ">
                  20 October 2021
                </span>
              </div>
              <p class="text-lg font-bold text-black leading-relaxed mt-2">
                How to become a pro web designer in 2020 and get remat job?
              </p>
              <button className="px-5 p-2 mt-5 bg-black text-white rounded-full font-medium hover:bg-yellow-400 hover:text-black transition duration-200 ease-in-out">
                Book Now
              </button>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-lg bg-white ">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/img4.jpg"
                />
              </div>
              <div className="flex flex-row items-center max-w-max space-x-3 mt-5  rounded-full shadow-xl px-5 py-3">
                <div>
                  <StarIcon className="h-3 text-yellow-400" />
                </div>
                <span class="text-md font-normal title-font text-gray-900 ">
                  20 October 2021
                </span>
              </div>
              <p class="text-lg font-bold text-black leading-relaxed mt-2">
                How to become a pro web designer in 2020 and get remat job?
              </p>

              <button className="px-5 p-2 mt-5 bg-black text-white rounded-full font-medium hover:bg-yellow-400 hover:text-black transition duration-200 ease-in-out">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 mb-5 justify-center">
          <div className="h-2 w-2 rounded-full bg-black" />
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          <div className="h-2 w-2 rounded-full bg-black" />
        </div>
      </section>
    </>
  );
};
