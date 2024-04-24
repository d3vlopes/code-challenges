'use client';

import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const Highlight = styled.span`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-family: ${theme.fonts.family.highlight};
  `}
`;
