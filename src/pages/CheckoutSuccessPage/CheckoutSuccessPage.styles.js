import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;
