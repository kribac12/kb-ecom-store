import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
