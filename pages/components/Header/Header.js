import { RxHamburgerMenu } from "react-icons/rx";
import { CgMenu, CgMenuLeft } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import NavbarList from "./NavbarList";
const Header = ({ fill }) => {
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
    { title: "Home", href: "/" },
    { title: "About", href: "/About" },
    // { title: "News", href: "/News" },
    // { title: "Media", href: "/Media" },
    // { title: "Collaborate", href: "/Collaborate" },
    { title: "Service", href: "/Service" },
  ];
  const handleMenuItemClick = (href) => {
    const langParam = router.query.lang || "en";
    const targetURL = `${href}/?lang=${langParam}`;
    router.push(targetURL);
  };
  return (
    <header
      className={`fixed top-0 left-0 z-[9999] h-[90px] w-screen md:w-full transition duration-500 max-[1024px]:ml-0 max-[1024px]:h-[68px]
      ${
        fill
          ? "bg-[#26182F] border-b border-b-[#857E99]"
          : "bg-[rgba(0,0,0,0.45)]"
      }`}
    >
      <div className="flex items-center justify-between h-full container mx-auto px-[10px]">
        <nav className="flex items-center justify-start h-full ">
          <Link
            className="text-4xl font-bold text-white cursor-pointer md:mx-12"
            href={`/?lang=${router.query.lang || "en"}`}
          >
            <img
              src="https://egslot.net/Images/logo/EG-LOGO.webp"
              alt="Eazy Gaming"
              className="w-[155px] h-[48px] max-[1024px]:w-[100px] max-[1024px]:h-[31px]"
            />
          </Link>
          <div className="flex max-[1024px]:hidden">
            {menuItems.map((menuItem) => (
              <Link key={menuItem.title} href={`${menuItem.href}`}>
                <div className="title-font text-white text-xl px-4 py-2">
                  {i18nNavbar(menuItem.title)}
                </div>
              </Link>
            ))}
          </div>
        </nav>
        <CgMenu
          onClick={() => {
            setOpenNav(true);
          }}
          className="text-white text-4xl cursor-pointer"
        />
      </div>
      <NavbarList setOpenNav={setOpenNav} openNav={openNav} />
    </header>
  );
};

export default Header;
