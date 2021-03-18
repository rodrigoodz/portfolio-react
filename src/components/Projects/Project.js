import React from "react";

const Project = ({
  name,
  link,
  img = "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  text,
  technologies = [],
}) => {
  return (
    <div className="relative ">
      <a href={link} target="blank">
        <div className="w-full h-full  absolute z-5 overflow-hidden">
          <h1 className="text-white md:text-4xl font-extrabold text-xl pl-3 pt-2">
            {name}
          </h1>

          {text}
          <div className="flex md:flex-row flex-col ">
            {technologies.map((v) => {
              return (
                <h3 className="bg-gray-200 md:ml-3 md:mt-3 ml-1 mt-1 md:p-1 pl-2 md:ring-2 ring-gray-300  md:text-lg text-xs rounded">
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
    </div>
  );
};

export default Project;
