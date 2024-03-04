import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const StarIcon = styled(FaStar)`
  color: #ffc107;
  margin-right: 4px;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #333333;
  margin-right: 0.5rem;
`;

export const ProductPrice = styled.div`
  margin-top: 1rem;
  font-weight: bold;
`;

export const DiscountPercentage = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffc107;
  color: black;
  padding: 0.25rem 0.5rem;
  border-radius: 0 0 0 5px;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

export const ProductDescription = styled.p`
  color: #333333;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
