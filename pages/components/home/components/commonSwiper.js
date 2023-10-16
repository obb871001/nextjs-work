import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const CommonSwiper = ({ children }) => {
  const swiperRef = useRef(null);

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
    <Swiper
      className="mySwiper h-full w-full relative"
      ref={swiperRef}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      autoplay={{
        delay: 7000000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, FreeMode]}
      effect="fade"
    >
      <section className="flex items-center justify-between absolute w-full h-full top-0 left-0 md:px-[30px]">
        <div
          onClick={handleSlidePrev}
          className="md:text-5xl text-3xl cursor-pointer text-white relative z-[1]"
        >
          <IoIosArrowBack />
        </div>
        <div
          onClick={handleSlideNext}
          className="md:text-5xl text-3xl cursor-pointer text-white relative z-[1]"
        >
          <IoIosArrowForward />
        </div>
      </section>
      {children}
    </Swiper>
  );
};

export default CommonSwiper;
