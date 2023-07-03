import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Grid, FreeMode } from "swiper";

import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { useRef, useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const CommonSwiper = ({
  folderName,
  carouselList,
  customImagesClass,
  slidesPerView,
}) => {
  const swiperRef = useRef(null);

  const handleSlideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      console.log(swiper.activeIndex);
      swiper.slideNext();
    }
  };

  const handleSlidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      console.log(swiper.activeIndex);
      swiper.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        className="mySwiper h-full w-full px-[50px]"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={slidesPerView ? slidesPerView : 3}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
        {carouselList?.map((item, index) => {
          return (
            <SwiperSlide key={item.img}>
              <section className={`rounded-lg cursor-pointer`}>
                <img
                  className={`w-[360px] h-[250px] max-[1024px]:w-[288px] max-[1024px]:h-[200px] object-cover ${customImagesClass}`}
                  src={`/Images/${folderName}/${item.img}.png`}
                />
                <p
                  className="text-[24px] font-bold my-[10px] max-[1024px]:text-[18px] max-[1024px]:my-[5px]"
                  style={{ fontFamily: "TitleFont" }}
                >
                  {item.label}
                  <br />
                  <span>{item.title}</span>
                </p>
                <p className="text-sm">{item.date}</p>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* pc用輪播按鈕 */}
      <div className="flex flex-col gap-[15px] items-center justify-center ml-[50px] max-[1024px]:hidden">
        <RiArrowUpSLine
          onClick={() => handleSlidePrev()}
          className="text-4xl z-[10] cursor-pointer hover:!text-light-yellow-text"
        />
        <RiArrowDownSLine
          onClick={() => handleSlideNext()}
          className="text-4xl z-[10] cursor-pointer hover:!text-light-yellow-text"
        />
      </div>
      {/* mobile用輪播按鈕 */}
      <div className="flex flex-col gap-[15px] items-center justify-center ml-[10px] min-[1024px]:hidden">
        <RiArrowUpSLine
          onClick={() => handleSlidePrev()}
          className="text-4xl z-[10] cursor-pointer hover:!text-light-yellow-text"
        />
        <RiArrowDownSLine
          onClick={() => handleSlideNext()}
          className="text-4xl z-[10] cursor-pointer hover:!text-light-yellow-text"
        />
      </div>
    </>
  );
};

export default CommonSwiper;
