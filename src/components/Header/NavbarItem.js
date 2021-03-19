import React from "react";
import { Link } from "react-scroll";

const NavbarItem = ({ name, to = "", toggle }) => {
  return (
    <Link
      activeClass="font-black"
      to={to}
      spy={true}
      offset={-45}
      smooth={true}
      duration={500}
      onClick={toggle}
    >
      <li className="py-1 mx-2 text-white font-sans my-2 cursor-pointer transform transition duration-100 hover:scale-105">
        {name}
      </li>
    </Link>
  );
};

export default NavbarItem;
