import { ImSpinner9 } from "react-icons/im";
import { motion } from "framer-motion";
const PageLoading = () => {
  return (
    <motion.div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black z-[9999999]">
      <img className="mb-[50px] w-[240px] object-cover" src="https://egslot.net/Images/logo/EGloading.png" />
      {/* <ImSpinner9 className="text-white text-3xl animate-spin" /> */}
      <p className="text-white text-sm absolute bottom-[5px] right-[5px]">
        ver 1.0.0.0
      </p>
    </motion.div>
  );
};

export default PageLoading;
