import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tip from "./Tip";

const Skill = () => {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref}
      className="container mx-auto grid grid-cols-1 lg:grid-cols-3 py-[50px] max-[640px]:px-[20px]"
    >
      <Tip
        SVG={
          <svg
            className="ico_app wht show"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 112.5 105.2"
            preserveAspectRatio="xMinYMin meet"
            svg-icon-name="rotate"
          >
            <path
              className="ico_line"
              d="M101.7 29.1l-5.3 4.1c-.2.2-.7.1-.9-.1l-4.1-5.3"
              stroke-dasharray="14.37858772277832"
              style={{ strokeDashoffset: "0px;" }}
            ></path>
            <motion.path
              initial={{ strokeDashoffset: "179px" }}
              animate={{
                strokeDashoffset: inView ? "0px" : "179px",
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
              className="ico_line"
              d="M71 12.7c6-4 14.1-3.7 19.9 1.1s7.6 12.7 4.8 19.3M68.4 44.5h36.9c3.1 0 5.6 2.5 5.6 5.6v45.5c0 3.1-2.5 5.6-5.6 5.6H68.4"
              stroke-dasharray="179.57208251953125"
              //   style={{ strokeDashoffset: "0px;" }}
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
                stroke-dasharray="307.6393737792969"
                // style={{ strokeDashoffset: "0px;" }}
              ></motion.path>
              <path
                className="ico_fill"
                d="M62.5 40.8h-2.3c-.2 0-.4-.2-.4-.4V17.7c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v22.7c0 .2-.1.4-.4.4zM2.7 21.3H.4c-.2 0-.4-.2-.4-.4v-4.6c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v4.6c0 .2-.2.4-.4.4zM2.7 31.7H.4c-.2 0-.4-.2-.4-.4v-7.2c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v7.2c0 .3-.2.4-.4.4zM2.7 42.2H.4c-.2 0-.4-.2-.4-.4v-7.2c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v7.2c0 .2-.2.4-.4.4zM17.1 1.7v3.4c0 1.2 1 2.2 2.2 2.2h24c1.2 0 2.2-1 2.2-2.2V1.7H17.1z"
              ></path>
              <path
                className="ico_line"
                d="M18.6 57.1l25.2-25.2M19.6 68.2L31.9 56"
                stroke-dasharray="52.962440490722656"
                style={{ strokeDashoffset: "0px;" }}
              ></path>
              <circle className="ico_fill" cx="37.3" cy="50.6" r="2.9"></circle>
              <path
                className="ico_line"
                d="M19.6 96.4h23.7"
                stroke-dasharray="23.700002670288086"
                style={{ strokeDashoffset: "0px;" }}
              ></path>
            </g>
          </svg>
        }
        title="屏幕旋轉"
        content="Eazy Gaming APP 支援橫向及縱向模式，玩家可隨時旋轉屏幕遊玩。"
      />
      <Tip
        SVG={
          <svg
            className="ico_app wht show"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 110.7 111.6"
            preserveAspectRatio="xMinYMin meet"
            svg-icon-name="qr"
          >
            <motion.path
              initial={{ strokeDashoffset: "220px" }}
              animate={{
                strokeDashoffset: inView ? "0px" : "220px",
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
              className="ico_line"
              d="M59.8 20.8V10.3c0-3.3-2.7-6-6-6H9c-3.3 0-6 2.7-6 6v90.2c0 3.3 2.7 6 6 6h44.8c3.3 0 6-2.7 6-6V88.4"
              stroke-dasharray="240.08065795898438"
            ></motion.path>
            <path
              className="ico_fill"
              d="M2.6 23.9H.3c-.2 0-.4-.2-.4-.4v-4.6c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v4.6c0 .2-.2.4-.4.4zM2.6 34.4H.3c-.2 0-.4-.2-.4-.4v-7.2c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4V34c0 .2-.2.4-.4.4zM2.6 44.9H.3c-.2 0-.4-.2-.4-.4v-7.2c0-.2.2-.4.4-.4h2.3c.2 0 .4.2.4.4v7.2c0 .2-.2.4-.4.4zM17 4.3v3.4c0 1.2 1 2.2 2.2 2.2h24c1.2 0 2.2-1 2.2-2.2V4.3H17z"
            ></path>
            <path
              className="ico_line"
              d="M19.6 99.1h23.7"
              stroke-dasharray="23.700002670288086"
              style={{ strokeDashoffset: "0px;" }}
            ></path>
            <g>
              <path
                className="ico_line"
                d="M38.2 36.7V26c0-.1.1-.2.2-.2h10.8M49.1 83.4H38.3c-.1 0-.2-.1-.2-.2V72.4M95.8 36.7V26c0-.1-.1-.2-.2-.2H84.8M84.8 83.4h10.8c.1 0 .2-.1.2-.2V72.4M93.8 54.6h15.7M24.5 54.6h15.7"
                stroke-dasharray="118.83912658691406"
                style={{ strokeDashoffset: "0px;" }}
              ></path>
              <g>
                <path
                  className="ico_line"
                  d="M64.7 50.6h-15c-.1 0-.1 0-.1-.1v-15c0-.1 0-.1.1-.1h15c.1 0 .1 0 .1.1l-.1 15.1c.1 0 0 0 0 0z"
                  stroke-dasharray="60.72987365722656"
                  style={{ strokeDashoffset: "0px;" }}
                ></path>
                <path
                  className="ico_fill"
                  d="M60 45.9h-5.5c-.1 0-.1 0-.1-.1v-5.5c0-.1 0-.1.1-.1H60c.1 0 .1 0 .1.1l-.1 5.6c.1 0 0 0 0 0zM60 69h-5.5c-.1 0-.1 0-.1-.1v-5.5c0-.1 0-.1.1-.1H60c.1 0 .1 0 .1.1L60 69c.1-.1 0 0 0 0zM77.6 63.6h-4.9c-.1 0-.1 0-.1-.1v-4.9c0-.1 0-.1.1-.1h4.9c.1 0 .1 0 .1.1l-.1 5c.1-.1.1 0 0 0zM77.6 73.7h-4.9c-.1 0-.1 0-.1-.1v-4.9c0-.1 0-.1.1-.1h4.9c.1 0 .1 0 .1.1l-.1 5c.1-.1.1 0 0 0zM87.6 63.6h-4.9c-.1 0-.1 0-.1-.1v-4.9c0-.1 0-.1.1-.1h4.9c.1 0 .1 0 .1.1l-.1 5z"
                ></path>
                <path
                  className="ico_fill"
                  d="M82.7 68.6h-4.9c-.1 0-.1 0-.1-.1v-4.9c0-.1 0-.1.1-.1h4.9c.1 0 .1 0 .1.1l-.1 5c.1 0 0 0 0 0zM87.7 73.7h-4.9c-.1 0-.1 0-.1-.1v-4.9c0-.1 0-.1.1-.1h4.9c.1 0 .1 0 .1.1l-.1 5c.1-.1.1 0 0 0zM83 45.9h-5.5c-.1 0-.1 0-.1-.1v-5.5c0-.1 0-.1.1-.1H83c.1 0 .1 0 .1.1l-.1 5.6c.1 0 .1 0 0 0z"
                ></path>
                <path
                  className="ico_line"
                  d="M64.7 73.7h-15c-.1 0-.1 0-.1-.1v-15c0-.1 0-.1.1-.1h15c.1 0 .1 0 .1.1l-.1 15.1c.1-.1 0 0 0 0zM87.7 50.6h-15c-.1 0-.1 0-.1-.1v-15c0-.1 0-.1.1-.1h15c.1 0 .1 0 .1.1l-.1 15.1c.1 0 .1 0 0 0z"
                  stroke-dasharray="121.55766296386719"
                  style={{ strokeDashoffset: "0px;" }}
                ></path>
              </g>
            </g>
          </svg>
        }
        title="二維碼"
        content="玩家可掃瞄二維碼，快速開啟 SimplePlay APP，輕鬆登入遊戲大應。"
      />
      <Tip
        SVG={
          <svg
            className="ico_app wht show"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 110.7 111.6"
            preserveAspectRatio="xMinYMin meet"
            svg-icon-name="pattern"
          >
            <circle
              className="ico_line"
              cx="12.5"
              cy="12.5"
              r="11"
              stroke-dasharray="68.66967010498047"
              style={{ strokeDashoffset: "0px;" }}
            ></circle>
            <circle
              className="ico_line"
              cx="12.5"
              cy="55.8"
              r="11"
              stroke-dasharray="68.669677734375"
              style={{ strokeDashoffset: "0px;" }}
            ></circle>
            <circle
              className="ico_line"
              cx="12.5"
              cy="99.1"
              r="11"
              stroke-dasharray="68.66966247558594"
              style={{ strokeDashoffset: "0px;" }}
            ></circle>
            <g>
              <circle
                className="ico_line"
                cx="98.2"
                cy="12.5"
                r="11"
                stroke-dasharray="68.66966247558594"
                style={{ strokeDashoffset: "0px;" }}
              ></circle>
              <circle
                className="ico_line"
                cx="98.2"
                cy="55.8"
                r="11"
                stroke-dasharray="68.66967010498047"
                style={{ strokeDashoffset: "0px;" }}
              ></circle>
              <circle
                className="ico_line"
                cx="98.2"
                cy="99.1"
                r="11"
                stroke-dasharray="68.66966247558594"
                style={{ strokeDashoffset: "0px;" }}
              ></circle>
            </g>
            <g>
              <circle
                className="ico_line"
                cx="55.3"
                cy="12.5"
                r="11"
                stroke-dasharray="68.66967010498047"
                style={{ strokeDashoffset: "0px;" }}
              ></circle>
              <circle
                className="ico_line"
                cx="55.3"
                cy="99.1"
                r="11"
                stroke-dasharray="68.66967010498047"
                style={{ strokeDashoffset: "0px;" }}
              ></circle>
              <motion.path
                initial={{ strokeDashoffset: "129px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "129px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_line"
                d="M12.5 12.5V99c0 .1.1.2.2.2H55"
                stroke-dasharray="129.1097869873047"
              ></motion.path>
            </g>
            <g>
              <motion.path
                initial={{ strokeDashoffset: "124px" }}
                animate={{
                  strokeDashoffset: inView ? "0px" : "124px",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="ico_line"
                d="M66.7 72.9H44c-.1 0-.1 0-.1-.1V52.5c0-.1 0-.1.1-.1h22.8c.1 0 .1 0 .1.1v20.3c-.1.1-.1.1-.2.1zM46.3 52.4v-4.7c0-5 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1v4.7"
                stroke-dasharray="124.84593200683594"
              ></motion.path>
            </g>
          </svg>
        }
        title="圖案登錄"
        content="Eazy Gaming APP 提供圖案登錄，玩家可畫圖案登入"
      />
    </section>
  );
};

export default Skill;
