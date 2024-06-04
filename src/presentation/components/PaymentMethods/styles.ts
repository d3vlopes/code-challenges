'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    span {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.base};
      font-weight: 600;
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;
