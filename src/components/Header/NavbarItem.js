import React from "react";
import { Link } from "react-scroll";

const NavbarItem = ({ name, to = "" }) => {
  return (
    <Link
      activeClass="font-black"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <li className="mx-4 text-white font-sans my-2 cursor-pointer">{name}</li>
    </Link>
  );
};

export default NavbarItem;
