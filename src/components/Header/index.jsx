import * as S from "./Header.styles";
import CartIcon from "../Carticon";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/contact">Contact</S.NavLink>
        <CartIcon itemCount={5} />
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
