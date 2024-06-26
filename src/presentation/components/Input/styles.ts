'use client';

import styled, { css } from 'styled-components';

interface InputProps {
	isError: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Input = styled.input<InputProps>`
  ${({ theme, isError }) => css`
    width: 100%;
    height: 5.3rem;
    padding: 1.6rem;
    font-size: ${theme.fonts.sizes.base};
    font-family: ${theme.fonts.family.body};
    color: ${theme.colors.grey[100]};
    background-color: ${theme.colors.background[300]};
    border: 1px solid ${
			isError ? theme.colors.support.red : theme.colors.background[100]
		};
    border-radius: 4px;

    &::placeholder {
      color: ${theme.colors.grey[400]};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.base};
    font-family: ${theme.fonts.family.body};
    color: ${theme.colors.text.white};
  `}
`;

export const MessageError = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.sm};
    font-family: ${theme.fonts.family.body};
    color: ${theme.colors.support.red};
  `}
`;
