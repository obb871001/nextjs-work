import React from "react";
import { isIOS } from "react-device-detect";
import { IoPhonePortraitOutline, IoPhonePortraitSharp } from "react-icons/io5";

const NoticeScroll = ({ onlyPortrait }) => {
  return (
    isIOS && (
      <div className="absolute bg-[rgb(0,0,0,0.5)] top-0 left-0 w-screen min-h-[100vh] flex items-center justify-center">
        {onlyPortrait ? (
          <div className="flex flex-col items-center justify-center gap-[10px] text-white">
            <p>Please play the game in portrait mode.</p>
            <IoPhonePortraitSharp className="text-3xl" />
          </div>
        ) : (
          <img
            className="w-[250px] mb-[50vh]"
            src="https://egslot.net/Images/Iframe/drag_animation.gif"
          />
        )}
      </div>
    )
  );
};

export default NoticeScroll;
