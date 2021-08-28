// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    overflow: overlay;
    height: 100vh;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.fontColor};
  }

  #root {
    height: 100vh;
  }
  
  `;

export default GlobalStyles;
