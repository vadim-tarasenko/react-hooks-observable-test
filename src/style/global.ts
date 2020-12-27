import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body, html {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
