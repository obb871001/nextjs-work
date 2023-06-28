import React from "react";

const CommonWrapper = ({ children, className }) => {
  return (
    <main className={`${className && className} max-w-[100%] pt-[12%] max-[1024px]:pt-[25%]`}>{children}</main>
  );
};

export default CommonWrapper;
