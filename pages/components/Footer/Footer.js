import React from "react";
import ContactInput from "./ContactInput";
import ContactUs from "./ContactUs";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import ShareButton from "../Header/ShareButton";

const Footer = () => {
  const { t } = useTranslation();
  const i18nNavbar = (key) => t(`navbar.${key}`);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/About" },
    { title: "Service", href: "/Service" },
  ];

  return (
    <footer
      className="w-full h-[250px] md:h-[400px] bg-center bg-cover flex flex-col gap-[20px] md:gap-[50px] items-center justify-center relative"
      style={{
        backgroundImage: `url(/Images/footer/footer_bg.png)`,
      }}
    >
      <img
        src="https://egslot.net/Images/logo/EG-LOGO.webp"
        alt="Eazy Gaming"
        className="md:w-[255px]"
      />
      <div className="grid grid-cols-3 w-full md:w-[700px] mx-auto">
        {menuItems.map((item) => {
          return (
            <Link
              href={`${item.href}`}
              className="title-font text-lg md:text-2xl font-extrabold text-white flex items-center justify-center hover:text-light-yellow-text cursor-pointer"
              key={item.title}
            >
              {i18nNavbar(item.title)}
            </Link>
          );
        })}
      </div>
      <ShareButton />
      {/* <ContactInput /> */}
      {/* <ContactUs /> */}
    </footer>
  );
};

export default Footer;
