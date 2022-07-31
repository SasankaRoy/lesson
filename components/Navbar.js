import React, { useState } from "react";
import { MenuIcon, XIcon,PlayIcon } from "@heroicons/react/outline";

export const Navbar = ({Toggle,setToggle}) => {
  // const [Toggle, setToggle] = useState(false);
  return (
    <>
      <div className="sticky top-0">
        <div className="bg-yellow-100 p-5 px-9 flex justify-between items-center shadow-sm">
          <div className="brand">
            <h1 className=" font-medium text-2xl">Lesson</h1>
          </div>
          <div className="listItems md:flex md:items-center md:justify-center hidden ">
            <div className="linkBox">
              <div className="links flex  items-center justify-center ">
                {["home", "courses", "pricing", "reviews"].map((cur, id) => (
                  <>
                    <div className="flex items-center justify-center hover:text-orange-500 transition-all duration-150 ease-out">
                      <li key={id} className="list-none px-5">
                        <a href="#" className="capitalize font-medium text-lg">
                          {cur}
                        </a>
                      </li>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <button className="text-white text-lg font-medium rounded-full bg-black py-1 px-4 hover:bg-yellow-500 transition duration-200 ease-in-out">
              Sign In
            </button>
          </div>
          <MenuIcon
            className="h-10 w-10 md:hidden cursor-pointer"
            onClick={() => setToggle(true)}
          />
        </div>
        {Toggle && (
          <div className=" h-[100vh] bg-yellow-50    opacity-100 fixed  md:hidden bottom-0  flex-col -right-2 w-[40%] justify-start mt-6  items-center ">
            <XIcon
              className="h-10 w-10 md:hidden ml-[4.2rem] mt-5 cursor-pointer"
              onClick={() => {
                setToggle(false);
              }}
            />
  
            <div className="listItems z-15 space-y-5 md:flex md:items-center md:justify-center ">
         
              <div className="linkBox mt-5">
                <div className="links flex flex-col space-y-5  items-center justify-center ">
                  {["home", "courses", "pricing", "reviews"].map((cur, id) => (
                    <>
                      <div className="flex  items-center justify-center hover:text-yellow-500 transition-all duration-150 ease-out">
                        <li key={id} className="list-none px-5">
                          <a
                            href="#"
                            className="capitalize font-medium text-lg"
                          >
                            {cur}
                          </a>
                        </li>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <button className="text-white ml-8 text-lg font-medium rounded-full bg-black py-1 px-4 hover:bg-yellow-500 transition duration-200 ease-in-out">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
