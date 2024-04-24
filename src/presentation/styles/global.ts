'use client';

import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  ${({ theme }) => css`
    body {
      color: ${theme.colors.grey[100]};
      background: ${theme.colors.background[400]};
      font: 400 ${theme.fonts.sizes.base} ${theme.fonts.family.body},
        sans-serif;
    }

    input,
    textarea,
    select,
    button {
      font-size: ${theme.fonts.sizes.base};
      font-family: inherit;
    }

    button {
      cursor: pointer;
      border: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.fonts.family.heading};
    }

    img {
      max-width: 100%;
    }

    ul,
    ol {
      list-style: none;
      list-style-type: none;
    }
  `}
`;
