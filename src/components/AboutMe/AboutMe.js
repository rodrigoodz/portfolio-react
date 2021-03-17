import React from "react";
import SocialIcons from "./SocialIcons";

const AboutMe = () => {
  return (
    <div
      className="flex xl:flex-row flex-col flex-1 md:h-full h-screen bg-green-800  justify-center items-center  md:p-20 p-4  relative z-10"
      id="about-me"
    >
      <div className="flex flex-col md:container md:mx-auto  items-center">
        <h2 className="text-white md:text-3xl text-xl ">Acerca de Mi</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white my-3 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
        <p className="md:text-xl text-white md:mb-3">
          Hola!, soy Rodrigo y estoy actualmente estoy cursando mi ultimo año de
          Ingenieria en Informatica en la Universidad Nacional del Litoral.
          Desde muy chico estuve interesado en todo lo relacionado con la
          Informatica, y fue en la escuela donde por primera vez pude tener
          contacto con un codigo de programacion con el tan olvidado 'Visual Fox
          Pro'. Desde ese momento mi interes por el desarrollo se vió en aumento
          hasta llegar a la universidad, donde pude obtener acceso a muchas
          herramientas base y conocimientos que me permitieron ahondar mucho más
          aun en el tema.
        </p>
        <p className="md:text-xl text-white md:mb-3">
          Disfruto mucho diseñando sitios web responsivos asi como aplicaciones
          moviles, utilizando las herramientas que me provee el todopoderoso
          Javascript. Mi objetivo es crear componentes con diseños
          'pixel-perfect' y construir aplicaciones del mundo real que brinden
          una excelente experiencia de usuario.
        </p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default AboutMe;
