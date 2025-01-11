import React from "react";
import img1 from "../../assets/guy.png";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import Leader from "../../assets/Leader.svg"
import Vector2 from "../../assets/Vector2.svg"
import ASL from "../../assets/ASL.svg"

export default function Body() {
  return (
    <>
      <div>
        <div className="flex h-1/2 mt-28 ">
          <div className="flex flex-col items-center w-3/5 p-4">
         
            <div className="shadow-md flex items-center gap-4 w-48 justify-center font-inter p-1 rounded-full text-xl italic">
            <div>
            <BsStars className="text-orange-600 "/>
          </div>
              AI-Assistant
            </div>
            <div className="mt-3">
              <span className="text-3xl">🧏🏻 </span>
              <span className="text-3xl font-semibold">Echo-Link</span>
            </div>
            <p className="w-1/2 text-gray-700 text-center mt-4">
            We give Deaf people a superpower to Connect with World without the need of an Personal Interpreter 
            </p>
            <Link to={"/upload"}>
            <button
              className="bg-[#434343] mt-5 px-4 p-1 rounded-lg text-white  bg-zinc-800 hover:bg-zinc-800
          text-white 
          px-4 py-2 
          rounded-xl 
          transition-all duration-300 ease-in-out
          shadow-md hover:shadow-lg hover:scale-125 hover:shadow-lg hover:shadow-gradient transition-all duration-300 "
            >
              Get Started
            </button>
                </Link>
          </div>

          <div className=" flex justify-center w-1/2 ">
            <div>
              <img className="h-4/5" src={img1} alt="" />
            </div>
          </div>
        </div>
        <div>
            <div className="border flex items-center justify-center gap-8 p-2">
                <div>
                    <img src={Leader} alt="" />
                </div>
                <div className="">
                    <img src={Vector2} alt="" />
                    <div className="w-fit mx-auto">
                    <Link to={"/speech2sign"}>
                    <button
              className="bg-[#434343]   mt-5 px-4 p-1 rounded-lg text-white  bg-zinc-800 hover:bg-zinc-800
              text-white 
              px-4 py-2 
              rounded-xl 
              transition-all duration-300 ease-in-out
              shadow-md hover:shadow-lg hover:scale-125 hover:shadow-lg hover:shadow-gradient transition-all duration-300 "
              >

              Convert Now
            </button>
                  </Link>
                </div>
                </div>
                <div>
                   
                    <img src={ASL} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
