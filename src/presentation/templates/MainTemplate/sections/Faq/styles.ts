'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  margin-top: 8rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: ${theme.colors.background[300]};
  border-top: 1px solid ${theme.colors.background[100]};
  border-bottom: 1px solid ${theme.colors.background[100]};

  ${media.md`
    margin-top: 12rem;
    padding-top: 12rem;
    padding-bottom: 12rem;
  `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes['5xl']};
    font-family: ${theme.fonts.family.heading};
    font-weight: 700;
    color: ${theme.colors.text.white};
    text-align: center;
    margin-bottom: 2.4rem;

    ${media.md`
      font-size: ${theme.fonts.sizes['6xl']};
    `}
  `}
`;
