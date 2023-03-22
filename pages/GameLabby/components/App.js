import { motion } from "framer-motion";
import React from "react";

const App = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between max-[640px]:px-[20px]">
      <div className="text-white mb-[20px] max-w-[400px] relative z-[10] lg:text-left text-center">
        <p className="text-[45px] max-[640px]:text-xl font-medium barcarat-text-left mb-[40px]">
          WorthySky APP
        </p>
        <p className="max-[640px]:text-sm">
          SimplePlay APP
          是使用移動裝置時，方便地開啟遊戲大廳的一個方法。玩家可使用二維碼或是圖案進行登錄。
        </p>
      </div>

      <div className="w-[455px] max-[640px]:w-[300px] relative h-full lg:mb-[0] mb-[40px]">
        <section className="w-full h-full flex items-center justify-center">
          <div
            className="bg-cover absolute h-[455px] absolute-center !left-[20%] max-[640px]:!top-[72%] w-full bg-[url(/Images/GameLabby/phone1.png)]"
            style={{
              backgroundSize: "100%,100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="bg-cover absolute h-[358px] absolute-center !left-[64%] !top-[60%] max-[640px]:!top-[84%] w-full bg-[url(/Images/GameLabby/phone2.png)]"
            style={{
              backgroundSize: "100%,100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="bg-cover  h-[337px] w-[336px] bg-[url(/Images/GameLabby/box.png)]"
            style={{
              backgroundSize: "100%,100%",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>
        </section>
      </div>
    </div>
  );
};

export default App;
