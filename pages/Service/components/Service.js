import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import React, { useRef } from "react";
import CommonSwiper from "@/pages/components/CommonSwiper/CommonSwiper";
import { useTranslation } from "next-export-i18n";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const carouselList = [
  {
    img: "service_API2",
    date: "All our game products seamlessly integrate into your platform, providing you with a wide selection of games.",
    // date: "所有遊戲產品均可無縫接合至您的平台，為您提供豐富的遊戲選擇。",
  },
  {
    img: "service_admin2",
    date: "Our backend system offers real-time operational data and various management tools, helping you efficiently manage your business.",
    // date: "我們的後台系統提供實時運營數據及多種管理工具，助您更有效管理業務。",
  },
  {
    img: "service_wallet2",
    date: "We provide transfer wallet integration and single wallet integration solutions, allowing players to flexibly utilize their funds for convenient entertainment.",
    // date: "我們備有轉帳錢包集成方案及單一錢包集成方案，讓玩家靈活運用資金，娛樂更加方便。",
  },
  {
    img: "service_tech2",
    date: "Our support team is available 24/7 to assist you, ensuring smooth game operation, immersive player experiences, and increasing revenues.",
    // date: "我們的支援隊伍全天候為您提供各種援助，使遊戲運行順暢、玩家全情投入、收入節節上升。",
  },
  {
    img: "service_online2",
    date: "Our customer service team is dedicated to resolving any inquiries and listening to your needs.",
    // date: "我們的客服團隊人員樂於為您排解疑難、聆聽您所需。",
  },
  {
    img: "service_coin2",
    date: "Our games support multiple major languages and currencies, enabling players from around the world to fully enjoy our games.",
    // date: "我們的遊戲支援多種主要語言及貨幣，世界各地的玩家能盡情享受我們的遊戲。",
  },
];
const carouselList_mobile = [
  {
    img: "service_API2",
    date: "Seamless game integration for a diverse selection.",
  },
  {
    img: "service_admin2",
    date: "Real-time data and management tools for efficient operations.",
  },
  {
    img: "service_wallet2",
    date: "Flexible wallet integration for convenient player experience.",
  },
  {
    img: "service_tech2",
    date: "24/7 support for smooth gameplay and increased revenues.",
  },
  {
    img: "service_online2",
    date: "Responsive customer service catering to your needs.",
  },
  {
    img: "service_coin2",
    date: "Multi-language and multi-currency support for global players.",
  },
];

const Service = () => {
  const { t } = useTranslation();
  const i18n = (key) => t(`service.${key}`);

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

  return (
    <main className="md:w-[1240px] mx-auto py-[9%] min-[1800px]:pt-[8%] min-[2700px]:pt-[5%] max-[1024px]:pt-[17%] max-[1024px]:pl-0">
      <section className="flex flex-col gap-[30px] justify-center max-[1024px]:pl-[0%]">
        <TitleComponent
          title={i18n("title")}
          content={i18n("content")}
          // content="Eazy Gaming 提供全面的一站式服務，不論在產品質量、服務管理以及技術支援，我們的專業團隊經驗豐富，隨時能為客人提供接合及營運等各方面的支援服務。 聯絡我們：service@egslot.net"
          selectTag={[]}
        />
        <div className="flex gap-[10px] items-center relative max-[1024px]:px-[10%]">
          <div className="max-w-[1340px] px-[50px] text-white md:flex hidden relative">
            <section className="absolute absolute-center h-full w-[105%] hidden md:flex items-center justify-between">
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
              spaceBetween={30}
              effect="fade"
            >
              {carouselList.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <section className={`rounded-lg cursor-pointer`}>
                      <img
                        className={`w-[360px] h-[250px] max-[1024px]:w-[288px] max-[1024px]:h-[200px] object-cover`}
                        src={`/Images/${`Service`}/${item.img}.png`}
                      />
                      <p className="text-[24px] title-font font-bold my-[5px] max-[1024px]:text-[18px]">
                        {item.label}
                      </p>
                      <p className="text-[24px] title-font max-[1024px]:text-[18px]">
                        {item.title}
                      </p>
                      {/* <p className="text-sm">{item.date}</p>  備份*/}
                      <p className="text-sm"> {i18n(`PCIntro.${index + 1}`)}</p>
                    </section>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* <CommonSwiper
              slidesPerView={4}
              customImagesClass={`!w-[300px] !object-contain`}
              folderName={`Service`}
              i18nName="service.PCIntro"
              carouselList={carouselList}
            /> */}
          </div>
          <div
            className="bg-transparent absolute w-full h-full max-[1024px]:hidden"
            style={{ top: "27%" }}
          ></div>

          <div className="max-w-[100%] px-[1%] text-white flex md:hidden flex-col gap-[50px]">
            {carouselList?.map((item, index) => {
              return (
                <section key={index} className={`rounded-lg cursor-pointer`}>
                  <img
                    className={`w-[360px] h-[250px] max-[1024px]:w-[288px] max-[1024px]:h-[200px] object-cover !w-[300px] !object-contain`}
                    src={`/Images/Service/${item.img}.png`}
                  />
                  <p className="text-[24px] title-font font-bold my-[5px] max-[1024px]:text-[18px]">
                    {item.label}
                  </p>
                  <p className="text-[24px] title-font max-[1024px]:text-[18px]">
                    {item.title}
                  </p>
                  {/* <p className="text-sm">{item.date}</p>  備份*/}
                  <p className="text-sm text-center font-medium">
                    {i18n(`PCIntro.${index + 1}`)}
                  </p>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
