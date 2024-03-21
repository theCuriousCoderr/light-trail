import React from "react";

function Box({ pos }) {
  const style = {
    top: "top-0 left-0",
    bottom: "top-full -right-10",
    left: "top-full -left-10",
    right: "top-0 -right-10",
  };
  return (
    <div id="area" className={`absolute ${style[pos]} z-10  pul size-20 bg-gray-950 border border-white rounded-md flex items-center justify-center`}>
      <p className="text-slate-200 tracking-widest text-sm">
        {pos.toUpperCase()}
      </p>
    </div>
  );
}

export default Box;
