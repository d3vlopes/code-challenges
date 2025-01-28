'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

import { AvatarProps } from '.';

type WrapperProps = Pick<AvatarProps, 'size'>;

const wrapperModifiers = {
	medium: () => css`
    width: 15rem;
    height: 15rem;

    ${media.md`
      width: 22.5rem;
      height: 22.5rem;
    `}
  `,

	large: () => css`
    width: 18.5rem;
    height: 18.5rem;

    ${media.md`
      width: 25rem;
      height: 25rem;
    `}
  `,
};

export const Wrapper = styled.div<WrapperProps>`
 ${({ size }) => css`
  position: relative;
  border-radius: 100%;
 
  ${!!size && wrapperModifiers[size]};

  img {
    border-radius: inherit;
  }
 `}
`;
