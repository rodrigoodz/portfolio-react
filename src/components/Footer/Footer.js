import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="flex xl:flex-row flex-col flex-1 md:h-full  bg-gray-800  justify-between items-center  md:p-20 p-4  relative z-10 border-t-2  border-gray-700">
      <h3 className="text-white font-bold">
        Diseño y Desarrollo hecho por Rodrigo Odz - 2021
      </h3>
      <Contact />
    </div>
  );
};

export default Footer;
