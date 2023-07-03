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
      <section className="flex flex-col gap-[30px] justify-center h-full pl-[12%] max-[1024px]:pl-[0%]">
        <TitleComponent
          title="Collaborate"
          content="This section features our closely partnered media affiliates. If you're interested in collaborating, please email us at service@egslot.net."
          // content="此欄載有與我們緊密合作的媒體夥伴。如有興趣合作，請即發電郵至Eazy Gaming@"
          selectTag={[]}
        />
        <div className="flex gap-[10px] items-center relative overflow-hidden max-[1024px]:px-[10%]">
          <div className="max-w-[1340px] px-[50px] flex max-[1024px]:hidden">
            <CommonSwiper
              slidesPerView={4}
              customImagesClass={`!w-[250px] !object-contain`}
              folderName={`Collaborate`}
              carouselList={carouselList}
            />
          </div>
          <div
            className="bg-white absolute w-full h-full max-[1024px]:hidden"
            style={{ top: "27%" }}
          ></div>

          <div className="max-w-[100%] px-[1%] flex min-[1024px]:hidden">
            <CommonSwiper
              slidesPerView={1}
              customImagesClass={`!w-[300px] !object-contain`}
              folderName={`Collaborate`}
              carouselList={carouselList}
            />
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default Collaborate;
