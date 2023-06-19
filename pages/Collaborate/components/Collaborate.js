import TitleComponent from "@/pages/components/TitleComponent/TitleComponent";
import CommonWrapper from "@/pages/components/Wrapper/CommonWrapper";
import React, { useRef } from "react";
import CommonSwiper from "@/pages/components/CommonSwiper/CommonSwiper";
const carouselList = [
  {
    img: "collaborate-pic1",
  },
  {
    img: "collaborate-pic2",
  },
  {
    img: "collaborate-pic3",
  },
  {
    img: "collaborate-pic4",
  },
  {
    img: "collaborate-pic1",
  },
  {
    img: "collaborate-pic2",
  },
  {
    img: "collaborate-pic3",
  },
  {
    img: "collaborate-pic4",
  },
];

const Collaborate = () => {
  return (
    <CommonWrapper className={`w-full`}>
      <section className="flex flex-col gap-[30px] justify-center h-full">
        <TitleComponent
          title="Collaborate"
          content="此欄截有與我們緊密合作的媒體夥伴。如有興趣合作，請即發電郵至Eazy Gaming@"
          selectTag={[]}
        />
        <div className="flex gap-[10px] items-center relative overflow-hidden">
          <div className="max-w-[1340px] px-[50px] flex">
            <CommonSwiper
              slidesPerView={4}
              customImagesClass={`!w-[250px] !object-contain`}
              folderName={`Collaborate`}
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

export default Collaborate;
