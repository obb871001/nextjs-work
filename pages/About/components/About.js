import CommonTitle from "@/pages/components/TextComponents/CommonTitle";
import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import { useRef, useState } from "react";
import { useTranslation } from "next-export-i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cardList = [
  {
    title: "Specialty",
    content:
      "With years of industry experience, our team has mastered the secrets of popular games.",
    img: "/Images/About/specialty.webp",
    cardBackColor: "#FFDA6C",
  },
  {
    title: "Enthusiasm",
    content:
      "We are passionate about gaming and dedicated to developing products that can become classics.",
    img: "/Images/About/enthusiasm.webp",
    cardBackColor: "#EC5068",
  },
  {
    title: "Creative",
    content:
      "Eazy Gaming values creativity, as it allows us to create unique and distinctive games.",
    img: "/Images/About/Diverse.webp",
    cardBackColor: "#A9D2FF",
  },
  {
    title: "Customer",
    content:
      "We prioritize client perspectives and develop profit-enhancing games, generating limitless business opportunities.",
    img: "/Images/About/Customer.webp",
    cardBackColor: "#6DCA91",
  },
  {
    title: "Novelty",
    content:
      "We boldly innovate, integrating state-of-the-art technologies into our games for a unique player experience.",
    img: "/Images/About/Novelty.webp",
    // textWhite: true,
    cardBackColor: "#9791EF",
  },
];

const About = () => {
  const { t } = useTranslation();
  const i18n = (key) => t(`about.${key}`);

  const [isFlipped, setIsFlipped] = useState(false); // 追蹤卡片是否被翻轉

  const swiperRef = useRef(null);

  const handleSlidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleAccreditationClick = () => {
    setIsFlipped(true); // 點擊時翻轉卡片
  };
  const selectTag = [
    {
      label: i18n("Team"),
      flipped: false,
    },
  ];
  return (
    <main className="md:w-[1240px] mx-auto py-[9%] min-[1800px]:pt-[8%] min-[2700px]:pt-[5%] max-[1024px]:pt-[17%] max-[1024px]:pl-0">
      <section className="flex flex-col gap-[30px] justify-center max-[1024px]:pl-[0%]">
        <TitleComponent
          fileName={`about`}
          title={i18n("title")}
          content={i18n("content")}
          // content="Eazy Gaming 由一群充滿經驗及熱誠的業界菁英創立，致力研發優質的老虎機遊戲，把轉輪的樂趣帶給全世界的玩家。此外，我們亦備有此機的捕魚遊戲，為線上娛樂營運商提供豐富的遊戲選擇。"
          selectTag={selectTag}
          setIsFlipped={setIsFlipped}
        />
        <div className="hidden md:flex relative gap-[10px] items-center max-[1024px]:ml-[5%]">
          <section className="absolute absolute-center h-full w-[110%] hidden md:flex items-center justify-between">
            <div
              onClick={handleSlidePrev}
              className="text-3xl cursor-pointer text-white"
            >
              <IoIosArrowBack />
            </div>
            <div
              onClick={handleSlideNext}
              className="text-3xl cursor-pointer text-white"
            >
              <IoIosArrowForward />
            </div>
          </section>
          <Swiper
            className="mySwiper h-full w-full relative"
            loop={true}
            ref={swiperRef}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode]}
            slidesPerView={4.2}
            effect="fade"
          >
            {cardList.map((card, index) => {
              return (
                <SwiperSlide key={index}>
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex flex-col gap-[20px] items-center justify-center md:hidden ">
          {cardList.map((card, index) => {
            return (
              <main
                key={index}
                className={`cardShow h-[350px] rounded-xl overflow-hidden cursor-pointer relative w-[300px]
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
    </main>
  );
};

export default About;

{
  /* <main
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
     </p>
  </div>
</section>
</main> */
}
