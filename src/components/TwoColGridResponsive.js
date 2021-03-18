import React from "react";

const TwoColGridResponsive = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  p-10 md:gap-32 gap-4 ">
      {children}
    </div>
  );
};

export default TwoColGridResponsive;
