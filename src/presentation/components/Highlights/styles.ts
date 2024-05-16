'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${media.md`
    gap: 8rem;
  `}
`;

export const HighlightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  ${media.md`
    flex-direction: row;
    gap: 3.6rem;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  `}
`;

export const HighlightImageWrapper = styled.div`
  position: relative;
  min-width: 19rem;
  min-height: 15.6rem;

  ${media.md`
    width: 35.2rem;
    height: 20.4rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    h2 {
      font-size: ${theme.fonts.sizes['2xl']};
      color: ${theme.colors.text.white};
      font-weight: 700;
    }

    p {
      font-size: ${theme.fonts.sizes.base};
      color: ${theme.colors.grey[200]};
      line-height: 150%;
      max-width: 34.3rem;
      text-align: center;
    }

    ${media.md`
      align-items: start;

      h2 {
        font-size: ${theme.fonts.sizes['4xl']};
      }

      p {
        text-align: initial;
      }
    `}

    ${media.lg`
      p {
        max-width: 37.2rem;
      }
    `}
  `}
`;
