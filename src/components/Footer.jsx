import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = ({ setShowHomeScreen, showHomeScreen }) => {
  return (
    <div
      className="flex justify-around mx-auto items-center p-2 md:p-4 menu"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: "20",
      }}
    >
      <NavLink
        to="#"
        className="text-center flex items-center justify-center rounded-xl "
        style={{
          width: "40vw",
          backgroundColor: showHomeScreen === 1 ? "#38383880" : "",
          padding: "0.3rem",
        }}
        onClick={() => setShowHomeScreen(1)}
      >
        <AiFillHome size={30} color="#36A546" />
      </NavLink>
      <NavLink
        to="#"
        className="text-center flex items-center justify-center rounded-xl "
        style={{
          width: "40vw",
          backgroundColor: showHomeScreen === 2 ? "#38383880" : "",
          padding: "0.3rem",
        }}
        onClick={() => setShowHomeScreen(2)}
      >
        <IoMdPerson size={30} color="#36A546" />
      </NavLink>
    </div>
  );
};

export default Footer;
