import React from "react";

const CommonWrapper = ({ children, className }) => {
  return (
    <main className={`${className && className} max-w-[1500px] pt-[12%] max-[1024px]:pt-[25%]`}>{children}</main>
  );
};

export default CommonWrapper;
