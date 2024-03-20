import styled from "styled-components";
import { ProductPrice, ProductTitle } from "../../styles/sharedStyles";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  margin: auto;
  padding: 20px 0px;
  display: block;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const CartItemImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 20px;
`;

export const CartItemTitle = styled(ProductTitle)`
  font-size: 1.2rem;
`;

export const CartItemPrice = styled(ProductPrice)`
  font-size: 1rem;
`;

export const TotalPrice = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-top: 20px;
`;

export const EmptyCartLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  margin-top: 10px;
`;
