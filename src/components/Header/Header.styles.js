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
`;

export const DesktopLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const MobileNav = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.h1`
  display: inline-block;
`;

export const BuyText = styled.span`
  color: black;
`;

export const SphereText = styled.span`
  color: #00796b;
  font-weight: bold;
`;
