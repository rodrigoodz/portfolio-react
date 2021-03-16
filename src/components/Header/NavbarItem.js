import React from "react";

const NavbarItem = ({ name }) => {
  return (
    <li className="mx-4 text-white font-mono my-2">
      <a href="#a">{name}</a>
    </li>
  );
};

export default NavbarItem;
