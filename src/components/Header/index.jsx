import * as S from "./Header.styles";
import CartIcon from "../Carticon";
import SearchBar from "../SearchBar";
import useProductStore from "../../store/useProductStore";

const Header = () => {
  const { searchTerm, setSearchTerm } = useProductStore((state) => state);
  const clearSearch = () => setSearchTerm("");
  return (
    <S.HeaderContainer>
      <SearchBar />
      {searchTerm && <button onClick={clearSearch}>Clear Search</button>}
      <S.Nav>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/contact">Contact</S.NavLink>
        <CartIcon itemCount={5} />
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
