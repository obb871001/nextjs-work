import { RxHamburgerMenu } from "react-icons/rx";
import { CgMenuLeft } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const Header = () => {
  const { t } = useTranslation();
  const i18nNavbar = (key) => t(`navbar.${key}`);

  const [styles, setStyle] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 193) {
        setStyle(true);
      } else {
        setStyle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { title: "About", href: "/About" },
    // { title: "News", href: "/News" },
    // { title: "Media", href: "/Media" },
    // { title: "Collaborate", href: "/Collaborate" },
    { title: "Service", href: "/Service" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-[9999] h-[90px] w-full ml-[12%] transition duration-500 max-[1024px]:ml-0 max-[1024px]:h-[68px]
    ${styles && "bg-[rgba(0,0,0,0.45)]"}`}
    >
      <div className="flex items-center justify-start h-full container">
        <nav className="flex items-center justify-start h-full container mx-auto lg:px-[0] md:px-[20px] max-[1024px]:px-0 max-[1024px]:justify-center">
          {/* <NavbarList setOpenNav={setOpenNav} openNav={openNav} /> */}
          <Link
            className="text-4xl font-bold text-white cursor-pointer mx-12"
            href="/#"
          >
            <img
              src="https://egslot.net/Images/logo/EG-LOGO.webp"
              alt="Eazy Gaming"
              className="w-[155px] h-[48px] max-[1024px]:w-[100px] max-[1024px]:h-[31px]"
            />
          </Link>
          <div className="flex max-[1024px]:hidden">
            {menuItems.map((menuItem) => (
              <Link key={menuItem.title} href={menuItem.href}>
                <div className="title-font text-white text-xl px-4 py-2">
                  {i18nNavbar(menuItem.title)}
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
