'use client';

import { createGlobalStyle, css } from 'styled-components';

import { media } from './helpers/media';

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *::-webkit-scrollbar {
    width: 18px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${theme.colors.background[400]};
  }

  *::-webkit-scrollbar-thumb {
    background-image: ${theme.colors.gradient};
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box; 
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

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

  .modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.layers.alwaysOnTop};
  }

  .modal-content {
    position: relative;
    width: 100%;
    min-width: 36rem;
    max-width: 104.2rem;
    min-height: 50rem;
    background: ${theme.colors.background['300']};
    border-radius: 4px;
    margin: 1.6rem;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;

    ${media.md`
      margin: 0;
      height: 70rem;
    `}
  }

  .modal-close {
    position: absolute;
    right: 12px;
    top: 17px;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    ${media.md`
      right: 40px;
    `}

    &:hover {
      filter: brightness(0.8);
    }
  }
`}
`;
