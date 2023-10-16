import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";
import Header from "../components/Header/Header";
import NavbarMenuList from "../components/Header/NavbarMenuList";
import Wrapper from "../components/Wrapper/Wrapper";
import Service from "./components/Service";

const Index = () => {
  return (
    <Wrapper commonPadding>
      <Header fill />
      <Service />
      <Footer />
    </Wrapper>
  );
};

export default Index;
