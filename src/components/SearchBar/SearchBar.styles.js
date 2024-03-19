import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 400px;
  order: 2;
  @media (max-width: 768px) {
    order: 4;
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-grow: 1;
    margin: 0 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;
