'use client';

import styled, { css } from 'styled-components';

import { motion } from '@/infra/libs/animations/framer-motion';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.6rem;
  width: 100%;
  align-content: center;

  ${media.md`
    flex-direction: row;
    justify-content: center;
    gap: 3.2rem;
  `}

  ${media.xl`
    gap: 4rem;
  `}
`;

export const CardWrapper = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.background[100]};
    background-color: ${theme.colors.background[300]};
    padding: 2.4rem 0;
    border-radius: 4px;
    width: 34.3rem;
    
    img {
      margin: 0 auto;
    }

    ${media.lg`
      &:hover {
        box-shadow: 0px 4px 4px 0px rgba(37, 34, 33, 0.4);
        transition: all ${theme.transitions.default};
      }
    `}

    ${media.xl`
      width: 40rem;
    `}
  `}
`;

export const CardTitle = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.heading};
    font-size: ${theme.fonts.sizes['3xl']};
    font-weight: 700;
    color: ${theme.colors.text.white};
    text-align: center;
    margin: 2.4rem 0;
  `}
`;

export const CardDescriptionWrapper = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.background[100]};
    border-bottom: 1px solid ${theme.colors.background[100]};
    padding: 0.8rem 1.2rem;
    
    p {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.lg};
      color: ${theme.colors.grey[300]};
      line-height: 150%;
      text-align: center;
      max-width: 32.6rem;

      ${media.lg`
        max-width: 35.6rem;
      `}
    }
  `}
`;

export const FeaturesWrapper = styled.div`
  ${({ theme }) => css`
    padding: 1.6rem 1.6rem 2.4rem 0.8rem;


    h4 {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.lg};
      color: ${theme.colors.text.white};
      margin-left: 0.8rem;
      max-width: max-content;
    }
  `}
`;

export const FeaturesItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.2rem;
  align-items: start;
`;

export const FeatureItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    span {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.base};
      color: ${theme.colors.text.white};
      font-weight: 700;
      max-width: 26.6rem;
    }
  `}
`;
