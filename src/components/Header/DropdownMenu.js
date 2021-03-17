import React from "react";
import NavbarItem from "./NavbarItem";
import Fade from "react-reveal/Fade";

const DropdownMenu = ({ isOpen, toggle }) => {
  return (
    <Fade top>
      <div
        className={
          isOpen
            ? "grid grid-rows-4 text-center items-center list-none bg_naval top-16 w-full fixed z-20"
            : "hidden"
        }
      >
        <NavbarItem name="Sobre Mi" to="about-me" toggle={toggle} />
        <NavbarItem name="Habilidades" to="skills" toggle={toggle} />
        <NavbarItem name="Herramientas" to="tools" toggle={toggle} />
        <NavbarItem name="Proyectos" to="projects" toggle={toggle} />
        <NavbarItem name="Contactar" />
      </div>
    </Fade>
  );
};

export default DropdownMenu;
