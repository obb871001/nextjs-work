import { useRef } from "react";
import ToDownScroll from "./ToDownScroll";
const Video = () => {
  const videoRef = useRef();
  return (
    <section className="min-w-screen h-[300px] md:h-screen object-cover relative md:bg-none bg-cover bg-center bg-[url(/Images/video/mobile-banner.webp)]">
      {/* <img
        className="w-full h-full hidden md:block"
        src="/Images/video/pc-banner.webp"
        alt="Eazy Gaming"
      />
      <img
        className="w-full h-full md:hidden"
        src="/Images/video/mobile-banner.webp"
        alt="Eazy Gaming"
      /> */}
      <video
        className="w-full h-full object-cover"
        onContextMenu={(e) => e.preventDefault()}
        ref={videoRef}
        playsInline
        autoPlay
        muted
        loop
      >
        <source src="/Images/video/eg_promo_video.mp4" type="video/mp4" />
        <source src="/Images/video/eg_promo_video.webm" type="video/webm" />
      </video>
      <ToDownScroll />
    </section>
  );
};

export default Video;
