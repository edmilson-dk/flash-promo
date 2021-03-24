import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #00d862;
    --dark: #000f13;
    --dark-light: #03181d;
    --gray: #485a5f;
    --yellow: #eab900;
    --white: #f1f1f1;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  html {
    font-size: 75%;
    font-family: 'Space Mono', monospace;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;