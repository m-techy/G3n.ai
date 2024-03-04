import React from "react";
import Globe from "./Globe";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="herosection text-white flex w-full h-[100vh] items-center sm:flex-col sm:pt-[10vh] px-[10%]">
      {/* <div className="absolute bg-radial-gradient w-[120%] h-[220%]"></div> */}
      <div className="w-1/2 flex flex-col gap-4 sm:w-full sm:h-[55%] sm:gap-1 sm:z-20 ">
        <div>
          <div className="text-4xl  font-bold from-blue-500 to-sky-200  bg-gradient-to-r bg-clip-text text-transparent sm:text-3xl">
            Unleash Your Imagination
          </div>
          <div className="text-4xl font-bold sm:text-3xl">Your Portal to Creation</div>
        </div>
        <div className="text-lg sm:text-[0.9rem]">
          Experience the Power of AI: Turn Words into Art, Stories, and Music
        </div>
        <div className="sm:scale-75 sm:ml-[-12vw] ">
          <Link to="/products" className="!w-fit flex">
            <button type="button" className="btn ">
              <strong>Explore more</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-[100%] overflow-hidden z-20 sm:w-full sm:h-[90%]">
        <Globe></Globe>
      </div>
    </div>
  );
};

export default Hero;
