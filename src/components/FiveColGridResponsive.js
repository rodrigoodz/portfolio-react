import React from "react";

const FiveColGridResponsive = ({ children }) => {
  return (
    <div className="grid md:grid-cols-10 grid-cols-4  p-10 md:gap-32 gap-4 ">
      {children}
    </div>
  );
};

export default FiveColGridResponsive;
