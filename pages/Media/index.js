import FooterNew from "../components/Footer/FooterNew";
import Header from "../components/Header/Header";
import NavbarMenuList from "../components/Header/NavbarMenuList";
import Wrapper from "../components/Wrapper/Wrapper";
import Media from "./components/Media";
// import About from "./components/About";

const Index = () => {
  return (
    <Wrapper commonPadding>
      <Header />
      <NavbarMenuList />
      <Media />
      <FooterNew />
    </Wrapper>
  );
};

export default Index;
