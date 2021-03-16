import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <ul className="md:flex hidden ">
      <NavbarItem name="Sobre Mi" />
      <NavbarItem name="Habilidades" />
      <NavbarItem name="Proyectos" />
      <NavbarItem name="Contactar" />
    </ul>
  );
};

export default Navbar;
