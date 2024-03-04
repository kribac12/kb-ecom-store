import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 400px;
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;
