import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import React, { useRef } from "react";
import CommonSwiper from "@/pages/components/CommonSwiper/CommonSwiper";
import { useTranslation } from "next-i18next";
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

  return (
    <CommonWrapper className={`w-full`}>
      <section className="flex flex-col gap-[30px] justify-center h-full pl-[12%] max-[1024px]:pl-[0%]">
        <TitleComponent
          title={i18n("title")}
          content={i18n("content")}
          // content="Eazy Gaming 提供全面的一站式服務，不論在產品質量、服務管理以及技術支援，我們的專業團隊經驗豐富，隨時能為客人提供接合及營運等各方面的支援服務。 聯絡我們：service@egslot.net"
          selectTag={[]}
        />
        <div className="flex gap-[10px] items-center relative overflow-hidden max-[1024px]:px-[10%]">
          <div className="max-w-[1340px] px-[50px] text-white flex max-[1024px]:hidden">
            <CommonSwiper
              slidesPerView={4}
              customImagesClass={`!w-[300px] !object-contain`}
              folderName={`Service`}
              i18nName="service.PCIntro"
              carouselList={carouselList}
            />
          </div>
          <div
            className="bg-transparent absolute w-full h-full max-[1024px]:hidden"
            style={{ top: "27%" }}
          ></div>

          <div className="max-w-[100%] px-[1%] text-white flex min-[1024px]:hidden">
            <CommonSwiper
              slidesPerView={1}
              customImagesClass={`!w-[300px] !object-contain`}
              folderName={`Service`}
              i18nName="service.MobileIntro"
              carouselList={carouselList_mobile}
            />
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default Service;
