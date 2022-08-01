import React from "react";
import { PlayIcon } from "@heroicons/react/solid";
export const Hero = ({Toggle}) => {
  return (
    <>
      <div className="hero bg-yellow-100  ">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6 mb-10 ml-8 md:mb-0">
              <img
                className="object-cover object-center rounded-md"
                alt="hero"
                src="/img2.jpg"
              />
              <div className={`sub bg-orange-50  px-2 py-3 sm:px-0 sm:py-0  relative -mt-[17rem] sm:-mt-[19rem] ml-[8rem] md:ml-[9rem] lg:ml-[18rem] sm:ml-[18rem] rounded-md ${Toggle?'hidden':''} transition-all duration-200 ease-in`}>
                <div className='mainDiv sm:p-3 p-0 bg-yellow-50 opacity-100  flex justify-center items-center' >
                  <div className="img rounded-full mr-2">
                    <img
                      src="https://www.bing.com/th?id=OIP.dL9j16_6eT0hFbbkK6bqjwHaD7&w=200&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
                      alt="logo"
                      className="h-[6rem] w-[5rem] sm:w-[6rem] rounded-full object-center object-contain"
                    />
                  </div>
                  <div className="text">
                    <p className="cour text-sm">20 courses</p>
                    <h1 className="font-semibold text-leading sm:text-xl text-black">
                      UX/UI Design
                    </h1>
                  </div>
                </div>

                <div className="mainDiv sm:p-3  flex justify-center items-center">
                  <div className="img mr-2">
                    <img
                      src="https://www.bing.com/th?id=OIP.DqpD76lEvFKyiamFKaNJvQHaHa&w=106&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
                      alt="logo"
                      className="h-[3.7rem] w-[2.9rem] sm:w-[3.7rem] rounded-full object-center object-contain"
                    />
                  </div>
                  <div className="text">
                    <p className="cour text-sm">20 courses</p>
                    <h1 className="font-semibold text-lg sm:text-xl text-black">
                      Development
                    </h1>
                  </div>
                </div>
                <div className="mainDiv sm:p-3  flex justify-center items-center">
                  <div className="img mr-2">
                    <img
                      src="https://th.bing.com/th/id/OIP.uPEyQT5tMVcgEi4_g8dA_QHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                      alt="logo"
                      className="h-[6rem] w-[5rem] sm:w-[7.5rem] rounded-lg object-center object-cover"
                    />
                  </div>
                  <div className="text">
                    <p className="cour text-sm">30 courses</p>
                    <h1 className="font-semibold text-lg sm:text-xl text-black">
                      Marketing
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-28 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
                Learn without
                <br className="hidden lg:inline-block" />
                limits and spread <br className="hidden lg:inline-block" />{" "}
                knowledge.
              </h1>
              <p className="mb-8 text-2xl leading-relaxed">
                Build new skills for that &quot;this is my year&quot; feeling with{" "}
                <br className="hidden lg:inline-block" />
                courses,certificates and degrees from world-class{" "}
                <br className="hidden lg:inline-block" /> university and companies.
              </p>
              <div className="flex-col md:inline-block justify-center items-center">
                <button className="inline-flex justify-center space-y-3 items-center text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:text-yellow-500 hover:bg-white  rounded-full shadow-sm text-lg">
                  See courses
                </button>
                <button className="ml-4 inline-flex justify-center items-center  text-black   py-2 px-6 focus:outline-none  rounded text-lg">
                  <PlayIcon className="h-10 w-10 text-yellow-400 mr-3 p-0 shadow-xl rounded-full" />
                  Watch Videos
                </button>
              </div>
              <p className="mt-5 text-md">Recent engagement</p>
              <div className="scrose flex justify-center items-center space-x-16 mt-6">
                <h1 className="text-5xl font-bold text-black">
                  50K{" "}
                  <span className="text-lg font-normal text-gray-600">
                    students
                  </span>{" "}
                </h1>
                <h1 className="text-5xl font-bold text-black">
                  70+{" "}
                  <span className="text-lg font-normal text-gray-600">
                    courses
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
