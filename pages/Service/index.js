import FooterNew from "../components/Footer/FooterNew";
import Header from "../components/Header/Header";
import NavbarMenuList from "../components/Header/NavbarMenuList";
import Wrapper from "../components/Wrapper/Wrapper";
import Service from "./components/Service";

const Index = () => {
  return (
    <Wrapper commonPadding>
      <Header />
      <NavbarMenuList />
      <Service />
      <FooterNew />
    </Wrapper>
  );
};

export default Index;
