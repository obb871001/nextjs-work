import { useState } from "react";
import CommonTitle from "../TextComponents/CommonTitle";

const TitleComponent = ({ selectTag, title, content, setIsFlipped }) => {
  const [selectedItem, setSelectedItem] = useState(
    selectTag ? selectTag[0]?.label : ""
  );

  return (
    <div className="flex gap-[20px] items-center text-white pr-[100px] max-[1024px]:block max-[1024px]:pr-[10%] max-[1024px]:px-[10%]">
      <CommonTitle title={title} content={content} />
      <div className="flex gap-[10px] items-center max-[1024px]:mt-3">
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
                  selectedItem === item.label ? "text-[#F5DD49]" : "text-white"
                } text-lg`}
                style={{ fontFamily: "TitleFont" }}
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
    </div>
  );
};

export default TitleComponent;
