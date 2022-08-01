import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

export const Qutos = () => {
  return (
    <>
      <section className="text-gray-300 body-font bg-[#320101]">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center sm:justify-between items-start mx-auto">
            <div className="flex-col items-center w-2/3 ">
              <img
                src="/img9.jpg"
                className="h-28 w-28  rounded-full object-cover object-top"
                alt="person"
              />

              <h1 className="text-4xl font-semibold mt-3">Peter Moor</h1>
              <p className="text-md mt-3">Student of web Design</p>
              <div className="flex items-center space-x-3 mt-4 justify-start">
                <div className="h-2 w-2 rounded-full bg-white" />
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            </div>

            <h1 className="flex-grow sm:pl-16 text-2xl font-medium title-font ">
              Not only does mt resume looks impressive -filled with the names
              and logos of the world class institution-but these certificates
              also bring me closer to my career goals by validating the skills
              I&apos;ve learned.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
