'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

import { Wrapper as ButtonStyles } from '@/presentation/components/Button/styles';

export const Wrapper = styled.section`
  position: relative;
  margin-top: 8rem;

  ${media.md`
    margin-top: 12rem;
  `}
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
      margin-bottom: 1.6rem;
    `}
  `}
`;

export const CTAWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 2.4rem 1.6rem;
    border-top: 1px solid ${theme.colors.background[100]};
    border-bottom: 1px solid ${theme.colors.background[100]};
    background-color: ${theme.colors.background[300]};

    ${ButtonStyles} {
      margin: 2.2rem auto 0;
      max-width: 34.3rem;
      
      & > a {
        font-size: ${theme.fonts.sizes['2xl']};
        height: 8rem;
      }
    }

    ${media.md`
      padding: 1.8rem 0 2.4rem 0;

      ${ButtonStyles} {
        margin: 1.6rem auto 0;
        
        & > a {
          height: 7rem;
        }
      }
    `}
  `}
`;

export const CTAText = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.lg};
    font-family: ${theme.fonts.family.body};
    text-align: center;
    max-width: 33.2rem;
    margin: 0 auto;

    p {
      color: ${theme.colors.text.white};

      strong, span {
        background: linear-gradient(0deg, #FE012F 5%, #FE6B0C 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    ${media.md`
      font-size: ${theme.fonts.sizes.xl};
    `}
  `}
`;
