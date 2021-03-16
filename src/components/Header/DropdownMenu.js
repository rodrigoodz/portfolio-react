import React from "react";
import NavbarItem from "./NavbarItem";
import Fade from "react-reveal/Fade";

const DropdownMenu = ({ isOpen }) => {
  return (
    <Fade top>
      <div
        className={
          isOpen
            ? "grid grid-rows-4 text-center items-center list-none bg_naval top-16 w-full fixed z-20"
            : "hidden"
        }
      >
        <NavbarItem name="Sobre Mi" />
        <NavbarItem name="Habilidades" />
        <NavbarItem name="Proyectos" />
        <NavbarItem name="Contactar" />
      </div>
    </Fade>
  );
};

export default DropdownMenu;
