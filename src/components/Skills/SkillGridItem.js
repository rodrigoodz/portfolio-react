import React from "react";

const SkillGridItem = ({ name, children }) => {
  return (
    <div className="ring-2 ring-gray-50 ring-opacity-30 rounded p-4 flex flex-col items-center col-span-2 transform transition duration-300 hover:rotate-3 hover:scale-105">
      {children}
      <h3 className="text-white mt-2 ">{name}</h3>
    </div>
  );
};

export default SkillGridItem;
