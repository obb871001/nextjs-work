import { useTranslation } from "next-export-i18n";
import React, { useRef } from "react";

const Movie = () => {
  const { t } = useTranslation();
  const i18n = (key) => t(`video.${key}`);
  const videoRef = useRef();

  return (
    <section className="md:py-[110px] py-[80px] flex flex-col gap-[30px] px-[10px] items-center justify-center min-h-[70vh]">
      <p className="text-center title-font text-3xl tracking-tight md:text-5xl text-white font-medium">
        {i18n("title")}
      </p>
      <div className="md:w-[1024px] w-full h-[1px] bg-white my-[10px]"></div>
      <video
        className="rounded-[5px] border-2 border-light-yellow-text w-full md:w-[1240px]"
        onContextMenu={(e) => e.preventDefault()}
        ref={videoRef}
        autoPlay
        muted
        loop
      >
        <source src="/Images/video/eg_promo_video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Movie;
