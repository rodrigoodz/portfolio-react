import React from "react";
import ProjectsGrid from "./ProjectsGrid";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div
      className="flex xl:flex-row flex-col flex-1 md:h-full  bg-green-800  justify-center items-center  lg:p-10 p-4 "
      id="projects"
    >
      <Fade direction="bottom">
        <div className="flex flex-col md:container md:mx-auto  items-center ">
          <h2 className="text-white md:text-3xl text-xl ">Proyectos</h2>
          <h3 className="text-gray-300 mt-2 font-thin  text-center">
            Desde la idea hasta la creación, aquí hay algunas aplicaciones que
            he desarrollado.
          </h3>
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
          <ProjectsGrid />
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
