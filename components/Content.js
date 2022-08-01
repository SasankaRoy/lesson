import React from "react";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  StarIcon,
} from "@heroicons/react/solid";

export const Content = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <div className=" sm:pl-10">
                <h1 className="sm:w-4/5 text-black font-bold title-font text-5xl mb-2 sm:mb-0">
                  Our popular courses
                </h1>
                <p className="sm:w-3/5 leading-relaxed  pl-0 mt-3 text-lg">
                  Build new skills with new trendy courses and shine for the
                  next future career.
                </p>
              </div>
              <div className="flex space-x-5 ml-auto justify-center items-center">
                <ChevronDoubleLeftIcon className="h-10 bg-white text-yellow-400 rounded-full p-1 border border-yellow-400 cursor-pointer hover:bg-yellow-400 hover:text-white transition-all duration-200 ease-in-out shadow-md " />
                <ChevronDoubleRightIcon className="h-10 bg-white text-yellow-400 rounded-full p-1 border border-yellow-400 cursor-pointer hover:bg-yellow-400 hover:text-white transition-all duration-200 ease-in-out shadow-md " />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img6.jpg"
                />
              </div>
              <div className="flex justify-between items-center mt-5">
                <h2 className="text-3xl font-semibold title-font text-black ">
                  Basic web design
                </h2>
                <div className="flex">
                  <StarIcon className="h-7 text-yellow-400" />
                  <span className="text-yellow-400 font-medium text-lg">
                    4.5
                  </span>
                </div>
              </div>
              <p className="text-md font-medium leading-relaxed mt-2">
                Get the basic courses,gain knowledge and{" "}
                <br className="hidden lg:inline-block" /> shine for your future
                career.
              </p>

              <div className="flex items-center justify-between mt-5">
                <h1 className="text-black font-bold text-xl">$120.75</h1>
                <button className="px-5 p-2 bg-black text-white rounded-full font-medium hover:bg-yellow-400 hover:text-black transition duration-200 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img7.jpg"
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <h2 className="text-3xl font-semibold title-font text-black">
                  Ux/ui design
                </h2>
                <div className="flex">
                  <StarIcon className="h-7 text-yellow-400" />
                  <span className="text-yellow-400 font-medium text-lg">
                    4.5
                  </span>
                </div>
              </div>
              <p className="text-md font-medium leading-relaxed mt-2">
                Get the basic courses,gain knowledge and{" "}
                <br className="hidden lg:inline-block" /> shine for your future
                career.
              </p>

              <div className="flex items-center justify-between mt-5">
                <h1 className="text-black font-bold text-xl">$120.75</h1>
                <button className="px-5 p-2 bg-black text-white rounded-full font-medium hover:bg-yellow-400 hover:text-black transition duration-200 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/img8.jpg"
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <h2 className="text-3xl font-semibold title-font text-black ">
                  web App design
                </h2>
                <div className="flex">
                  <StarIcon className="h-7 text-yellow-400" />
                  <span className="text-yellow-400 font-medium text-lg">
                    4.5
                  </span>
                </div>
              </div>
              <p className="text-md font-medium leading-relaxed mt-2">
                Get the basic courses,gain knowledge and{" "}
                <br className="hidden lg:inline-block" /> shine for your future
                career.
              </p>
              <div className="flex items-center justify-between mt-5">
                <h1 className="text-black font-bold text-xl">$120.75</h1>
                <button className="px-5 p-2 bg-black text-white rounded-full font-medium hover:bg-yellow-400 hover:text-black transition duration-200 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
