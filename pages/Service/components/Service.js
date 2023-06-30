import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import React, { useRef } from "react";
import CommonSwiper from "@/pages/components/CommonSwiper/CommonSwiper";
const carouselList = [
  {
    img: "service_API2",
    date: "所有遊戲產品均可無縫接合至您的平台，為您提供豐富的遊戲選擇。",
  },
  {
    img: "service_admin2",
    date: "我們的後台系統提供實時運營數據及多種管理工具，助您更有效管理業務。",
  },
  {
    img: "service_wallet2",
    date: "我們備有轉帳錢包集成方案及單一錢包集成方案，讓玩家靈活運用資金，娛樂更加方便。",
  },
  {
    img: "service_tech2",
    date: "我們的支援隊伍全天候為您提供各種援助，使遊戲運行順暢、玩家全情投入、收入節節上升。",
  },
  {
    img: "service_online2",
    date: "我們的客服團隊人員樂於為您排解疑難、聆聽您所需。",
  },
  {
    img: "service_coin2",
    date: "我們的遊戲支援多種主要語言及貨幣，世界各地的玩家能盡情享受我們的遊戲。",
  },
];
const carouselList_mobile = [
    {
        imageUrl: "	https://egslot.net/Images/Service/service_API2.png",
        date: "所有遊戲產品均可無縫接合至您的平台，為您提供豐富的遊戲選擇。",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_admin2.png",
        date: "我們的後台系統提供實時運營數據及多種管理工具，助您更有效管理業務。",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_wallet2.png",
        date: "我們備有轉帳錢包集成方案及單一錢包集成方案，讓玩家靈活運用資金，娛樂更加方便。",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_tech2.png",
        date: "我們的支援隊伍全天候為您提供各種援助，使遊戲運行順暢、玩家全情投入、收入節節上升。",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_online2.png",
        date: "我們的客服團隊人員樂於為您排解疑難、聆聽您所需。",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_coin2.png",
        date: "我們的遊戲支援多種主要語言及貨幣，世界各地的玩家能盡情享受我們的遊戲。",
    },
  ];

const Service = () => {
  return (
    <CommonWrapper className={`w-full`}>
      <section className="flex flex-col gap-[30px] justify-center h-full pl-[12%] max-[1024px]:pl-[0%]">
        <TitleComponent
          title="Service"
          content="Eazy Gaming 提供全面的一站式服務，不論在產品質量、服務管理以及技術支援，我們的專業團隊經驗豐富，隨時能為客人提供接合及營運等各方面的支援服務。 聯絡我們：service@egslot.net"
          selectTag={[]}
        />
        <div className="flex gap-[10px] items-center relative overflow-hidden max-[1024px]:px-[10%]">
          <div className="max-w-[1340px] px-[50px] text-white flex max-[1024px]:hidden">
            <CommonSwiper
              slidesPerView={4}
              customImagesClass={`!w-[300px] !object-contain`}
              folderName={`Service`}
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
              carouselList={carouselList}
            />
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default Service;
