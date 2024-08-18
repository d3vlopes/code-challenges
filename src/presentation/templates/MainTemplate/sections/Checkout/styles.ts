'use client';

import styled, { css } from 'styled-components';

import { motion } from '@/infra/libs/animations/framer-motion';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    border-top: 2px solid ${theme.colors.background[100]};
    border-bottom: 2px solid ${theme.colors.background[100]};
    padding-top: 3.2rem;
    background: ${theme.colors.background[300]};

    ${media.md`
      margin-top: 12rem;
    `}
  `}
`;

export const Badge = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32.1rem;
    border-radius: 999px;
    padding: 1.6rem 0;
    background: ${theme.colors.background[500]};

    span {
      font-family: ${theme.fonts.family.body};
      font-size: ${theme.fonts.sizes.base};
      font-weight: 700;
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;

export const Heading = styled(motion.h2)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes['7xl']};
    font-family: ${theme.fonts.family.heading};
    color: ${theme.colors.text.white};
    font-weight: 700;
    margin-top: 2.4rem;
    text-align: center;
    max-width: 34.3rem;

    ${media.md`
      max-width: 38.1rem;
    `}
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
  margin-top: 2rem;
  align-items: start;
`;

export const FeatureItem = styled(motion.div)`
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

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
`;

export const OriginalPrice = styled.strong`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.body};
    font-size: ${theme.fonts.sizes['6xl']};
    font-weight: 700;
    color: ${theme.colors.support.red};
    text-decoration: line-through;

    ${media.md`
      font-size: ${theme.fonts.sizes['8xl']};
    `}
  `}
`;

export const SalePrice = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.body};
    font-size: ${theme.fonts.sizes['6xl']};
    color: ${theme.colors.support.green['400']};
    
    strong {
      font-size: 3.8rem;
      font-weight: 700;

      ${media.md`
        font-size: ${theme.fonts.sizes['9xl']};
      `}
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 4rem;
    
    a {
      font-size: ${theme.fonts.sizes['5xl']};
      text-transform: uppercase;
      padding: 1.6rem 0;
      width: 31rem;
      height: 6.6rem;

      ${media.md`
        width: 34.9rem;
      `}
    }
    

    span {
      font-size: ${theme.fonts.sizes.lg};
      font-family: ${theme.fonts.family.body};
      color: ${theme.colors.support.green};
      font-weight: 700;
    }
  `}
`;

export const PaymentMethodsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    span {
      font-size: ${theme.fonts.sizes.lg};
      font-family: ${theme.fonts.family.body};
      color: ${theme.colors.grey[100]};
      font-weight: 500;
    }
  `}
`;

export const PlanHighlight = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.background[500]};
    padding: 6rem 1.6rem;
    width: 100%;
    margin-top: 4rem;

    h3 {
      font-size: ${theme.fonts.sizes['6xl']};
      font-family: ${theme.fonts.family.heading};
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      background: linear-gradient(230deg, #FE6B0C 2.16%, #FE012F 87.97%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      ${media.md`
        font-size: ${theme.fonts.sizes['8xl']};
      `}
    }

    p {
      font-size: ${theme.fonts.sizes.xl};
      font-family: ${theme.fonts.family.body};
      text-align: center;
      margin-top: 1.6rem;
      color: ${theme.colors.grey['200']};
      max-width: 112rem;
      line-height: 150%;

      ${media.md`
        font-size: ${theme.fonts.sizes['2xl']};
      `}
    }
  `}
`;
