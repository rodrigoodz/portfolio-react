import React from "react";
import logo from "../../assets/logo.png";
import DropdownIcon from "./DropdownIcon";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const Header = ({ toggle, isOpen }) => {
  return (
    <>
      <Fade>
        <div className="flex items-center justify-between shadow bg_mazarine md:px-8 px-2 fixed w-full z-30">
          <Link to={"description"} spy={true} smooth={true} duration={500}>
            <img
              src={logo}
              alt="logo"
              className="w-16 cursor-pointer transform transition duration-100 hover:scale-105"
            />
          </Link>
          <Navbar />
          <DropdownIcon toggle={toggle} isOpen={isOpen} />
        </div>
      </Fade>
    </>
  );
};

export default Header;
