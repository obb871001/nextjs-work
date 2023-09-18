import { RiComputerLine } from "react-icons/ri";
import { BsPhoneLandscape, BsPhone } from "react-icons/bs";
import GameIntroduce from "@/pages/components/GameIntroduce/GameIntroduce";
import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";
import { Button } from "antd";

const iconStyle = "text-4xl text-white";
const iconCircleStyle =
  "w-[64px] h-[64px] bg-[#595959] flex items-center justify-center rounded-full hover:bg-red-500 transition duration-300 cursor-pointer mx-[20px]";

const BeABankerGames = () => {
  return (
    <>
      <main className="min-h-screen w-full bg-[url(/Images/RNGGames/bg.jpeg)] bg-cover bg-center max-[640px]:py-[100px] md:py-[200px] lg:py-[100px]">
        <section className="container mx-auto flex lg:flex-row flex-col items-center justify-around">
          <img
            alt="image"
            className="w-[400px] lg:mb-[0px] mb-[30px]"
            src="/Images/RNGGames/title.png"
          />
          <div className="flex items-center">
            <div className={iconCircleStyle}>
              <RiComputerLine className={iconStyle} />
            </div>
            <div className={iconCircleStyle}>
              <BsPhoneLandscape className={iconStyle} />
            </div>
            <div className={iconCircleStyle}>
              <BsPhone className={iconStyle} />
            </div>
          </div>
        </section>
      </main>
      <main
        className="min-h-screen w-full py-[100px]"
        style={{
          backgroundSize: "20vw,40vw,100%,100%",
          backgroundPosition: "100% -25%,0 100%,50% 50%,50% 50%",
          backgroundRepeat: "no-repeat,no-repeat,repeat,repeat",
          backgroundImage:
            "url(/Images/RNGGames/puzzle1.png),url(/Images/RNGGames/puzzle2.png),linear-gradient(0deg,rgba(35,24,110,0) 0%,rgba(35,24,110,0) 15px,rgb(0,0,0) 100%),linear-gradient(45deg,rgb(201,13,176) 0%,rgb(16,8,121) 33%,rgb(18,6,98) 66%,rgb(18,6,98) 100%)",
        }}
      >
        <section className="container mx-auto max-[640px]:px-[20px]">
          <section className="flex max-[640px]:flex-col items-center justify-center mb-[40px]">
            <div className="text-white mb-[20px] max-[640px]:text-center">
              <p className="text-[45px] font-medium md:barcarat-text-left mb-[40px] max-[640px]:mb-[20px]">
              BeABankerGames
              </p>
              <p>
              黃金輪<br></br>《 Sic Bo Spin™ 》挑戰自己的運氣，從黃金輪的三顆骰子中，發現成為贏家的道路。經典延續，黃金輪轉出的骰子決定勝負，多樣化下注策略，體驗以小博大的刺激感。
              </p>
            </div>
            <div className="rounded-full border border-white w-[163px] h-[163px] flex items-center justify-center ml-[50px] max-[640px]:ml-[0]">
              <img alt="image" src="/Images/RNGGames/h5.png" />
            </div>
          </section>
          <section className="bg-[#202123] flex flex-col py-[70px]">
        <section className="container mx-auto max-[640px]:px-[20px]">
          <section className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-2">
            <GameIntroduce
              intro="《魚蝦蟹 黃金輪》成為排名最高的庄家"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
              playGameLink="https://d29juml4m9n88c.cloudfront.net/games/sicbo/hooheyhowvideo/?lang=en&curr=usd&useIFrame=true&hideTxID=true"
            />
            <GameIntroduce
              intro="《色碟 黃金輪》贏者通吃"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
              playGameLink="https://d29juml4m9n88c.cloudfront.net/games/sicbo/xocdiavideo/?lang=en&curr=usd&useIFrame=true&hideTxID=true"
            />
            <GameIntroduce
              intro="《骰寶 黃金輪》贏在你手中"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
              playGameLink="https://d29juml4m9n88c.cloudfront.net/games/sicbo/sicbovideo/?lang=en&curr=usd&useIFrame=true&hideTxID=true"
            />
          </section>
        </section>
      </section>
        </section>
      </main>
    </>
  );
};

export default BeABankerGames;
