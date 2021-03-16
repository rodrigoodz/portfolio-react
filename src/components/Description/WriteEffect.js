import React from "react";
import TypeMe, { Delete, Delay } from "react-typeme";

const WriteEffect = () => {
  return (
    <TypeMe
      strings={[
        "Estudiante de Ingeniería en Informática",
        <Delete characters={39} />,
        "Desarrollador web y movil",
        <Delete characters={25} />,
        "Focalizado en el stack MERN",
        <Delay ms={2000} />,
      ]}
      loop
      className="text-white md:text-3xl "
    />
  );
};

export default WriteEffect;
