import { RxHamburgerMenu } from "react-icons/rx";
import { CgMenuLeft } from "react-icons/cg";
import { useEffect, useState } from "react";
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
      className={`fixed top-0 left-0 z-[9999] h-[90px] w-full ml-[12%] transition duration-500 max-[640px]:ml-0 max-[640px]:h-[68px]
    ${styles && "bg-[rgba(0,0,0,0.45)]"}`}
    >
      <div className="flex items-center justify-start h-full container">
        <nav className="flex items-center justify-start h-full container mx-auto lg:px-[0] md:px-[20px] max-[640px]:px-0 max-[640px]:justify-center">
          {/* <NavbarList setOpenNav={setOpenNav} openNav={openNav} /> */}
          <Link
            className="text-4xl font-bold text-white cursor-pointer mx-12"
            href="/"
          >
            <img
              src="Images/logo/EG-LOGO.png"
              alt="LOGO"
              className="w-[155px] h-[48px] max-[640px]:w-[100px] max-[640px]:h-[31px]"
            />
          </Link>
          <div className="flex max-[640px]:hidden">
            <Link href="/About">
              <div
                className="text-white text-xl px-4 py-2"
                style={{ fontFamily: "TitleFont" }}
              >
                About
              </div>
            </Link>
            <Link href="/News">
              <div
                className="text-white text-xl px-4 py-2"
                style={{ fontFamily: "TitleFont" }}
              >
                News
              </div>
            </Link>
            <Link href="Media">
              <div
                className="text-white text-xl px-4 py-2"
                style={{ fontFamily: "TitleFont" }}
              >
                Media
              </div>
            </Link>
            <Link href="/Collaborate">
              <div
                className="text-white text-xl px-4 py-2"
                style={{ fontFamily: "TitleFont" }}
              >
                Collaborate
              </div>
            </Link>
            <Link href="/Service">
              <div
                className="text-white text-xl px-4 py-2"
                style={{ fontFamily: "TitleFont" }}
              >
                Service
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
