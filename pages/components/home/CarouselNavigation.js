import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import React from "react";
import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";

const CarouselNavigation = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, []);

  const handleSlidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
    <div className="flex z-40 relative p-3 bottom-[20%] w-[140px] left-[85%] 
    max-[1024px]:bottom-[10%] z-[2] max-[1024px]:left-[12%] max-[1024px]:w-[300px] 
    mobile-navigation">
        <div className="!w-[50px] !h-[50px] max-[1024px]:!w-[30px] max-[1024px]:!h-[30px]">
          <IoCaretBackCircleOutline 
          onClick={handleSlideNext}
          className="icon cursor-pointer !w-[50px] text-4xl !text-black hover:!text-light-yellow-text swiper-button-prev max-[1024px]:!text-gray-400 max-[1024px]:!w-[30px]"/>
        </div>
        <div className="!w-[50px] !h-[50px] max-[1024px]:!w-[30px] max-[1024px]:!h-[30px]">
          <IoCaretForwardCircleOutline 
          onClick={handleSlidePrev}
          className="icon cursor-pointer !w-[50px] text-4xl !text-black hover:!text-light-yellow-text swiper-button-next max-[1024px]:!text-gray-400 max-[1024px]:!w-[30px]"/>
        </div>
      {/* <div className="swiper-button-next" onClick={handleSlideNext} />
      <div className="swiper-button-prev" onClick={handleSlidePrev} /> */}
    </div>
    </>
  );
};

export default CarouselNavigation;