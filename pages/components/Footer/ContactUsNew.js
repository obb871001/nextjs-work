import { Button, Input } from "antd";
import { CONTACT_ICON, CONTACT_LIST, COOPERATION } from "@/constants";
import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsLine } from "react-icons/bs";
import { FaTelegramPlane, FaFacebookSquare } from "react-icons/fa";

const socialMediaLinks = [
    { platform: "Facebook", link: "https://www.facebook.com", icon: FaFacebookSquare },
    { platform: "Telegram", link: "https://www.telegram.org", icon: FaTelegramPlane },
    { platform: "Instagram", link: "https://www.instagram.com", icon: AiFillInstagram },
    { platform: "Line", link: "https://www.line.me", icon: BsLine },
    { platform: "YouTube", link: "https://www.youtube.com", icon: AiFillYoutube },
  ];

const ContactUsNew = () => {
  return (
    <section className="pt-[5.5rem] pb-[7.5rem] flex flex-col max-w-none max-[640px]:pb-[10px] max-[640px]:py-0 max-[640px]:pl-[20%]">
      <section className="flex items-center justify-start mb-[0px] max-[640px]:justify-center ">
        <div className="flex">
        {socialMediaLinks.map((item) => {
            const IconComponent = item.icon; // 取得動態的元件名稱
            return (
            <a
                key={item.platform}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <IconComponent className="cursor-pointer !w-[25px] text-4xl !text-dark-grey-text mx-2 hover:!text-light-yellow-text" />
            </a>
            );
        })}
        </div>
        {/* {COOPERATION.map((icon, index) => {
          return (
            <img
              alt="image"
              key={index}
              className="w-[100px] h-[50px] object-contain mr-[10px]"
              src={`/Images/footer/cooperation/${icon}.png`}
            />
          );
        })} */}
      </section>
      <p className="title-font text-[#848484] text-sm text-center my-[10px] text-dark-grey-text">
        Copyright © 2023 Eazy Gaming. All Rights Reserved.
      </p>
    </section>
  );
};

export default ContactUsNew;
