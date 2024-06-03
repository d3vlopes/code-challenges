'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2.6rem;
    justify-content: start;
    align-items: center;
    padding: 1.6rem;
    border: 1px solid ${theme.colors.background[100]};
    background-color: ${theme.colors.background[300]};
    border-radius: 4px;
    max-width: 51rem;
    width: 100%;

    p {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.sm};
      color: ${theme.colors.text.white};
      max-width: 70%;
      line-height: 150%;

      ${media.md`
        font-size: ${theme.fonts.sizes.base};
        max-width: 36.9rem;
      `}
    }
  `}
`;

export const StepNumber = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: ${theme.colors.background[100]};

    span {
      font-family: ${theme.fonts.family.body};
      font-size: 4.2rem;
      font-weight: 700;
      color: ${theme.colors.grey[100]};
    }
  `}
`;
