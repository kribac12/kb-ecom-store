import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
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

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
  padding: 20px;

  @media (min-width: 768px) {
    padding-left: 50px;
  }
`;

export const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; // Adjusts the image's fit within its box, if necessary
`;

export const Review = styled.div`
  background-color: #f3f3f3;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
