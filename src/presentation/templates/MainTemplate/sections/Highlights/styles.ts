'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.section`
  margin-top: 8rem;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes['5xl']};
    font-family: ${theme.fonts.family.heading};
    font-weight: 700;
    color: ${theme.colors.text.white};
    text-align: center;
    margin-bottom: 4rem;

    ${media.md`
      font-size: ${theme.fonts.sizes['6xl']};
    `}
  `}
`;
