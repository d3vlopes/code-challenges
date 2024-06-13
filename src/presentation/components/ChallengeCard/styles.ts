'use client';

import styled, { css } from 'styled-components';

import { Wrapper as ButtonStyles } from '@/presentation/components/Button/styles';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 0 0 4px 4px;
    background-color: ${theme.colors.background['200']};

    ${ButtonStyles} {
      padding: 0 0.8rem 2.4rem;

      & > button {
        width: 100%;
        margin: 0 auto;
        height: 6rem;
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.background['100']};
    height: 17.5rem;
    padding: 3.2rem 1.6rem;
    border-radius: 4px 4px 0 0;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.heading};
    font-size: ${theme.fonts.sizes['6xl']};
    font-weight: 700;
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.4rem;
  `}
`;

export const TechnologyWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;

    h4 {
      font-family: ${theme.fonts.family.heading};
      font-size: ${theme.fonts.sizes.sm};
      font-weight: 700;
      color: ${theme.colors.text.white};

      ${media.md`
        font-size: ${theme.fonts.sizes.base};
      `}
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin: 1.2rem 0.8rem 2.4rem 0.8rem;
    font-size: ${theme.fonts.sizes.sm};
    font-family: ${theme.fonts.family.body};
    text-align: center;
    line-height: 150%;

    ${media.sm`
      font-size: ${theme.fonts.sizes.base};
    `}

    ${media.md`
      font-size: ${theme.fonts.sizes.lg};
    `}
  `}
`;

export const TechnologyIconsWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
`;
