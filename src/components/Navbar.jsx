import React from "react";
import logo1 from "../assets/Group 46.png";
import logo2 from "../assets/moptro logo.png";

const Navbar = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1000",
        backgroundColor: "black",
      }}
    >
      <div className="flex justify-end min-h-[10vh]">
        <img src={logo1} alt="" className="mr-4 mt-4" />
      </div>

      <div className="flex flex-col items-center mt-4 min-h-[10vh]">
        <div className="relative">
          <img src={logo2} alt="" />
          <span
            className="absolute number w-8 h-8 flex items-center justify-center"
            style={{ top: -20, right: -20 }}
          >
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
