import React, { useEffect, useState } from "react";

import Chip from "./Chip";
import Box from "./Box";

function Foundation() {
    const [glow, setGlow] = useState(false)
useEffect(() => {
    setInterval(() => {
        checkBall();
    }, 100)
}, [])

function checkBall() {
    let ball = document.getElementById("ball").getBoundingClientRect()
    let container = document.getElementById("glowing").getBoundingClientRect()
    if (ball.top === container.top) {
        setGlow(false)
    } else {
        setGlow(true)
    }
}

  return (
    <div className="bg-black z-30 relative w-[80%] mx-auto">
      {/*perspective/ tilted div: background div for numbered boxes */}
      <div className="bg-black w-full xl:w-96 xl:h-96 aspect-square relative z-20 mx-auto ts flex justify-center items-center">
        {/* center chip */}
        <Chip />

        {/*glowing div: control the progressive glow trail using radial gradient background image */}
        <div id="glowing" className="relative w-[80%] h-56 mb-16 ctr animate-puls">
          {/* left box */}
          <Box pos="left" />
          {/* bottom box */}
          <Box pos="bottom" />
          {/* right box */}
          <Box pos="right" />

          

          <div className="absolute bottom-0 right-[1px] left-[1px] bg-black h-[4.8rem]">
            {/* un-comment the p-tag for color debugging */}
            {/* <p className="text-white bg-red-400 size-full"></p> */}
          </div>
          <div className="absolute bottom-[79px] w-[50%] bg-black h-[10rem]">
            {/* un-comment the p-tag for color debugging */}
            {/* <p className="text-white bg-blue-400 size-full"></p> */}
          </div>
          <div className="absolute bottom-[79px] right-0 w-[49.5%] bg-black h-[100px]">
            {/* un-comment the p-tag for color debugging */}
            {/* <p className="text-white bg-green-400 size-full"></p> */}
          </div>
          <div className="absolute top-0 right-0 w-full bg-black h-11">
            {/* un-comment the p-tag for color debugging */}
            {/* <p className="text-white bg-purple-400 size-full"></p> */}
          </div>

          <div className={`absolute w-[1px] h-full -right-5 ${glow ? "bg-slate-800" : "bg-slate-300" }`}></div>
          <div className={`absolute h-[1px] w-full -bottom-10 ${glow ? "bg-slate-800" : "bg-slate-300" }`}></div>


          {/* ball to control the numbered boxes illumination */}
          <div
            id="ball"
            className="absolute top-0 z-30 w-10 h-10 rounded-full bg-red-30 move"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Foundation;
