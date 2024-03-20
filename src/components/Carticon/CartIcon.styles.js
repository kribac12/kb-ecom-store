import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartIconContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.alert};
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.75rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
