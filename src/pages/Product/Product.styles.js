import styled, { keyframes } from "styled-components";

export const ProductContainer = styled.div`
  padding: 20px 0px;
  display: block;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row; // Row layout on larger screens
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  @media (min-width: 768px) {
    padding-left: 50px;
  }
`;

export const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

export const Review = styled.div`
  background-color: #f3f3f3;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AddedToCartMessage = styled.div`
  position: relative;
  top: 10px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.secondary};
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
