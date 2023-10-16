import { useState } from "react";
import CommonTitle from "../TextComponents/CommonTitle";
import { useTranslation } from "react-i18next";

const TitleComponent = ({
  selectTag,
  title,
  content,
  setIsFlipped,
  fileName,
}) => {
  const { t } = useTranslation();
  const i18n = (key) => t(`${fileName}.${key}`);

  const [selectedItem, setSelectedItem] = useState(
    selectTag ? selectTag[0]?.label : ""
  );

  return (
    <div className="flex flex-col  gap-[20px] items-center text-white max-[1024px]:block max-[1024px]:pr-[10%] max-[1024px]:px-[10%]">
      <CommonTitle title={title} content={content} />
      <div className="bg-white h-[1px] w-full my-[15px]"></div>
      <section className="flex justify-start w-full">
        <div className="flex gap-[10px] items-center justify-start max-[1024px]:mt-3">
          {selectTag?.map((item, index) => {
            return (
              <div
                key={item.label}
                onClick={() => {
                  setSelectedItem(item.label);
                  setIsFlipped(item.flipped);
                }}
                className="flex gap-[8px] items-center cursor-pointer "
              >
                <p
                  className={`${
                    selectedItem === item.label
                      ? "text-[#F5DD49]"
                      : "text-white"
                  } text-lg title-font max-[1024px]:text-base break-keep	`}
                >
                  {item.label}
                </p>
                <div class="flex items-center justify-center">
                  <hr
                    class={`${
                      selectedItem === item.label ? "bg-[#F5DD49]" : "bg-white"
                    } w-[50px] h-[3px]`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TitleComponent;
