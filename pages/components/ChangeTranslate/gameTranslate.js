import React, { useMemo, useState } from "react";
import { AiOutlineArrowDown, AiOutlineGlobal } from "react-icons/ai";
import { RxTriangleDown } from "react-icons/rx";
import Cookies from "js-cookie";
import { IoGameController } from "react-icons/io5";
import Flag from "react-world-flags";

const GameTranslate = ({ setLang, lang }) => {
  const [hovered, setHovered] = useState(false);
  const gameLang = [
    { flag: "US", value: "en", label: "English" },
    { flag: "JP", value: "ja", label: "日本語" },
    { flag: "CN", value: "zh-chs", label: "简体中文" },
    { flag: "TW", value: "zh-cht", label: "繁體中文" },
    { flag: "kr", value: "ko", label: "한국어" },
    { flag: "id", value: "id", label: "Bahasa Indonesia" },
    { flag: "pt", value: "pt", label: "Português" },
    { flag: "es", value: "es", label: "Español" },
    { flag: "vi", value: "vi", label: "Tiếng Việt" },
  ];

  const nowLang = useMemo(() => {
    return gameLang.find((langs) => {
      return langs.value === lang;
    });
  }, [lang]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-[8px] rounded-[10px] md:col-span-1 col-span-2 border border-[#573e7e] flex items-center justify-between gap-[15px] cursor-pointer text-white relative"
    >
      <IoGameController className="text-[#c29bff] text-2xl md:text-3xl" />
      <div className="flex items-center gap-[5px]">
        <Flag code={nowLang?.flag} className="!w-[20px]" height="15" />
        <span>{nowLang?.label}</span>
      </div>
      <RxTriangleDown
        className={`text-[#c29bff] ${
          hovered ? "rotate-180" : ""
        } transition duration-300`}
      />
      {hovered && (
        <section className="absolute z-[10] top-[101%] left-0 flex flex-col gap-[8px] md:w-auto w-full p-[5px] bg-[#2C1345] text-lg md:text-2xl title-font">
          {gameLang.map((lang) => {
            return (
              <div
                onClick={() => {
                  setLang(lang.value);
                  Cookies.set("lang", lang.value);
                  setHovered(false);
                }}
                key={lang.value}
                className={`${
                  nowLang?.label === lang?.label && "bg-[#543942]"
                } rounded-[5px] flex gap-[5px] items-center text-overflow justify-start py-[5px] px-[3px] hover:text-[#CE75FF] text-[#F3DCFC]`}
              >
                <Flag code={lang?.flag} className="!w-[20px]" height="15" />
                <span>{lang?.label}</span>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default GameTranslate;
