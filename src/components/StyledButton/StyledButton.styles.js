import styled from "styled-components";

const shouldForwardProp = (prop) => !["variant", "size", "margin"].includes(prop);

export const Button = styled.button.withConfig({ shouldForwardProp })`
  background-color: ${({ theme, variant }) => theme.buttonVariants[variant].backgroundColor};
  color: ${({ theme, variant }) => theme.buttonVariants[variant].color};
  width: ${({ theme, size }) => theme.buttonSizes[size] || "auto"};
  margin: ${({ margin }) => margin || "0"};
  padding: 12px 16px;
  &:hover {
    background-color: ${({ theme, variant }) => theme.buttonVariants[variant].hoverBackgroundColor};
    border-color: ${({ theme, variant }) => theme.buttonVariants[variant].hoverBorderColor};
  }
`;
