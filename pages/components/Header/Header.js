import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
// import NavbarList from "./NavbarList";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
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
  return (
    <header
      className={`fixed top-0 left-0 z-[9999] h-[105px] w-full transition duration-500 ${
        styles && "bg-[rgba(0,0,0,0.45)]"
      }`}
    >
      <nav className="flex items-center justify-between h-full container mx-auto lg:px-[0] md:px-[20px] max-[640px]:px-[20px]">
        <Link className="text-4xl font-bold text-white cursor-pointer" href="/">
        <img src="Images/logo/EG_400x160-white.png" alt="LOGO" className="w-[76px] h-[60px]" />
        </Link>
        {/* <div>
          <RxHamburgerMenu
            onClick={() => setOpenNav(true)}
            className="text-white text-4xl cursor-pointer"
          />
        </div> */}
      </nav>
      {/* <NavbarList setOpenNav={setOpenNav} openNav={openNav} /> */}
    </header>
  );
};

export default Header;
