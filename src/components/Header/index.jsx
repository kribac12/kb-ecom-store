import * as S from "./Header.styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.NavLink to="/">Home</S.NavLink>
        <S.NavLink to="/cart">Cart</S.NavLink>
        <S.NavLink to="/contact">Contact</S.NavLink>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
