import styled from "styled-components";
import { ProductPrice, ProductTitle } from "../../styles/sharedStylesProducts";

export const CartContainer = styled.div`
  margin: auto;
  padding: 20px 0px;
  display: block;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
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
  font-size: 1rem;
`;

export const CartItemPrice = styled(ProductPrice)`
  font-size: 0.875rem;
`;

export const TotalPrice = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const CheckoutButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
  width: fit-content;
`;
