import { AiOutlineFileDone } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { GiChampions } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaBoxOpen } from "react-icons/fa";
import IconTextBox from "@/pages/components/IconTextBox/IconTextBox";
import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";
import { Image } from 'antd';
const iconStyle = "mb-[20px] text-[100px] max-[640px]:text-[70px]";
const SKILL_LIST = [
  {
    icon: <AiOutlineFileDone className={iconStyle} />,
    main: "專業",
    content: "在業界經年累月的經驗，讓我們的團隊掌握製作受歡迎遊戲的竅門。",
  },
  {
    icon: <BsShieldCheck className={iconStyle} />,
    main: "多元",
    content: "團隊結集來自業內各領域的專門人才，能做出切合各種需要的產品。",
  },
  {
    icon: <GiChampions className={iconStyle} />,
    main: "以客為本",
    content: "我們從客戶的角度思考，開發有效提升盈利的遊戲，共創無限商機。",
  },
  {
    icon: <TbHeartHandshake className={iconStyle} />,
    main: "熱誠",
    content: "整個團隊熱愛遊戲，滿懷熱誠，並致力開發出可以成為經典的產品。",
  },
  {
    icon: <HiOutlineLightBulb className={iconStyle} />,
    main: "創意豐富",
    content: "SimplePlay 重視創意。全憑創意，我們才可開發出獨具風格的遊戲。",
  },
  {
    icon: <FaBoxOpen className={iconStyle} />,
    main: "創新",
    content: "我們敢於創新，不斷將嶄新科技應用到產品中，用家體驗得以提升。",
  },
];

const About = () => {
  return (
    <>
      <main className="lg:h-[80vh] md:min-h-[35vh] max-[640px]:min-h-[35vh] w-full bg-[url(/Images/aboutUs/bg.jpeg)] flex items-center relative overflow-hidden" 
      style={{
        backgroundImage: 'url(/Images/aboutUs/modal.png), url(/Images/aboutUs/bg.jpeg)',
        backgroundPosition: '40vw 10vh, 50% 50%',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'contain, cover',
        textShadow: '-1px 0 20px #000, 0 1px 20px #000, 1px 1px 20px #000, 0 -1px 20px #000',
      }}>
        <section className="container mx-auto">
          <div className="text-white max-[640px]:text-center max-[640px]:px-[20px]">
            <p className="text-[50px] font-medium mb-[20px] max-[640px]:text-2xl">
              關於我們
            </p>
            <p className="w-[450px] max-[640px]:text-sm max-[640px]:w-auto">
            Eazy Gaming
              由一群充滿經驗及熱誠的業界菁英創立，致力研發優質的老虎機遊戲，把轉輪的樂趣帶給全世界的玩家。此外，我們亦備有刺激的捕魚遊戲，為線上娛樂營運商提供豐富的遊戲選擇。
            </p>
          </div>
        </section>
        <Image
          alt="image"
          src="/Images/aboutUs/modal.png"
          className="absolute lg:bottom-[-5%] xl:bottom-[-15%] right-[0%] lg:w-[600px] xl:w-[900px] 2xl:w-[1050px] hidden lg:block object-cover"
        />
      </main>
      <main className="min-h-[80vh] w-full bg-[#9D242D] py-[5.625rem]">
        <section className="container mx-auto text-white flex flex-col items-center">
          <BoxTitle
            title="我們的團隊"
            content="Eazy Gaming
            的團隊集合業界各個領域中經驗最豐富的專業人士。團隊有熱誠、有遠見，矢志將遊戲玩樂提升至另一個層次。我們能為客戶創造源源不絕的商機，提高收益，絕對是開發拓展市場的首選！"
          />
          <section className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto">
            {SKILL_LIST?.map((skill, index) => {
              return (
                <IconTextBox
                  icon={skill.icon}
                  main={skill.main}
                  content={skill.content}
                  key={index}
                />
              );
            })}
          </section>
        </section>
      </main>
      <main className="lg:h-[80vh] md:min-h-[35vh] bg-[url(/Images/aboutUs/bg2.jpeg)] bg-cover bg-center py-[5.5rem]">
        <section className="container mx-auto">
          <div className="text-white flex flex-col items-center">
            <BoxTitle
              title="國際認證"
              content="Eazy Gaming
            我們所有的 RNG 遊戲均已取得全球經驗最豐富的第三方遊戲測試機構 BMM
            在歐洲大部分司法管轄區的認證，合乎相關的法律及技術要求。"
            />

            <Image
              alt="image"
              src="/Images/aboutUs/prove.png"
              className="w-[272px] h-[272px] rounded-full border border-red-500 object-cover p-[30px]"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
