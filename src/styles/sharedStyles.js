import styled, { keyframes } from "styled-components";
import { FaStar } from "react-icons/fa";

export const StarIcon = styled(FaStar)`
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 4px;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.dark};
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
  background-color: ${({ theme }) => theme.colors.accent};
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
  color: ${({ theme }) => theme.colors.dark};
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SuccessMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 25px;
  border-radius: 5px;
  animation: ${fadeIn} 0.5s ease-in-out;
  z-index: 1000;
`;
