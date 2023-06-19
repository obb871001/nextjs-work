import { RiComputerLine } from "react-icons/ri";
import { BsPhoneLandscape, BsPhone } from "react-icons/bs";

const iconStyle = "text-4xl text-white";
const iconCircleStyle =
  "w-[64px] h-[64px] bg-[#595959] flex items-center justify-center rounded-full hover:bg-red-500 transition duration-300 cursor-pointer mx-[20px]";

const TIP_CARD = [
  {
    main: "華麗的主題",
    content:
      "Eazy Gaming 致力還原實境一般的遊戲體驗。遊戲有美麗動人的荷官、栩栩如生的背景。大廳主題更會定期替換，保持新鮮感。",
  },
  {
    main: "卡牌認證",
    content:
      "靴中的每張牌均經加密，並以加密文的形式顯示。每靴牌均有提前公布的加密文供玩家驗證每一張牌，以確保遊戲公允。",
  },
  {
    main: "頭像",
    content:
      "每位玩家均可選擇頭像代表自己。其他玩家可以看見所在的檯桌贏額最高的玩家之頭像。",
  },
  {
    main: "縱向／橫向",
    content:
      "Eazy Gaming 的桌上遊戲在流動裝置上支援縱向及橫向模式。兩個模式均經精心設計，為玩家提供最佳娛樂體驗。",
  },
];

const RNGGames = () => {
  return (
    <>
      <main className="min-h-screen w-full bg-[url(/Images/RNGGames/bg.jpeg)] bg-cover bg-center max-[1024px]:py-[100px] md:py-[200px] lg:py-[100px]">
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
        <section className="container mx-auto max-[1024px]:px-[20px]">
          <section className="flex max-[1024px]:flex-col items-center justify-center mb-[40px]">
            <div className="text-white mb-[20px] max-[1024px]:text-center">
              <p className="text-[45px] font-medium md:barcarat-text-left mb-[40px] max-[1024px]:mb-[20px]">
                百家樂
              </p>
              <p>
                作為風靡全亞洲的遊戲，Eazy Gaming 的百家樂以四張牌先發的方式進行。
              </p>
            </div>
            <div className="rounded-full border border-white w-[163px] h-[163px] flex items-center justify-center ml-[50px] max-[1024px]:ml-[0]">
              <img alt="image" src="/Images/RNGGames/h5.png" />
            </div>
          </section>
          <section className="grid grid-cols-2  max-w-[900px] mx-auto">
            {TIP_CARD.map((card, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-white ${
                    index % 2 === 0 ? "mb-[80px]" : "mt-[80px]"
                  }`}
                >
                  <img
                    alt="image"
                    className="mb-[20px]"
                    src={`/Images/RNGGames/tip${index + 1}.png`}
                  />
                  <p className="text-xl mb-[40px] max-[1024px]:text-lg">
                    {card.main}
                  </p>
                  <p className="text-center max-[1024px]:text-sm max-[1024px]:font-light">
                    {card.content}
                  </p>
                </div>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default RNGGames;
