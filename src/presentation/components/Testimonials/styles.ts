'use client';

import styled, { css } from 'styled-components';

import { Wrapper as SocialIconsStyles } from '@/presentation/components/SocialIcons/styles';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lg`
    flex-direction: row;
    justify-content: center;
    align-items: initial;
    gap: 5.3rem;
  `}
`;

export const ItemContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin-top: 2rem;

    ${media.lg`
      align-items: initial;  
    `}

    p {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.base};
      color: ${theme.colors.grey[200]};
      text-align: center;
      max-width: 34rem;
      line-height: 150%;

      ${media.md`
        font-size: ${theme.fonts.sizes.xl};
        max-width: 62rem;
      `}

      ${media.lg`
        text-align: left;        
      `}
    }

    h3 {
      font-family: ${theme.fonts.family.heading};
      font-size: ${theme.fonts.sizes['4xl']};
      color: ${theme.colors.text.white};

      ${media.md`
        font-size: ${theme.fonts.sizes['6xl']};
      `}
    }

    ${SocialIconsStyles} {
      img {
        width: 4rem;
        height: 4rem;
      }
    }
  `}
`;
