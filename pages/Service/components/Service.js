import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import React, { useRef } from "react";
import CommonSwiper from "@/pages/components/CommonSwiper/CommonSwiper";
const carouselList = [
  {
    img: "service_API",
  },
  {
    img: "service_admin",
  },
  {
    img: "service_wallet",
  },
  {
    img: "service_tech",
  },
  {
    img: "service_online",
  },
  {
    img: "service_coin",
  },
];
const carouselList_mobile = [
    {
        imageUrl: "	https://egslot.net/Images/Service/service_API.png",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_admin.png",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_wallet.png",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_tech.png",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_online.png",
    },
    {
        imageUrl: "	https://egslot.net/Images/Service/service_coin.png",
    },
  ];

const Service = () => {
  return (
    <CommonWrapper className={`w-full`}>
      <section className="flex flex-col gap-[30px] justify-center h-full pl-[12%] max-[1024px]:pl-[0%]">
        <TitleComponent
          title="Service"
          content="Eazy Gaming 提供全面的一站式服務，不論在產品質量、服務管理以及技術支援，我們的專業團隊經驗豐富，隨時能為客人提供接合及營運等各方面的支援服務。"
          selectTag={[]}
        />
        <div className="flex gap-[10px] items-center relative overflow-hidden max-[1024px]:px-[10%]">
          <div className="max-w-[1340px] px-[50px] flex max-[1024px]:hidden">
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
          
          <div className="max-w-[100%] px-[1%] flex min-[1024px]:hidden">
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
