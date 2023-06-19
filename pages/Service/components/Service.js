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

const Service = () => {
  return (
    <CommonWrapper className={`w-full`}>
      <section className="flex flex-col gap-[30px] justify-center h-full">
        <TitleComponent
          title="Service"
          content="Eazy Gaming 提供全面的一站式服務，不論在產品質量、服務管理以及技術支援，我們的專業團隊經驗豐富，隨時能為客人提供接合及營運等各方面的支援服務。"
          selectTag={[]}
        />
        <div className="flex gap-[10px] items-center relative overflow-hidden">
          <div className="max-w-[1340px] px-[50px] flex">
            <CommonSwiper
              slidesPerView={4}
              customImagesClass={`!w-[250px] !object-contain`}
              folderName={`Service`}
              carouselList={carouselList}
            />
          </div>
          <div
            className="bg-white absolute w-full h-full"
            style={{ top: "27%" }}
          ></div>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default Service;
