import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <ul className="md:flex hidden ">
      <NavbarItem name="Sobre Mi" to="about-me" />
      <NavbarItem name="Habilidades" to="skills" />
      <NavbarItem name="Herramientas" to="tools" />
      <NavbarItem name="Proyectos" to="projects" />
    </ul>
  );
};

export default Navbar;
