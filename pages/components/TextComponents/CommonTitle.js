import React from "react";

const CommonTitle = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <p className="text-[80px] title-font font-extrabold max-[1024px]:text-[40px] break-keep	md:text-start text-center">
        {title}
      </p>
      <p className="md:text-lg tracking-wider font-medium text-base md:text-start text-center">
        {content}
      </p>
    </div>
  );
};

export default CommonTitle;
