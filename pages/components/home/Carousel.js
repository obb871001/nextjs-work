import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css";
import { Button } from "antd";

const CarouselList = [
  {
    background: "/Images/carousel/carousel1.jpeg",
    titleImage: "/Images/carousel/carousel1Title.png",
    content: "開拓遊戲新階段　贏取獎金不間斷",
  },
  {
    background: "/Images/carousel/carousel2.jpeg",
    titleImage: "/Images/carousel/carousel2Title.png",
    content: "無與倫比的主題遊戲",
  },
  {
    background: "/Images/carousel/carousel3.jpeg",
    titleImage: "/Images/carousel/carousel3Title.png",
    content: "您的美麗　是贏獎金的助力",
  },
];

const Carousel = () => {
  return (
    <section className="w-screen lg:h-screen md:h-[590px] max-[640px]:h-[422px]">
      <Swiper
        className="mySwiper h-full w-full"
        loop={true}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => swiper}
        modules={[Autoplay, Pagination]}
        effect="fade"
      >
        {CarouselList.map((carousel, index) => {
          return (
            <SwiperSlide key={index} className="">
              <section
                className="w-full h-full relative flex bg-no-repeat bg-center bg-cover max-[640px]:bg-[30%]"
                style={{ backgroundImage: `url(${carousel.background})` }}
              >
                <article className="flex flex-col items-center self-center ml-[60%] max-[640px]:mx-auto cursor-pointer">
                  <img
                    alt="image"
                    src={carousel.titleImage}
                    className="w-[650px] object-contain mb-[10px] hover:scale-110 transition deration-500 max-[640px]:hidden"
                  />
                  <p className="lg:text-[40px] md:text-[30px] text-center text-white text-myself-shadow mb-[20px] max-[640px]:mt-[50%]">
                    {carousel.content}
                  </p>
                  <Button
                    size="large"
                    type="primary"
                    className="w-[250px]"
                    shape="round"
                    danger
                  >
                    了解更多
                  </Button>
                </article>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
