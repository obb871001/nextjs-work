import CommonTitle from "@/pages/components/TextComponents/CommonTitle";
import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import { useState } from "react";
import { useTranslation } from "next-export-i18n";



const cardList = [
  {
    title: "Specialty",
    content:
      "With years of industry experience, our team has mastered the secrets of popular games.",
    // content: "在業界經年累月的經驗，讓我們的團隊掌握受歡迎遊戲的竅門",
    img: "/Images/About/specialty.webp",
    cardBackColor: "#FFDA6C",
  },
  {
    title: "Enthusiasm",
    content:
      "We are passionate about gaming and dedicated to developing products that can become classics.",
    // content: "整個團隊熱愛遊戲，滿懷熱誠，並致力開發出可以成為經典的產品",
    img: "/Images/About/enthusiasm.webp",
    // textWhite: true,
    cardBackColor: "#EC5068",
  },
  // {
  //   title: "Creative",
  //   content: "Eazy Gaming values creativity, as it is through creativity that we can create games with unique styles. ",
  //   // content: "Eazy Gaming重視創意。全憑創意我們才可開發出獨具風格的遊戲。",
  //   img: "/Images/About/Creative.webp",
  //   textWhite: true,
  //   cardBackColor: "#8A76FF",
  // },
  {
    title: "Creative",
    content:
      "Eazy Gaming values creativity, as it allows us to create unique and distinctive games.",
    // content: "Eazy Gaming重視創意。全憑創意我們才可開發出獨具風格的遊戲。",
    img: "/Images/About/Diverse.webp",
    cardBackColor: "#A9D2FF",
  },
  {
    title: "Customer",
    content:
      "We prioritize client perspectives and develop profit-enhancing games, generating limitless business opportunities.",
    // content: "我們從客戶的角度思考，開發有效提升營利的遊戲，共創無限商機。",
    img: "/Images/About/Customer.webp",
    // textWhite: true,
    cardBackColor: "#6DCA91",
  },
  {
    title: "Novelty",
    content:
      "We boldly innovate, integrating state-of-the-art technologies into our games for a unique player experience.",
    // content:"我們敢於創新，不斷將嶄新新科技融入遊戲，為玩家帶來全新的遊戲體驗。",
    img: "/Images/About/Novelty.webp",
    // textWhite: true,
    cardBackColor: "#9791EF",
  },
];

const About = () => {
  const { t } = useTranslation();
  const i18n = (key) => t(`about.${key}`);

  const [isFlipped, setIsFlipped] = useState(false); // 追蹤卡片是否被翻轉

  const handleAccreditationClick = () => {
    setIsFlipped(true); // 點擊時翻轉卡片
  };
  const selectTag = [
    {
      label: i18n("Team"),
      flipped: false,
    },
    {
      label: i18n("Accreditation"),
      flipped: true,
    },
  ];
  return (
    <CommonWrapper>
      <section className="flex flex-col gap-[30px] justify-center pl-[12%] max-[1024px]:pl-[0%]">
        <TitleComponent
          fileName={`about`}
          title={i18n("title")}
          content={i18n("content")}
          // content="Eazy Gaming 由一群充滿經驗及熱誠的業界菁英創立，致力研發優質的老虎機遊戲，把轉輪的樂趣帶給全世界的玩家。此外，我們亦備有此機的捕魚遊戲，為線上娛樂營運商提供豐富的遊戲選擇。"
          selectTag={selectTag}
          setIsFlipped={setIsFlipped}
        />
        <div className="flex gap-[10px] items-center overflow-x-scroll max-[1024px]:ml-[5%]">
          <main
            className={`flipped min-w-[300px] max-w-[300px] h-[350px] rounded-xl overflow-hidden cursor-pointer relative 
                max-[1024px]:w-[300px] max-[1024px]:h-[200px] max-[1024px]:min-w-[300px]
                ${!isFlipped ? "" : "cardShow"}`}
          >
            <section
              className="back w-full h-full text-white"
              style={{ backgroundColor: "#111" }}
            >
              <div className="p-[20px]">
                <p className="title-font text-[27px] font-bold mb-[10px]">
                  <img
                    className=" ml-2"
                    src="/Images/About/bmm.webp"
                    alt="PlayNow"
                  />
                </p>
                <p className="text-sm text-white mt-12 max-[1024px]:mt-4 max-[1024px]:text-xs">
                  {i18n("bmm.content")}
                  {/* Eazy Gaming 我們所有的RNG遊戲均已取得全球經驗最豐富的第三方遊戲測試機構 BMM
                  在歐洲大部分司法管轄區的認證，合乎相關的法律及技術要求。 */}
                </p>
              </div>
            </section>
          </main>
          {cardList.map((card, index) => {
            return (
              <main
                key={index}
                className={`cardShow min-w-[275px] max-w-[275px] h-[350px] rounded-xl overflow-hidden cursor-pointer relative 
                max-[1024px]:w-[157px] max-[1024px]:h-[200px] max-[1024px]:min-w-[157px]
                ${!isFlipped ? "" : "flipped"}`}
                style={{ display: isFlipped ? "none" : "" }}
              >
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
                    <p className="text-[27px] font-bold mb-[10px] title-font">
                      {i18n(`card.${index + 1}.title`)}
                    </p>
                    <p className="text-sm max-[1024px]:text-xs">
                      {i18n(`card.${index + 1}.content`)}
                    </p>
                  </div>
                </section>
              </main>
            );
          })}
        </div>
      </section>
    </CommonWrapper>
  );
};

export default About;
