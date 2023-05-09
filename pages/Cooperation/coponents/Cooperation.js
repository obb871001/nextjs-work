import { motion } from "framer-motion";

const PARTNER_LIST = ["", "", "", "", ""];

const Cooperation = () => {
  return (
    <main
      className="w-full lg:min-h-screen pb-[50px] bg-no-repeat bg-[#202123] max-[640px]:bg-cover max-[640px]:pt-[150px] max-[640px]:px-[20px] max-[640px]:!bg-none"
      style={{
        backgroundImage: "url(/Images/Cooperation/hand.jpeg)",
        backgroundPosition: "70% 0 ",
      }}
    >
      <section className="lg:min-h-[65vh] md:min-h-[45vh]  w-full flex items-center">
        <section className="container mx-auto flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, ease: "easeOut" },
            }}
            className="text-white mb-[20px] max-w-[400px] relative z-[10] self-start"
          >
            <p className="text-[45px] font-medium barcarat-text-left mb-[40px]">
              媒體夥伴
            </p>
            <p>
              此欄載有與我們緊密合作的媒體夥伴。如有興趣合作，請即發電郵至
              <span className="text-yellow-500 cursor-pointer hover:text-yellow-700 hover:border-b hover:border-yellow-700">
                {" "}
                Eazy Gaming@sssggg.com
              </span>
            </p>
          </motion.div>
        </section>
      </section>
      <section className="container mx-auto grid grid-cols-5 max-[640px]:grid-cols-2 gap-4">
        {PARTNER_LIST.map((partner, index) => {
          return (
            <div
              key={index}
              className="h-[140px] border border-[rgb(46,48,50)] cursor-pointer bg-[rgb(0,0,0,0.7)] flex items-center justify-center transition duration-500 hover:border-red-500 "
            >
              <img src={`/Images/Cooperation/partner/p${index + 1}.png`} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Cooperation;
