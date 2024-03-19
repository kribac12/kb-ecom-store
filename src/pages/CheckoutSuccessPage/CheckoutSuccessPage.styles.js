import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuccessContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const SuccessTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const SuccessMessageCheckout = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
  color: #666;
`;

export const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
`;

export const BackLinkHover = styled(BackLink)`
  &:hover {
    text-decoration: underline;
  }
`;
