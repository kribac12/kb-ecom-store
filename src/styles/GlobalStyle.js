import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.link};
    text-decoration: inherit;
    &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
    }
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    cursor: pointer;
    transition: border-color 0.25s;
    &:hover {
      border-color: ${({ theme }) => theme.colors.buttonHoverBorder};
    }
    &:focus, &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
`;

export default GlobalStyle;
