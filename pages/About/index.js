import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FooterNew from "../components/Footer/FooterNew";
import Header from "../components/Header/Header";
import NavbarMenuList from "../components/Header/NavbarMenuList";
import Wrapper from "../components/Wrapper/Wrapper";
import About from "./components/About";

const Index = () => {
  return (
    <Wrapper commonPadding>
      <Header />
      <NavbarMenuList />
      <About />
      <FooterNew />
    </Wrapper>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Index;
