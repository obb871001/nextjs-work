import { Button } from "antd";

const GAMETYPE = [
  { type: "老虎機", content: "享受轉輪帶來的樂趣", link: "#", t: "slot" },
  { type: "桌上", content: "無與倫比的主題遊戲", link: "#", t: "live" },
  { type: "捕魚", content: "刺激的多人互動體驗", link: "#", t: "fish" },
];
const GameTypeChoose = () => {
  return (
    <section className="w-full lg:h-[630px]  lg:grid lg:!bg-[url(/Images/gameType/type.jpeg)] bg-no-repeat md:flex md:!bg-none md:flex-col grid-cols-3 bg-cover bg-bottom">
      {GAMETYPE.map((type, index) => {
        return (
          <article
            key={index}
            className={`h-full flex flex-col items-center py-[50px] lg:!bg-none bg-cover`}
            style={{ backgroundImage: `url(/Images/gameType/${type.t}.jpeg)` }}
          >
            <p className="text-myself-shadow text-[2.1rem] leading-[40px] text-white text-center mb-[20px]">
              {type.type}
              <br />
              遊戲
            </p>
            <Button
              danger
              shape="round"
              size="large"
              className="w-[200px] relative hover:translate-y-0.5 hover:bg-[#ff4d4f] hover:!text-white transition duration-300 !h-[45px] mb-[20px]"
            >
              了解更多
            </Button>
            <p className="text-myself-shadow text-white">{type.content}</p>
          </article>
        );
      })}
    </section>
  );
};

export default GameTypeChoose;
