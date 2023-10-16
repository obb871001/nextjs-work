import Footer from "../components/Footer/Footer";
import FooterNew from "../components/Footer/FooterNew";
import Header from "../components/Header/Header";
import NavbarMenuList from "../components/Header/NavbarMenuList";
import Wrapper from "../components/Wrapper/Wrapper";
import About from "./components/About";

const Index = () => {
  return (
    <Wrapper commonPadding>
      <Header fill />
      <About />
      <Footer />
    </Wrapper>
  );
};

export default Index;
