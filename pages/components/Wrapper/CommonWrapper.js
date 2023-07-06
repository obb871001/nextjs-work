import React from "react";

const CommonWrapper = ({ children, className }) => {
  return (
    <main className={`${className && className} max-w-[1600px] pl-[5%] pt-[12%] min-[1800px]:pt-[8%] min-[2700px]:pt-[5%] max-[1024px]:pt-[17%] max-[1024px]:pl-0`}>{children}</main>
  );
};

export default CommonWrapper;
