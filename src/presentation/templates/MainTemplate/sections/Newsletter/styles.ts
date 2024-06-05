'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 8rem;

  ${media.md`
    margin-top: 12rem;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 34.3rem;

    ${media.md`
      max-width: 54rem;
    `}

    h2 {
      font-family: ${theme.fonts.family.heading};
      font-size: ${theme.fonts.sizes['6xl']};
      color: ${theme.colors.text.white};
      font-weight: 700;
      text-align: center;

      ${media.md`
        font-size: ${theme.fonts.sizes['7xl']};
      `}
    }

    strong {
      font-weight: 700;
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.body};
    font-size: ${theme.fonts.sizes['3xl']};
    color: ${theme.colors.grey[100]};
    text-align: center;
    max-width: 34.3rem;
    margin: 0 auto;

    ${media.md`
      max-width: 47rem;
    `}
  `}
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: calc(2.4rem - 1.6rem);
  
  input, select, button {
    width: 34.3rem;

    ${media.md`
      width: 35.2rem;
    `}
  }

  button {
    height: 6.4rem;
  } 
`;
