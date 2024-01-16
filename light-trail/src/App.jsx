import { useState } from 'react'
import chip from './chip.png'

function App() {
  const [count, setCount] = useState(0)

  let pulse = document.querySelectorAll(".pul");
  let ball = document.getElementById("ball");
  let area = document.getElementById("area");
  setInterval(() => {
    let rectArea = area.getBoundingClientRect();
    let rectBall = ball.getBoundingClientRect();
    if (rectArea.top < rectBall.top) {
      pulse.forEach((item) =>
        item.classList.add("bg-yellow-300", "animate-pulse")
      );
    } else {
      pulse.forEach((item) =>
        item.classList.remove("bg-yellow-300", "animate-pulse")
      );
    }
  }, 10);

  return (
    <>
     {/* parent background div */}
     <div className="bg-[rgba(0,0,0,1)] z-30 relative">
        {/* background div for numbered boxes */}
        <div className="bg-red-40 h-96 relative z-20 w-96 mx-auto ts flex justify-center items-center">
          {/* center chip */}
          <div className="absolute z-30 w-[10%] left-[48%] h-[10%] top-[44%] bg-blue-400">
            <img src={chip} className="w-full h-full" />
          </div>
          {/*glowing div: control the progressive glow trail using radial gradient background image */}
          <div className="relative bg-yellow-20 w-[80%] h-56 mb-16 ctr animate-puls">
            {/* ball to control the numbered boxes illumination */}
            <div id="ball" className="absolute z-30 w-10 h-10 rounded-full bg-transparent move"></div>
           
            {/* rect bottom */}
            <div className="bg-black absolute bottom-0 h-20 left-[1.7px] right-[1px]"></div>

            {/* rect top left */}
            <div className="bg-black absolute h-[8.91rem] w-[10.67rem]">
              {/* responsible for the L-shaped line present in the rect top left */}
              <div className="relative bg-[rgba(255,255,255,0.1)] w-full h-full">
                <div className="absolute w-[35%] h-full bg-black"></div>
                <div className="absolute w-full h-[34%] right-0 top-0 bg-black"></div>
                <div className="absolute w-[64%] h-[65%] right-0 bottom-0 bg-black"></div>
              </div>
            </div>

            {/* rect top right */}
            <div className="bg-black absolute h-[8.8rem] right-0 w-[8.4rem] top-[1px]"></div>
          </div>

          <div className="p-1 bg-black z-40">
            <div className="bg-transparent">
              <div className="bg-red-300">
                {/* numbered box: ONE */}
                <div id="area" className="absolute bottom-0 left-0 pul w-28 h-28  p-[1px]">
                  <p className="text-red-600 text-xl font-bold bg-gray-950 w-full h-full flex items-center justify-center">
                    ONE
                  </p>
                  {/* line connecting box ONE and box TWO */}
                  <div className="pul absolute top-1/2 h-[1px] w-40 left-full"></div>
                </div>

                {/* numbered box: TWO */}
                <div className="absolute bottom-0 right-0 pul w-28 h-28  p-[1px]">
                  <p className="text-red-600 text-xl font-bold bg-gray-950 w-full h-full flex items-center justify-center">
                    TWO
                  </p>
                  {/* line connecting box TWO and box THREE */}
                  <div className="pul absolute right-5 bottom-full w-[.5px] h-40"></div>
                </div>

                {/* numbered box: THREE */}
                <div className="absolute top-0 right-0 pul w-28 h-28  p-[1px]">
                  <p className="text-red-600 text-xl font-bold bg-gray-950 w-full h-full flex items-center justify-center">
                    THREE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
