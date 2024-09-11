'use client';

import styled, { DefaultTheme, css } from 'styled-components';

import { BadgeProps } from '.';

type WrapperProps = Pick<BadgeProps, 'size' | 'color'>;

const wrapperModifiers = {
	small: () => css`
    width: 6.2rem;
    height: 2rem;

    span {
      font-size: 1.1rem;
    }
  `,

	medium: (theme: DefaultTheme) => css`
    width: 7.4rem;
    height: 2.5rem;

    span {
      font-size: ${theme.fonts.sizes.sm};
    }
  `,

	red: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.support.red};
  `,

	green: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.support.green[400]};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size, color }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    z-index: ${theme.layers.base};

    span {
      font-family: ${theme.fonts.family.body};
      color: ${theme.colors.text.white};
      font-weight: 600;
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!color && wrapperModifiers[color](theme)};
  `}
`;
