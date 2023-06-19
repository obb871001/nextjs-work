import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const TableLabby = () => {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="container h-full mx-auto flex md:flex-row flex-col items-center justify-between max-[1024px]:px-[20px]"
    >
      <motion.div
        // initial={{ opacity: 0, x: -50 }}
        // animate={{
        //   opacity: inView ? 1 : 0,
        //   x: inView ? 0 : -50,
        //   transition: { duration: 1.5, ease: "easeOut" },
        // }}
        className="text-white mb-[20px] lg:max-w-[400px] max-w-full relative z-[10] self-start"
      >
        <p className="text-[45px] font-medium barcarat-text-left mb-[40px] max-[1024px]:text-xl">
          桌上版大廳
        </p>
        <p className="max-[1024px]:text-sm">
          除了 H5
          移動版支援的功能，桌上版大廳支援多個遊戲窗口模式，玩家可同時在一個視窗遊玩四款老虎機遊戲！
        </p>
      </motion.div>
      <img className="md:hidden" src="/Images/GameLabby/banner3.png" />
      <motion.div
        // initial={{ opacity: 0, x: 50 }}
        // animate={{
        //   opacity: inView ? 1 : 0,
        //   x: inView ? 0 : 50,
        //   transition: { duration: 1.5, ease: "easeOut" },
        // }}
        className="text-white mb-[20px] lg:max-w-[400px] max-w-full relative z-[10] self-end text-end"
      >
        <p className="text-[45px] font-medium barcarat-text-right mb-[40px] max-[1024px]:text-xl">
          H5 移動版
        </p>
        <p className="max-[1024px]:text-sm">
          我們的 H5
          移動版支援遊戲大廳裏的多種功能——從遊戲排名到收藏夾，玩家可輕鬆自在地享受我們的遊戲。H5
          移動版支援橫屏及豎屏顯示。
        </p>
      </motion.div>
    </section>
  );
};

export default TableLabby;
