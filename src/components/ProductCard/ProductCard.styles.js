import styled from "styled-components";

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
