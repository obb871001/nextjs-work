import React from "react";

const CommonTitle = ({ title, content }) => {
  return (
    <>
      <p
        className="text-[80px] font-extrabold"
        style={{ fontFamily: "TitleFont" }}
      >
        {title}
      </p>
      <p>{content}</p>
    </>
  );
};

export default CommonTitle;
