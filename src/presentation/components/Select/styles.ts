'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.background[300]};
    border: 1px solid ${theme.colors.background[100]};
    padding: 1.6rem;
    font-size: ${theme.fonts.sizes.base};
    font-family: ${theme.fonts.family.body};
    color: ${theme.colors.grey[100]};
    border-radius: 4px;
    cursor: pointer;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.base};
    font-family: ${theme.fonts.family.body};
    color: ${theme.colors.text.white};
  `}
`;
