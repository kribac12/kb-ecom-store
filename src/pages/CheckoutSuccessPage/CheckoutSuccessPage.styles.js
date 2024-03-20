import styled from "styled-components";

export const SuccessContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const SuccessTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const SuccessMessageCheckout = styled.p`
  font-size: 1.2rem;
  margin: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;
