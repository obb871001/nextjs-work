import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";
import { HiOutlinePuzzle } from "react-icons/hi";
import { VscFolderActive } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import IconTextBox from "@/pages/components/IconTextBox/IconTextBox";

const iconStyle = "mb-[20px] text-[80px]";
const SKILL_LIST = [
  {
    icon: <HiOutlinePuzzle className={iconStyle} />,
    main: "API 應用程式界面",
    content: "所有遊戲產品均可無縫接合至您的平台，為您提供豐富的遊戲選擇。",
  },
  {
    icon: <VscFolderActive className={iconStyle} />,
    main: "錢包集成方案",
    content:
      "我們備有轉賬錢包集成方案及單一錢包集成方案，讓玩家靈活運用資金，娛樂更加方便，收益源源不絕。",
  },
  {
    icon: <GiSkills className={iconStyle} />,
    main: "全天候技術支援",
    content:
      "我們的支援隊伍全天候為您提供各種援助。遊戲運行暢順，玩家全情投入，收益節節上升。",
  },
  {
    icon: <MdOutlineDashboardCustomize className={iconStyle} />,
    main: "後台管理",
    content:
      "我們的後台系統提供實時運營數據及多種管理工具，助您更有效管理業務。",
  },
  {
    icon: <AiOutlineGlobal className={iconStyle} />,
    main: "支援多種語言及貨幣",
    content:
      "我們的遊戲支援多種主要語言及貨幣，世界各地的玩家能盡情享受我們的遊戲。",
  },
  {
    icon: <BsHeadset className={iconStyle} />,
    main: "線上客服",
    content: "我們的客服團隊人員樂於為您排解疑難、聆聽您所需。",
  },
];

const Services = () => {
  return (
    <>
      <main
        className="min-h-screen w-full max-[640px]:py-[100px] py-[200px] bg-no-repeat bg-[100%,cover]"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(32,33,35,0) 0%,rgba(32,33,35,0.6) 50%,rgba(239,51,64,0.5) 100%),url(/Images/Services/bg.jpg)",
          backgroundPosition: "50% 100%,50% 50%",
        }}
      >
        <section className="container mx-auto flex flex-col items-center">
          <BoxTitle
            white
            title="服務簡介"
            content="WorthySky 提供全面的一站式服務，不論在產品質量、服務管理以及技術支援，我們的專業團隊經驗豐富，隨時能為客人提供接合及營運等各方面的支援服務。"
          />
          <section className="grid grid-cols-2 max-[640px]:grid-cols-1">
            {SKILL_LIST.map((skill, index) => {
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
    </>
  );
};

export default Services;
