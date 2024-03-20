import styled from "styled-components";

export const HeroImage = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  height: 35vh;
  width: 100%;
  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

export const ProductCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
  margin-bottom: 10rem;
`;
