import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import React, { useRef } from "react";
import { useState } from "react";
import CommonSwiper from "../../components/CommonSwiper/CommonSwiper";
const selectTag = [
  {
    label: "All",
  },
  {
    label: "2023",
  },
];
const carouselList = [
  {
    label: "East & West Virtual Expo:",
    title: "New Wave",
    date: "2021.06.01 - 2021.06.01",
    img: "card1",
  },
  {
    label: "East & West Virtual Expo:",
    title: "New Wave",
    date: "2021.06.01 - 2021.06.01",
    img: "card2",
  },
  {
    label: "East & West Virtual Expo:",
    title: "New Wave",
    date: "2021.06.01 - 2021.06.01",
    img: "card3",
  },
  {
    label: "East & West Virtual Expo:",
    title: "New Wave",
    date: "2021.06.01 - 2021.06.01",
    img: "card4",
  },
  {
    label: "East & West Virtual Expo:",
    title: "New Wave",
    date: "2021.06.01 - 2021.06.01",
    img: "card1",
  },
  {
    label: "East & West Virtual Expo:",
    title: "New Wave",
    date: "2021.06.01 - 2021.06.01",
    img: "card2",
  },
];

const Media = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <CommonWrapper className={`w-full`}>
      <section className="flex flex-col gap-[30px] justify-center h-full pl-[12%] max-[1024px]:pl-[0%]">
        <TitleComponent
          title="MEDIA"
          content="This section contains our latest product information and offers related game images for free download, for the purpose of publication."
          // content="此欄載有我們最新的產品資訊，並有相關遊戲圖片提供免費下載，以作發布之用。"
          selectTag={selectTag}
          setIsFlipped={setIsFlipped}
        />
        <div className="flex gap-[10px] items-center relative overflow-hidden max-[1024px]:px-[2%]">
          <div className="max-w-[1340px] px-[50px] flex max-[1024px]:hidden">
            <CommonSwiper folderName={`Media`} carouselList={carouselList} />
          </div>
          <div
            className="bg-white absolute w-full h-full"
            style={{ top: "27%" }}
          ></div>
          
          <div className="max-w-[100%] px-[1%] flex min-[1024px]:hidden">
            <CommonSwiper 
            slidesPerView={1}
            folderName={`Media`} 
            carouselList={carouselList} />
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default Media;
