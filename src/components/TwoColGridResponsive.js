import React from "react";

const TwoColGridResponsive = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2  grid-cols-1  p-10 lg:gap-32 md:gap-16 gap-4  md:place-items-center place-items-auto ">
      {children}
    </div>
  );
};

export default TwoColGridResponsive;
