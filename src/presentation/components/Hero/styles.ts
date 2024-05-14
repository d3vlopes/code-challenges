'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

import { Wrapper as ButtonStyles } from '@/presentation/components/Button/styles';

const backgroundMobile =
	'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvn6pw7a0f6s07kggjkt486x';
const backgroundDesktop =
	'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvo2j4cl0qms08lztkfbx7bz';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10.7rem 1.2rem 3.8rem 1.2rem;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;

  ${ButtonStyles} > a {
    margin: 1.6rem 0 3.7rem;
  }

  ${media.sm`
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  `}

  ${media.md`
    background-image: url(${backgroundDesktop});
    height: 57.9rem;
    padding: 8.1rem 0 1.8rem;

    ${ButtonStyles} > a {
      width: 23.8rem;
      height: 5.9rem;
      margin-top: 2.4rem;
    }
  `}

  ${media.xl`
    background-position: center;
  `}
`;

export const TechnologiesIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 8px;
  background-color: #1A1919;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 34.3rem;

  ${media.md`
    max-width: 42.3rem;
    justify-content: space-between;
  `}
`;

export const TechnologiesTopIcon = styled(TechnologiesWrapper)`
  ${TechnologiesIconWrapper} {
    &:nth-child(1) {
      position: relative;
      top: -41px;
    }

    &:nth-child(3) {
      position: relative;
      top: -30px;
    }
  }
`;

export const Heading = styled.div`
 ${({ theme }) => css`
    margin: 1.2rem 0;

    h1 {
      font-size: ${theme.fonts.sizes['5xl']};
      font-weight: 700;
      color: ${theme.colors.text.white};
      text-align: center;
      max-width: 34.3rem;

      ${media.sm`
        font-size: ${theme.fonts.sizes['6xl']};
      `}

      ${media.md`
        font-size: ${theme.fonts.sizes['7xl']};
        max-width: 57.8rem;
      `}
    }

    strong, span, .highlight {
      background: linear-gradient(0deg, #FE012F 5%, #FE6B0C 90%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
 `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.base};
    color: ${theme.colors.text.white};
    text-align: center;
    line-height: 150%;
    max-width: 34.3rem;

    ${media.md`
      font-size: ${theme.fonts.sizes['2xl']};
      max-width: 56.6rem;
    `}
  `}
`;

export const TechnologiesBottomIcon = styled(TechnologiesWrapper)`
  ${TechnologiesIconWrapper} {
    &:nth-child(2) {
      position: relative;
      top: 22px;
    }
  }
`;
