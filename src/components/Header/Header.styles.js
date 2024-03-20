import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  max-width: 1200px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  order: 1;

  @media (min-width: 768px) {
    width: auto;
    order: 1;
    flex: 1;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  order: 3;
  padding: 10px 0px;
  width: 100%;

  @media (min-width: 768px) {
    order: 3;
    justify-content: flex-end;
    flex: 1;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 10px 0px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.h1`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const BuyText = styled.span`
  color: black;
`;

export const SphereText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
