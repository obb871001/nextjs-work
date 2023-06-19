import { useState } from "react";
import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";
import EventBox from "@/pages/components/EventBox/EventBox";
import { Button } from "antd";
import Link from "next/link";

const YEAR = ["全部", "2023"];
const EVENTS_LIST = [
  { title: "Unparalleled joy of thematic gaming", time: "2023.03.09" },
  { title: "SimplePlay 獲得首個重要獎項！", time: "2023.03.06" },
  { title: "SimplePlay 榮獲 SPiCE India Awards", time: "2023.03.01" },
  { title: "您的美麗　是贏獎金的助力", time: "2023.02.23" },
];
const Media = () => {
  const [tab, setTab] = useState(YEAR[0]);
  return (
    <section className="bg-[#202123]">
      <section className="lg:pt-[250px] md:pt-[150px] pt-[100px] pb-[0px] container mx-auto">
        <BoxTitle
          white
          title={`新聞發稿`}
          content={`此欄載有我們最新的產品資訊，並有相關遊戲圖片供免費下載，以作發布之用。`}
        />
      </section>
      <section className="lg:px-[200px] md:px-[100px] container mx-auto">
        <div className="flex py-[15px] px-[10px] text-white border-b-2 border-red-500  mb-[30px]">
          {YEAR.map((year, index) => {
            return (
              <p
                key={index}
                className={`leading-[40px] mr-[30px] text-2xl max-[1024px]:text-lg cursor-pointer footer-text-bottom ${
                  tab === year && "footer-text-bottom-show"
                }`}
                onClick={() => setTab(year)}
              >
                {year}
              </p>
            );
          })}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-[20px] py-[0px]">
          {EVENTS_LIST.map((event, index) => {
            return (
              <Link key={index} href={`/Media/${index}`}>
                <EventBox
                  KEY={index}
                  imageSrc={`/Images/Media/event${index + 1}.jpeg`}
                  title={event.title}
                  time={event.time}
                  width="w-full"
                />
              </Link>
            );
          })}
        </div>
        <section className="flex items-center justify-center pb-[30px]">
          <Button
            className="w-[200px] hover:bg-red-500 hover:!text-white hover:translate-y-[10px] transition duration-300"
            shape="round"
            size="large"
            danger
          >
            顯示更多
          </Button>
        </section>
      </section>
    </section>
  );
};

export default Media;
