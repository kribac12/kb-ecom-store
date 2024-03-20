import styled from "styled-components";

export const FormTitle = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 700px;
  margin: auto;
`;

export const StyledLabel = styled.label`
  margin: 5px 10px 5px 0px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

export const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.alert};
  margin-bottom: 10px;
`;
