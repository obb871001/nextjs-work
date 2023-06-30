import React from "react";

const CommonWrapper = ({ children, className }) => {
  return (
    <main className={`${className && className} max-w-[1600px] pl-[5%] pt-[12%] max-[1024px]:pt-[25%] max-[1024px]:pl-0`}>{children}</main>
  );
};

export default CommonWrapper;
