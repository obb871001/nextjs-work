import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tip from "./Tip";

const Body = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <BoxTitle
        white
        title="遊戲大廳"
        content="Eazy Gaming 的遊戲大廳將我們全部遊戲統一整合顯示，供玩家隨意選擇遊玩。大廳各種功能一應俱全，玩家可輕易找到所需的功能。"
      />
      <div
        ref={ref}
        className="grid lg:grid-cols-4 grid-cols-1 gap-4 w-full max-[640px]:px-[20px]"
      >
        <Tip
          SVG={
            <svg
              className="ico_app red show "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110.7 111.6"
              preserveAspectRatio="xMinYMin meet"
              svg-icon-name="fav"
              data-offset="400"
            >
              <motion.path
                initial={{ strokeDashoffset: "260px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "260px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_line"
                d="M69.1 94.8l-9.2-3.1c-2.5-.8-5.1.5-5.9 3-.8 2.5.5 5.1 3 5.9l24.5 8.3c4.9 2 10.6 2 15.7-.6 9.5-4.7 13.4-16.2 8.7-25.7l-8-16.1c-1.2-2.3-4-3.3-6.3-2.1s-3.3 4-2.1 6.3l-1.7-3.4c-1.2-2.3-4-3.3-6.3-2.1-2.3 1.2-3.3 4-2.1 6.3l-1-2.1c-1.2-2.3-4-3.3-6.3-2.1-2.3 1.2-3.3 4-2.1 6.3l-7.4-14.9c-1.2-2.5-4.3-3.5-6.7-2.3-2.5 1.2-3.5 4.3-2.3 6.7l15.5 31.7zM69.9 73.7l4.1 8.2M79.4 71.6l4.1 8.2M89.5 70.8l4.1 8.2"
                strokeDasharray="260.19683837890625"
              ></motion.path>
              <motion.path
                initial={{ strokeDashoffset: "264px" }}
                animate={{ strokeDashoffset: "0px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="ico_line"
                d="M52.1 84.1l-2.4-1.3-29 16.7 5.5-35.4L2.7 39l32.5-5.2L49.7 1.6l14.6 32.2L96.7 39l-15 16"
                strokeDasharray="264.732177734375"
              ></motion.path>
            </svg>
          }
          title="收藏夾"
          content="玩家可把喜愛的遊戲加到收藏夾，快速開啟精選遊戲。"
        />
        <Tip
          SVG={
            <svg
              className="ico_app yellow show"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110.7 111.6"
              preserveAspectRatio="xMinYMin meet"
              svg-icon-name="rank"
              data-offset="450"
            >
              <motion.path
                initial={{ strokeDashoffset: "287px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "287px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_linepath ico_line"
                d="M39.2 76.3v34.1M72.4 81.1V68.5c0-.2-.2-.4-.4-.4H39.6c-.2 0-.4.2-.4.4v7.9H13.7c-.2 0-.4.2-.4.4V110c0 .2.2.4.4.4H98c.2 0 .4-.2.4-.4V81.5c0-.2-.2-.4-.4-.4H72.4z"
                strokeDasharray="287.8173828125"
              ></motion.path>
              <motion.path
                initial={{ strokeDashoffset: "34px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "34px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_line"
                d="M52.5 81.6h5v15.1M72.4 81.1v7.3M72.4 110.4v-7.2"
                strokeDasharray="34.599998474121094"
              ></motion.path>
              <circle className="ico_fill" cx="72.4" cy="95" r="1.7"></circle>
              <g>
                <motion.path
                  initial={{ strokeDashoffset: "77px" }}
                  animate={{
                    strokeDashoffset: inView ? "0px" : "77px",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  className="ico_line"
                  d="M29 9.4h-8.9c-.1 0-.2.1-.2.2 0 0-1.3 17.8 13.6 24.4M82.7 9.4h8.9c.1 0 .2.1.2.2 0 0 1.3 17.8-13.6 24.4"
                  strokeDasharray="77.82476806640625"
                ></motion.path>
                <motion.path
                  initial={{ strokeDashoffset: "204px" }}
                  animate={{
                    strokeDashoffset: inView ? "0px" : "204px",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  className="ico_line"
                  d="M59.7 68.1V52.4c0-1.4.4-1.8.4-1.8C87.3 41.7 82.2 1.8 82.2 1.8c0-.1-.1-.2-.2-.2H29.6c-.1 0-.2.1-.2.2 0 0-5.1 39.9 22.1 48.8 0 0 .4.3.4 1.8v15.7"
                  strokeDasharray="204.05352783203125"
                ></motion.path>
              </g>
              <path
                className="ico_line"
                d="M82.1 68.1H29.6"
                strokeDasharray="52.5"
                style={{ strokeDashoffset: "0px;" }}
              ></path>
            </svg>
          }
          title="遊戲排名"
          content="玩家可隨時根據累積大獎排行榜或最高贏取金額查閱熱門遊戲。"
        />
        <Tip
          SVG={
            <svg
              className="ico_app green show"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 112.5 105.2"
              preserveAspectRatio="xMinYMin meet"
              svg-icon-name="rotate"
              data-offset="500"
              style={{ opacity: 1 }}
            >
              <motion.path
                initial={{ strokeDashoffset: "14px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "14px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_line"
                d="M101.7 29.1l-5.3 4.1c-.2.2-.7.1-.9-.1l-4.1-5.3"
                strokeDasharray="14.37858772277832"
              ></motion.path>
              <motion.path
                initial={{ strokeDashoffset: "179px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "179px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_line"
                d="M71 12.7c6-4 14.1-3.7 19.9 1.1s7.6 12.7 4.8 19.3M68.4 44.5h36.9c3.1 0 5.6 2.5 5.6 5.6v45.5c0 3.1-2.5 5.6-5.6 5.6H68.4"
                strokeDasharray="179.57208251953125"
              ></motion.path>
              <path
                className="ico_fill"
                d="M71.8 103.9v-2.3c0-.2.2-.4.4-.4h22.7c.2 0 .4.2.4.4v2.3c0 .2-.2.4-.4.4H72.2c-.2 0-.4-.1-.4-.4zM91.4 44.1v-2.3c0-.2.2-.4.4-.4h4.6c.2 0 .4.2.4.4v2.3c0 .2-.2.4-.4.4h-4.6c-.3 0-.4-.2-.4-.4zM80.9 44.1v-2.3c0-.2.2-.4.4-.4h7.2c.2 0 .4.2.4.4v2.3c0 .2-.2.4-.4.4h-7.2c-.3 0-.4-.2-.4-.4zM70.4 44.1v-2.3c0-.2.2-.4.4-.4H78c.2 0 .4.2.4.4v2.3c0 .2-.2.4-.4.4h-7.2c-.2 0-.4-.2-.4-.4z"
              ></path>
              <g>
                <path
                  className="ico_fill"
                  d="M111 58.7h-3.4c-1.2 0-2.2 1-2.2 2.2v24c0 1.2 1 2.2 2.2 2.2h3.4V58.7z"
                ></path>
              </g>
              <g>
                <motion.path
                  initial={{ strokeDashoffset: "307px" }}
                  animate={{
                    strokeDashoffset: inView ? "0px" : "307px",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  className="ico_line"
                  d="M53.8 103.9H9.1c-3.3 0-6-2.7-6-6V7.7c0-3.3 2.7-6 6-6h44.8c3.3 0 6 2.7 6 6v90.2c-.1 3.3-2.7 6-6.1 6z"
                  strokeDasharray="307.6393737792969"
                ></motion.path>
                <path
                  className="ico_fill"
                  d="M62.5 40.8h-2.3c-.2 0-.4-.2-.4-.4V17.7c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v22.7c0 .2-.1.4-.4.4zM2.7 21.3H.4c-.2 0-.4-.2-.4-.4v-4.6c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v4.6c0 .2-.2.4-.4.4zM2.7 31.7H.4c-.2 0-.4-.2-.4-.4v-7.2c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v7.2c0 .3-.2.4-.4.4zM2.7 42.2H.4c-.2 0-.4-.2-.4-.4v-7.2c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v7.2c0 .2-.2.4-.4.4zM17.1 1.7v3.4c0 1.2 1 2.2 2.2 2.2h24c1.2 0 2.2-1 2.2-2.2V1.7H17.1z"
                ></path>
                <motion.path
                  initial={{ strokeDashoffset: "52px" }}
                  animate={{
                    strokeDashoffset: inView ? "0px" : "52px",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  className="ico_line"
                  d="M18.6 57.1l25.2-25.2M19.6 68.2L31.9 56"
                  strokeDasharray="52.962440490722656"
                ></motion.path>
                <circle
                  className="ico_fill"
                  cx="37.3"
                  cy="50.6"
                  r="2.9"
                ></circle>
                <path
                  className="ico_line"
                  d="M19.6 96.4h23.7"
                  strokeDasharray="23.700002670288086"
                  style={{ strokeDashoffset: "0px;" }}
                ></path>
              </g>
            </svg>
          }
          title="屏幕旋轉"
          content="所有移動版本支援橫向及縱向模式，玩家可隨時旋轉屏幕遊玩。"
        />
        <Tip
          SVG={
            <svg
              className="ico_app blue show"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110.7 111.6"
              preserveAspectRatio="xMinYMin meet"
              svg-icon-name="split"
              data-offset="550"
            >
              <motion.path
                initial={{ strokeDashoffset: "313px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "313px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_line"
                d="M60.1 47.3H7.8c-3.5 0-6.3-2.8-6.3-6.3V12c0-3.5 2.8-6.3 6.3-6.3h46c3.5 0 6.3 2.8 6.3 6.3v35.3zM25.2 26.5h11.2m-5.6-5.6v11.2M10.7 76.8h98.8"
                strokeDasharray="313.51910400390625"
              >
                {" "}
              </motion.path>
              <circle className="ico_fill" cx="60.6" cy="84.7" r="2.1"></circle>
              <motion.path
                initial={{ strokeDashoffset: "561px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "561px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_line"
                d="M51.5 97.2l-2 8.7m19.2-8.7l2 8.7m-32.6 0h44.1M60.1 17.7v59.1m49-29.5H10.7m95.2-29.6H60.1v29.6H10.7v41.5c0 2 1.6 3.6 3.6 3.6h91.5c2 0 3.6-1.6 3.6-3.6V21.4c.1-2-1.5-3.7-3.5-3.7z"
                strokeDasharray="561.6688842773438"
              ></motion.path>
            </svg>
          }
          title="多個遊戲窗口模式"
          content="桌上版大廳支援多個遊戲窗口模式，玩家可在單一視窗運行同時多個遊戲。"
        />
      </div>
    </>
  );
};

export default Body;
