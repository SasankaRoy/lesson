import React from "react";

export const Footer = () => {
  return (
    <>
      {/* bg-[#320101] */}
      <footer className="text-gray-300 body-font bg-[#320101] ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xl mb-3">
                Lesson
              </h2>
              <p>
                Need to help for your dream career? trust us. With Lesson, study
                becomes a lot easier with us.
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 ">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 ">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xl mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Features</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Our pricing</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Latest News</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xl mb-3">
                Support
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">FAQ's</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">
                    Term and Conditions
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xl mb-3">
                Address
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <span className="font-semibold text-xl">
                    Location:
                    <span className="font-normal text-sm text-white">
                      27 Division st,New York,NY 10002,USA
                    </span>
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-xl">
                    Email:
                    <span className="font-normal text-sm text-white">
                      email@gmail.com
                    </span>
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-xl">
                    Phone:
                    <span className="font-normal text-sm text-white">
                      + 000 1234 567 890
                    </span>
                  </span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#320101]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-center">
            <p>copyright @2022 webdesign.gdn All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

