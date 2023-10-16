import Link from "next/link";
import React, { useState } from "react";

const GameType = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      style={{
        backgroundImage: `url(/Images/gameType/slot_bg.png)`,
      }}
      className="min-w-screen overflow-hidden h-[300px] md:h-[700px] object-cover relative md:bg-none bg-cover bg-center flex justify-between"
    >
      <div className=" relative z-[3] w-full md:w-1/2 flex flex-col gap-[15px] items-center justify-center md:pr-[0px] pr-[150px] md:pl-[200px]">
        <img
          className="w-[190px] md:w-[450px]"
          src={`/Images/gameType/slot_word.png`}
        />
        <Link
          href={`/type/slot`}
          className={`${
            isHovered ? "scale-[1.1]" : ""
          } transition duration-500 w-[140px] h-[40px] md:w-[300px] md:h-[98px] bg-cover cursor-pointer object-cover`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundImage: isHovered
              ? `url(/Images/gameType/more_hover.png)`
              : `url(/Images/gameType/more.png)`,
          }}
        ></Link>
      </div>
      <div className="absolute bottom-0 md:right-0 right-[-30%] h-full md:h-none w-full md:w-1/2 md:relative">
        <img
          className="absolute h-full !right-0 bottom-0"
          src={`/Images/gameType/slot_char.png`}
        />
      </div>
    </section>
  );
};

export default GameType;
