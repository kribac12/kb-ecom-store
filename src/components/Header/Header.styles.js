import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.link}; // Use theme color instead of hardcoding
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.linkHover}; // Use theme color for hover state
  }
`;
