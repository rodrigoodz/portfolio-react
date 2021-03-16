import React, { useState } from "react";
import logo from "../../assets/logo.png";
import DropdownIcon from "./DropdownIcon";
import DropdownMenu from "./DropdownMenu";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //TODO agregar efectos hover, transition cuando sale el dropdox, algo de react-reveal, etc
  return (
    <>
      <Fade>
        <div className="flex items-center justify-between shadow bg_mazarine md:px-8 px-2 ">
          <img src={logo} alt="logo" className="w-16" />
          <Navbar />
          <DropdownIcon toggle={toggle} isOpen={isOpen} />
        </div>
        <div>
          <DropdownMenu isOpen={isOpen} />
        </div>
      </Fade>
    </>
  );
};

export default Header;
