import React from "react";

const CommonWrapper = ({ children, className }) => {
  return (
    <main className={`${className && className} max-w-[100%] pt-[70px]`}>{children}</main>
  );
};

export default CommonWrapper;
