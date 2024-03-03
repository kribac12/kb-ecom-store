import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { MainContainer } from "./Layout.styles";

const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer as="main">
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
