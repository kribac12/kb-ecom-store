import * as S from "./Header.styles";
import CartIcon from "../Carticon";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import useProductStore from "../../store/useProductStore";

function Header() {
  const { searchTerm, setSearchTerm } = useProductStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  return (
    <S.HeaderContainer>
      <S.TopRow>
        <S.Logo>
          <Link to="/">
            <S.BuyText>Buy</S.BuyText>
            <S.SphereText>Sphere</S.SphereText>
          </Link>
        </S.Logo>
      </S.TopRow>
      <S.Nav as="nav">
        <S.NavList>
          <li>
            <S.NavLink to="/">Home</S.NavLink>
          </li>
          <li>
            <S.NavLink to="/contact">Contact</S.NavLink>
          </li>
        </S.NavList>
        <CartIcon itemCount={5} />
      </S.Nav>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </S.HeaderContainer>
  );
}

export default Header;
