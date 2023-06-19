import CommonTitle from "@/pages/components/TextComponents/CommonTitle";
import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import { useState } from "react";

const selectTag = [
  {
    label: "Team",
    flipped: false,
  },
  {
    label: "Accreditation",
    flipped: true,
  },
];

const cardList = [
  {
    title: "Specialty",
    content: "在業界經年累月的經驗，讓我們的團隊掌握受歡迎遊戲的竅門",
    img: "/Images/About/specialty.png",
    cardBackColor: "#FFDA6C",
  },
  {
    title: "Enthusiasm",
    content: "整個團隊熱愛遊戲，滿懷熱誠，並致力開發出可以成為經典的產品",
    img: "/Images/About/enthusiasm.png",
    textWhite: true,
    cardBackColor: "#EC5068",
  },
  {
    title: "Creative",
    content: "Eaze Gaming重視創意。全憑創意我們才可開發出獨具風格的遊戲。",
    img: "/Images/About/Creative.png",
    textWhite: true,
    cardBackColor: "#8A76FF",
  },
  {
    title: "Diverse",
    content: "整個團隊熱愛遊戲，滿懷熱誠並致力於開發出可以成為經典的產品",
    img: "/Images/About/Diverse.png",
    cardBackColor: "#A9D2FF",
  },
  {
    title: "Customer",
    content: "我們從客戶的角度思考，開發有效提升營利的遊戲，共創無限商機。",
    img: "/Images/About/Customer.png",
    textWhite: true,
    cardBackColor: "#6DCA91",
  },
  {
    title: "Novelty",
    content:
      "我們敢於創新，不斷將嶄新新科技融入遊戲，為玩家帶來全新的遊戲體驗。",
    img: "/Images/About/Novelty.png",
    textWhite: true,
    cardBackColor: "#9791EF",
  },
];

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <CommonWrapper>
      <section className="flex flex-col gap-[30px] justify-center h-full">
        <TitleComponent
          title="About"
          content="Eaze Gaming 由一群充滿經驗及熱誠的業界菁英創立，致力研發優質的老虎機遊戲，把轉輪的樂趣帶給全世界的玩家。此外，我們亦備有此機的捕魚遊戲，為線上娛樂營運商提供豐富的遊戲選擇。"
          selectTag={selectTag}
          setIsFlipped={setIsFlipped}
        />
        <div className="flex gap-[10px] items-center overflow-x-scroll">
          {cardList.map((card, index) => {
            return (
              <main
                key={index}
                className={`min-w-[275px] max-w-[275px] h-[350px] rounded-xl overflow-hidden cursor-pointer relative ${
                  isFlipped && "flipped"
                }`}
              >
                {/* 卡片正面 */}
                <section
                  className={`front w-full h-full ${
                    card.textWhite && "text-white"
                  }`}
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <div className="p-[20px]">
                    <p
                      className="text-[27px] font-bold mb-[10px]"
                      style={{ fontFamily: "TitleFont" }}
                    >
                      {card.title}
                    </p>
                    <p className="text-sm">{card.content}</p>
                  </div>
                </section>
                {/* 卡片正面 */}
                {/* 卡片背面 文字自訂 */}
                <section
                  className={`back w-full h-full ${
                    card.textWhite && "text-white"
                  }`}
                  style={{ backgroundColor: card.cardBackColor }}
                >
                  <div className="p-[20px]">
                    <p
                      className="text-[27px] font-bold mb-[10px]"
                      style={{ fontFamily: "TitleFont" }}
                    >
                      {card.title}
                    </p>
                    <p className="text-sm">{card.content}</p>
                  </div>
                </section>
                {/* 卡片背面 文字自訂 */}
              </main>
            );
          })}
        </div>
      </section>
    </CommonWrapper>
  );
};

export default About;
