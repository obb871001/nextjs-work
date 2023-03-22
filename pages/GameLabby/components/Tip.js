import React from "react";

const Tip = ({ SVG, title, content }) => {
  return (
    <section className="flex flex-col items-center text-white lg:mb-[0] mb-[30px] max-[640px]:text-center">
      {SVG}
      <p className="text-3xl font-medium my-[20px] max-[640px]:text-xl">
        {title}
      </p>
      <p className="max-[640px]:text-sm">{content}</p>
    </section>
  );
};

export default Tip;
