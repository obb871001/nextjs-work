import FooterNew from "../components/Footer/FooterNew";
import Header from "../components/Header/Header";
import NavbarMenuList from "../components/Header/NavbarMenuList";
import Wrapper from "../components/Wrapper/Wrapper";
import Collaborate from "./components/Collaborate";

const Index = () => {
  return (
    <Wrapper commonPadding>
      <Header />
      <NavbarMenuList />
      <Collaborate />
      <FooterNew />
    </Wrapper>
  );
};

export default Index;
