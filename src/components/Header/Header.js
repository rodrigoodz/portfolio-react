import React from "react";
import logo from "../../assets/logo.png";
import DropdownIcon from "./DropdownIcon";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

const Header = ({ toggle, isOpen }) => {
  return (
    <>
      <Fade>
        <div className="flex items-center justify-between shadow bg_mazarine md:px-8 px-2 fixed w-full z-30">
          <img src={logo} alt="logo" className="w-16" />
          <Navbar />
          <DropdownIcon toggle={toggle} isOpen={isOpen} />
        </div>
      </Fade>
    </>
  );
};

export default Header;
