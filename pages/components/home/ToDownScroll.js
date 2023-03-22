import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

const ToDownScroll = () => {
  return (
    <section className="absolute flex flex-col items-center justify-center absolute-center !top-[80%] cursor-pointer">
      <p className="text-white text-xl">向下捲動</p>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
      >
        <HiOutlineChevronDown className="text-4xl text-red-500" />
      </motion.div>
    </section>
  );
};

export default ToDownScroll;
