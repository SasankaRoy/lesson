import React from "react";

export const Main = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex space-x-2 px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-1/2  md:w-1/2 w-5/6 mb-10 md:mb-0  ">
          {/* lg:max-w-lg lg:w-1/2  md:w-1/2 w-5/6 */}
            <img
              className=" object-center rounded-lg  "
              alt="hero"
              src="/img4.jpg"
            />
          </div>
          <div className=" mb-10 md:mb-24  ">
            <img
              className=" object-center rounded-lg md:h-80 h-40
              "
              alt="hero"
              src="/img1.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-[44px] text-3xl mb-4 font-bold text-black">
              Learner outcomes through
              <br className="hidden lg:inline-block" />
             our awesome Platform
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
             87% of people learning for professional development <br className="hidden lg:inline-block" />
             reports career benefits like getting a promotion,a raise,or <br className="hidden lg:inline-block" /> starting a new career
            </p>
            <p className='text-lg mb-5'>Lesson impact Report (2022)</p>
            <div className="flex justify-center mt-2">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded-full text-lg transition duration-200 ease-in-out">
                Sign Up
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* 2nd */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:pl-10">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-black">
              Take the next step towards your
              <br className="hidden lg:inline-block" />
             personal and professional goals
             <br className="hidden lg:inline-block" />
             with Lesson.
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
             Take the next step towards.Join now to receive personalized and more  <br className="hidden lg:inline-block" />
             recommendation from the full Coursera catalog.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded-full transition duration-200 ease-in-out text-lg">
               Join Now
              </button>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:pr-5">
            <img
              className="object-cover object-center rounded-lg"
              alt="hero"
              src="/img4.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};
