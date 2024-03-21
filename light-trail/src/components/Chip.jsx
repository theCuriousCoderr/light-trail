import React from "react";
import chip from "../images/chip.png";

function Chip() {
  return (
    <div className="absolute z-10 w-full h-full flex items-center justify-center">
      <div className="size-12">
        <img src={chip} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Chip;
