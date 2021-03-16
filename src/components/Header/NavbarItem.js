import React from "react";

const NavbarItem = ({ name, href = "#" }) => {
  return (
    <li className="mx-4 text-white font-mono my-2">
      <a href={href}>{name}</a>
    </li>
  );
};

export default NavbarItem;
