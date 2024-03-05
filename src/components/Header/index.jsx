import { useState } from "react";
import * as S from "./Header.styles";
import CartIcon from "../Carticon";
import SearchBar from "../SearchBar";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProductStore from "../../store/useProductStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { searchTerm, setSearchTerm } = useProductStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  return (
    <S.HeaderContainer>
      <S.DesktopLayout>
        <S.MenuButton onClick={toggleMenu}>
          <FaBars />
        </S.MenuButton>
        <S.Logo>
          <Link to="/">
            <S.BuyText>Buy</S.BuyText>
            <S.SphereText>Sphere</S.SphereText>
          </Link>
        </S.Logo>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <S.Nav isMenuOpen={isMenuOpen}>
          <S.NavLink to="/">Home</S.NavLink>
          <S.NavLink to="/contact">Contact</S.NavLink>
        </S.Nav>
        <CartIcon itemCount={5} />
      </S.DesktopLayout>
      {isMenuOpen && (
        <S.MobileNav>
          <S.NavLink to="/">Home</S.NavLink>
          <S.NavLink to="/contact">Contact</S.NavLink>
        </S.MobileNav>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
