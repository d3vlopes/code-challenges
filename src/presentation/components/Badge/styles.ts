'use client';

import styled, { DefaultTheme, css } from 'styled-components';

import { BadgeProps } from '.';

type WrapperProps = Pick<BadgeProps, 'size'>;

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
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.support.red};
    border-radius: 4px;
    z-index: ${theme.layers.base};

    span {
      font-family: ${theme.fonts.family.body};
      color: ${theme.colors.text.white};
      font-weight: 600;
    }

    ${!!size && wrapperModifiers[size](theme)};
  `}
`;
