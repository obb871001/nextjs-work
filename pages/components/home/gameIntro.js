import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CommonSwiper from "./components/commonSwiper";

const GameIntro = ({
  customList,
  backgroundProps,
  charactorProps,
  wrapperClass,
  navType,
}) => {
  const [isHovered, setIsHovered] = useState(false);
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

  const banner_list = useMemo(() => {
    return (
      customList || [
        { prefix: "witch" },
        { prefix: "maid" },
        { prefix: "sinbad" },
      ]
    );
  }, [customList]);

  return (
    <section className={wrapperClass}>
      <CommonSwiper>
        {banner_list.map((banner) => {
          return (
            <SwiperSlide key={`${banner.prefix}`}>
              <section
                className="min-w-screen h-[700px] object-cover relative md:bg-none bg-cover bg-center relative md:block hidden"
                style={{
                  backgroundImage: `url(/Images/video/hot_game_bg_${banner.prefix}.webp)`,
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover opacity-[0.93] z-[2]"
                  style={{
                    backgroundImage: `url(/Images/video/hot_game_frame_witch.png)`,
                  }}
                ></div>
                <img
                  className="absolute absolute-center object-cover h-full !left-[33%] z-[1]"
                  src={`/Images/video/hot_game_char_${banner.prefix}.webp`}
                  alt="Eazy Gaming"
                />
                <div className="flex justify-end w-full h-full relative z-[3]">
                  <div className="w-[50%] h-full flex flex-col gap-[30px] items-center justify-center">
                    <img
                      className="w-[530px]"
                      src={`/Images/video/hot_game_word_${banner.prefix}.png`}
                    />
                    <Link
                      href={`/type/slot/${banner.prefix}`}
                      className={`${
                        isHovered ? "scale-[1.1]" : ""
                      } transition duration-500 w-[300px] h-[98px] bg-cover cursor-pointer object-cover`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      style={{
                        backgroundImage: isHovered
                          ? `url(/Images/video/hot_game_play_now_hover.png)`
                          : `url(/Images/video/hot_game_play_now.png)`,
                      }}
                    ></Link>
                  </div>
                </div>
              </section>
              <section
                className="min-w-screen h-[250px] object-cover relative md:bg-none bg-cover bg-center relative md:hidden block overflow-hidden"
                style={{
                  backgroundImage: `url(/Images/video/mobile-hot_game_${banner.prefix}_bg.webp)`,
                  backgroundSize: backgroundProps?.backgroundSize,
                  backgroundPositionX: backgroundProps?.backgroundPositionX,
                }}
              >
                <img
                  className={`absolute absolute-center object-cover h-full ${
                    charactorProps?.left || "!left-[35%]"
                  } z-[2]`}
                  src={`/Images/video/mobile-hot_game_char_${banner.prefix}.webp`}
                  alt="Eazy Gaming"
                />
                <div className="flex justify-end w-full h-full relative z-[3]">
                  <div className="mr-[20px] h-full flex flex-col gap-[15px] items-center justify-center">
                    <img
                      className="w-[130px]"
                      src={`/Images/video/hot_game_word_${banner.prefix}.png`}
                    />
                    <Link
                      href={`/type/${navType}/${banner.prefix}`}
                      className={`${
                        isHovered ? "scale-[1.1]" : ""
                      } transition duration-500 w-[120px] h-[40px] bg-cover cursor-pointer object-cover`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      style={{
                        backgroundImage: isHovered
                          ? `url(/Images/video/hot_game_play_now_hover.png)`
                          : `url(/Images/video/hot_game_play_now.png)`,
                      }}
                    ></Link>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </CommonSwiper>
    </section>
  );
};

export default GameIntro;
