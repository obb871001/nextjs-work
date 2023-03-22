import { useRef } from "react";
import ToDownScroll from "./ToDownScroll";
const Video = () => {
  const videoRef = useRef();
  return (
    <section className="min-w-screen  max-[640px]:min-h-[90vh] object-cover relative md:bg-none bg-cover bg-center bg-[url(/Images/video/m-banner.jpeg)]">
      <video
        className="w-full h-full max-[640px]:hidden"
        onContextMenu={(e) => e.preventDefault()}
        ref={videoRef}
        autoPlay
        muted
        loop
      >
        <source src="/Images/video/mainvideo.mp4" type="video/mp4" />
      </video>
      <ToDownScroll />
    </section>
  );
};

export default Video;
