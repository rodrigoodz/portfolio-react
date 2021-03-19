import React from "react";
import NavbarItem from "./NavbarItem";

const DropdownMenu = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "text-center items-center list-none bg_naval top-16 w-full fixed z-20"
          : "hidden"
      }
    >
      <NavbarItem name="Sobre Mi" to="about-me" toggle={toggle} />
      <NavbarItem name="Habilidades" to="skills" toggle={toggle} />
      <NavbarItem name="Herramientas" to="tools" toggle={toggle} />
      <NavbarItem name="Proyectos" to="projects" toggle={toggle} />
    </div>
  );
};

export default DropdownMenu;
