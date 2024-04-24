'use client';

import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${theme.fonts.sizes['8xl']};
  `}
`;

export const Highlight = styled.span`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-family: ${theme.fonts.family.highlight};
  `}
`;
