import useIsMobile from "@/hooks/useIsMobile";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

const GAMETYPE = [
  {
    type: "老虎機",
    content: "享受轉輪帶來的樂趣",
    link: "#",
    t: "slot",
    mobileHidden: true,
    label: "spin",
  },
  {
    type: "桌上",
    content: "無與倫比的主題遊戲",
    link: "#",
    t: "live",
    mobileHidden: true,
    label: "blockchain",
  },
  {
    type: "捕魚",
    content: "刺激的多人互動體驗",
    link: "#",
    t: "fishing",
    label: "fishing",
  },
];
const GameTypeChoose = ({ nowType, wrapperClass }) => {
  const [isHovered, setIsHovered] = useState(null);
  const isMobile = useIsMobile();
  return (
    // <section className="w-full lg:h-[630px]  lg:grid lg:!bg-[url(/Images/gameType/type.jpeg)] bg-no-repeat md:flex md:!bg-none md:flex-col grid-cols-3 bg-cover bg-bottom">
    <section
      className={`w-full lg:h-[450px] lg:grid bg-no-repeat md:flex md:flex-col grid-cols-3 bg-cover bg-bottom ${wrapperClass}`}
    >
      {GAMETYPE.filter((item) => {
        if (nowType) {
          return item.label !== nowType;
        } else {
          return item.label !== "slot";
        }
      }).map((type, index) => {
        return (
          <article
            key={index}
            // className={`h-full flex flex-col items-center py-[50px] lg:!bg-none bg-cover`}
            className={`h-full flex justify-end flex-col items-center py-[20px] bg-cover relative overflow-hidden ${
              isMobile && type.mobileHidden ? "hidden" : ""
            }`}
            style={{
              backgroundImage: `url(/Images/gameType/${
                isMobile ? "mobile-" : ""
              }${type.label}_bg.webp)`,
            }}
          >
            {!isMobile && index == 2 ? (
              <div
                className="absolute right-0 h-full top-0 w-[12px]"
                style={{
                  backgroundImage: `url(/Images/gameType/divider.png)`,
                }}
              ></div>
            ) : null}
            <img
              className="absolute top-0 w-[350px] "
              alt=" "
              src={`/Images/gameType/${isMobile ? "mobile-" : ""}${
                type.label
              }_main.webp`}
            />
            <div className="flex flex-col items-center justify-end gap-[0px] relative z-[1]">
              <img
                className="w-[350px] h-[100px] object-contain"
                src={`/Images/gameType/${type.label}_word.png`}
              />
              <Link
                href={`/type/${type.label}`}
                className={`${
                  isHovered == index ? "scale-[1.1]" : ""
                } transition duration-500 w-[220px] h-[70px] bg-cover cursor-pointer object-cover`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                style={{
                  backgroundImage:
                    isHovered == index
                      ? `url(/Images/gameType/more_hover.png)`
                      : `url(/Images/gameType/more.png)`,
                }}
              />
            </div>
            {/* <p className="text-myself-shadow font-bold text-[2.1rem] leading-[40px] text-white text-center mb-[20px]">
              {type.type}
              <br />
              遊戲
            </p>
             <p className="text-myself-shadow text-white">{type.content}</p> */}
          </article>
        );
      })}
    </section>
  );
};

export default GameTypeChoose;
