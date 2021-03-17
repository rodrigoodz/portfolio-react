import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <ul className="md:flex hidden ">
      <NavbarItem name="Sobre Mi" to="about-me" />
      <NavbarItem name="Habilidades" to="skills" />
      <NavbarItem name="Proyectos" />
      <NavbarItem name="Contactar" />
    </ul>
  );
};

export default Navbar;
