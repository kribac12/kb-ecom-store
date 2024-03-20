import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./Layout.styles";

function Layout() {
  return (
    <>
      <Header />
      <S.MainContainer as="main">
        <Outlet />
      </S.MainContainer>
      <Footer />
    </>
  );
}

export default Layout;
