import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import React, { useRef } from "react";
import CommonSwiper from "@/pages/components/CommonSwiper/CommonSwiper";
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

const News = () => {
  return (
    <CommonWrapper className={`w-full`}>
      <section className="flex flex-col gap-[30px] justify-center h-full pl-[12%]">
        <TitleComponent
          title="NEWS"
          content="查閱所有Eazy Gaming 參與過的展覽活動或舉辦過的推廣活動"
          selectTag={[]}
        />
        <div className="flex gap-[10px] items-center relative overflow-hidden">
          <div className="max-w-[1340px] px-[50px] flex">
            <CommonSwiper folderName={`Media`} carouselList={carouselList} />
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

export default News;
