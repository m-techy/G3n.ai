import React from "react";
import Globe from "./Globe";

const Hero = () => {
  return (
    <div className="text-white flex w-full h-[90vh] items-center ">
      <div className="w-1/2 flex flex-col gap-4">
        <div>
          <div className="text-4xl  font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Unleash Your Imagination
          </div>
          <div className="text-4xl font-bold">Your Portal to Creation</div>
        </div>
        <div className="text-lg">
          Experience the Power of AI: Turn Words into Art, Stories, and Music
        </div>
        <div>
          <button type="button" className="btn">
            <strong>Explore more</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-1/2 h-[100%] overflow-hidden">
        <Globe></Globe>
      </div>
    </div>
  );
};

export default Hero;
