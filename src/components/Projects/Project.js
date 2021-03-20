import React from "react";
import { Zoom } from "react-awesome-reveal";

const Project = ({
  name,
  link,
  img = "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  text,
  technologies = [],
}) => {
  return (
    <div className="relative ">
      <Zoom triggerOnce>
        <a href={link} target="blank">
          <div className="w-full h-full  absolute z-5 overflow-hidden">
            <h1 className="text-white 2xl:text-4xl xl:text-3xl sm:text-xl  text-sm font-extrabold pl-3 pt-2">
              {name}
            </h1>

            {text}
            <div className="flex md:flex-row flex-col md:flex hidden">
              {technologies.map((v, indx) => {
                return (
                  <h3
                    className="bg-gray-200 md:ml-3 md:mt-3 mx-1 mt-1 md:p-1 pl-2 md:ring-2 ring-gray-300  xl:text-lg text-xs rounded"
                    key={indx}
                  >
                    {v}
                  </h3>
                );
              })}
            </div>
          </div>
          <img
            src={img}
            alt={`img_${name}`}
            className="rounded-lg relative z-10 opacity-100 hover:opacity-20 w-full h-full transition duration-500 ease-in-out"
          />
        </a>
      </Zoom>
    </div>
  );
};

export default Project;
