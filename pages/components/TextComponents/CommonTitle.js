import React from "react";

const CommonTitle = ({ title, content }) => {
  return (
    <>
      <p
        className="text-[80px] font-extrabold max-[1024px]:text-[40px]"
        style={{ fontFamily: "TitleFont" }}
      >
        {title}
      </p>
      <p className="max-[1024px]:text-[14px]">{content}</p>
    </>
  );
};

export default CommonTitle;
