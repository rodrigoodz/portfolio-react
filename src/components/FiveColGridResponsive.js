import React from "react";

const FiveColGridResponsive = ({ children }) => {
  return (
    <div className="grid xl:grid-cols-10 lg:grid-cols-8 sm:grid-cols-6 grid-cols-4  p-10 md:gap-32 gap-4  md:place-items-center place-items-auto">
      {children}
    </div>
  );
};

export default FiveColGridResponsive;
