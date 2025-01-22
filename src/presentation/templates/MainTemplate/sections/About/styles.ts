'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

import { motion } from '@/infra/libs/animations/framer-motion';

export const Wrapper = styled(motion.section)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin-top: 8rem;
    width: 100%;
    background-color: ${theme.colors.background[200]};
    padding: 4rem 1.6rem;

    ${media.lg`
      flex-direction: row;
      justify-content: center;
      gap: 4.2rem;
    `}

    ${media.xl`
       padding: 8rem;
    `}
  `}
`;

export const LogoWrapper = styled.div`
  img {
    width: 34rem;
    height: 7.2rem;

    ${media.md`
      width: 40rem;
      height: 13.1rem;
    `}

    ${media.lg`
      width: 61.7rem;
      height: 13.1rem;
    `}
  }
`;

export const TextContent = styled.div`
  ${({ theme }) => css`
    min-width: 34.3rem;
  
  p {
      font-size: ${theme.fonts.sizes.base};
      font-family: ${theme.fonts.family.body};
      color: ${theme.colors.grey[100]};
      text-align: center;
      margin-bottom: 1.6rem;
      line-height: 150%;
    }

    ${media.md`
      width: 76rem;
    `}
    
    ${media.lg`
      max-width: 55rem;

      p {
        text-align: left;
      }
    `}

    ${media.xl`
      max-width: 61.9rem;
    `}
  `}
`;
