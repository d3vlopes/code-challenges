'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

interface AccordionProps {
	isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 128rem;
  overflow: hidden;

  @keyframes fadeInAndMove {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Accordion = styled.div`
  ${({ theme }) => css`
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.background[100]};
    }
  `}
`;

export const AccordionHeader = styled.header``;

const buttonModifiers = {
	execute: () => css`
    & > svg {
      transform: rotate(180deg);
    }
  `,
};

export const Button = styled.button<AccordionProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.6rem 0;
    background-color: transparent;
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
    animation: fadeIn ${theme.transitions.slow} forwards;

    h3 {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.xl};
      color: ${theme.colors.text.white};
      font-weight: 500;
      max-width: 30.9rem;
      text-align: left;
      animation: ${
				isActive
					? `fadeInAndMove ${theme.transitions.default} forwards`
					: 'none'
			};

      ${media.md`
        font-size: ${theme.fonts.sizes['2xl']};
        max-width: 70rem;
      `}
    }

    svg {
      color: ${theme.colors.support.white};
    }

    ${isActive && buttonModifiers.execute()};
  `}
`;

export const Content = styled.div<AccordionProps>`
  ${({ theme, isActive }) => css`
    display: ${isActive ? 'block' : 'none'};
    padding-bottom: 1.6rem;
    font-family: ${theme.fonts.family.body};
    font-size: ${theme.fonts.sizes.base};
    color: ${theme.colors.grey[300]};
    line-height: 150%;
    animation: fadeInAndMove ${theme.transitions.default} forwards;

    ${media.md`
      font-size: ${theme.fonts.sizes.lg};
    `}
  `}
`;
