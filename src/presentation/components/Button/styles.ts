'use client';

import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = Pick<ButtonProps, 'variant'>;

const wrapperModifiers = {
	fill: (theme: DefaultTheme) => css`
    background: ${theme.colors.gradient};
  `,

	outline: (theme: DefaultTheme) => css`
    background: transparent;
    border: 1px solid ${theme.colors.grey[100]}; 
  `,
};

export const Wrapper = styled.div<WrapperProps>`
${({ theme, variant }) => css`
  button, a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.sizes.lg};
    font-family: ${theme.fonts.family.body};
    font-weight: 700;
    color: ${theme.colors.text.white};
    min-height: 5.3rem;
    border-radius: 8px;
    letter-spacing: 0.05px;
    transition: all ${theme.transitions.default};

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:hover:not(&:disabled) {
      filter: brightness(0.9);
    }

    ${!!variant && wrapperModifiers[variant](theme)};
  }
`}
`;
