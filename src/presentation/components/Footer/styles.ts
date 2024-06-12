'use client';

import styled, { css, DefaultTheme } from 'styled-components';

import { TrackModel } from '@/domain/models/_barrel';

import { Container } from '@/presentation/styles/container';
import { media } from '@/presentation/styles/helpers/media';

type TrackProps = Pick<TrackModel, 'isReleased'>;

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.background[500]};
  `}
`;

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;

  ${media.md`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.heading};
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.colors.text.white};
    font-weight: 700;
    margin-bottom: 0.8rem;
  `}
`;

export const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const trackModifiers = {
	isReleased: (theme: DefaultTheme) => css`
    cursor: pointer;
    color: ${theme.colors.grey[300]};
    
    
    &:hover {
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `,
	isNotReleased: (theme: DefaultTheme) => css`
    color: ${theme.colors.grey[400]};
    cursor: not-allowed;
  `,
};

export const Track = styled.div<TrackProps>`
  ${({ theme, isReleased }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    width: 100%;

    h3 {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.base};
      transition: all ${theme.transitions.default};
      font-weight: 400;
      width: 16.7rem;

      ${
				isReleased
					? trackModifiers.isReleased(theme)
					: trackModifiers.isNotReleased(theme)
			};
    }
  `}
`;

export const HelpNavigationWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    & > li a {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.base};
      color: ${theme.colors.grey[300]};

      &:hover {
        background: ${theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  `}
`;

export const CopyrightWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.background[400]};
    padding: 1.6rem 0;
    
    span {
     font-family: ${theme.fonts.family.body};
     font-size: ${theme.fonts.sizes.sm};
     color: ${theme.colors.text.white}
    }
  `}
`;
