import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const Card = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem;
  position: relative;
  width: 300px;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
`;

export const ProductDescription = styled.p`
  color: #666;
  font-size: 0.875rem;
`;

export const ProductPrice = styled.div`
  margin-top: 1rem;
  font-weight: bold;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #777;
  margin-right: 0.5rem;
`;

export const DiscountPercentage = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0 0 0 5px; /* Rounded corner on the bottom-left side */
  font-size: 0.75rem;
  font-weight: bold;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StarIcon = styled(FaStar)`
  color: #ffd700;
  margin-right: 4px;
`;

export const ViewProductButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
