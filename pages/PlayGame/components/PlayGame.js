import { useState } from "react";
import GameIntroduce from "@/pages/components/GameIntroduce/GameIntroduce";
import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";
import { Button } from "antd";
import { RiArrowDropRightLine } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { FaPiggyBank, FaHistory } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useDeviceType from "../../../hook/useDeviceType";

const PlayGame = () => {
  const deviceType = useDeviceType();
  const [showBar, setShowBar] = useState(true);
  return (
    <>
      <section class="sm:py-[80px] pt-[20px] py-[60px] max-w-[1344px] w-full lg:min-w-[1280px] mx-auto">
      <div className="flex">
        <div className="bg-game-background py-[5px] px-[10px] rounded-full mb-[10px] font-semibold text-light-white">
          <p className="mb-0 text-xl flex items-center">
            <span className="text-light-text">123</span>
            <RiArrowDropRightLine className="text-4xl" />
            <span>123</span>
          </p>
        </div>
      </div>
      <div className="bg-game-background p-[10px] rounded-xl my-[20px] font-semibold text-light-white">
      <section
        className="relative w-full flex flex-col h-full"
        id="game-iframe"
      >
        <iframe></iframe>
        {deviceType === "Mobile" && (
          <div
            className={`${
              showBar ? "h-[40px]" : "h-[0px]"
            } fixed bottom-0 left-0 w-full grid grid-cols-5 text-light-white gamebox-shadow bg-game-background`}
          >
            {menu.map((item, index) => {
              return (
                <div
                  onClick={item.func}
                  key={index}
                  className="flex items-center justify-center cursor-pointer hover:text-main-color transition duration-300"
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
        )}
        {!showBar && deviceType === "Mobile" && (
          <div
            onClick={() => {
              setShowBar(true);
            }}
            className="fixed h-[20px] w-[50px] rounded-t-lg bg-main-color flex items-center justify-center absolute-center !top-[99%]"
          >
            <AiFillEye className="text-light-white text-xl" />
          </div>
        )}
      </section>
        <section className="flex ">
          <div
            style={{
              backgroundSize: "100% 100%",
            }}
            className={`w-[140px] h-[140px] rounded-[10px] bg-center bg-no-repeat mr-[15px]`}
          />
          <div className="flex flex-col text-dark-gray-text">
            <p className="text-xl font-bold mb-[5px]">treasure</p>
            <p className="text-light-text text-lg mb-[20px]">slot</p>
          </div>
        </section>
      </div>
      {/* <div className="p-[10px]">
        <p className="text-3xl font-bold text-main-color">recommend</p>
        <section className="flex flex-nowrap justify-start w-full overflow-x-scroll no-scrollbar items-center gap-[10px]">
        </section>
      </div> */}
    </section>
      <section className="bg-[#202123] flex flex-col py-[70px]">
        <section className="container mx-auto max-[640px]:px-[20px]">
          {/* <BoxTitle
            white
            title="老虎機遊戲"
            content="我們的老虎機遊戲由經驗豐富的開發人員和電腦動畫師精心製作。每款遊戲賠率吸引、畫面流暢，而且毋須安裝。產品主題涵蓋古今中外經典故事，更設有性感真人老虎機。"
          /> */}
        </section>
      </section>
    </>
  );
};

export default PlayGame;
