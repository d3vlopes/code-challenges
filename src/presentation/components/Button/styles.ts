'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  button, a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.sizes.lg};
    font-family: ${theme.fonts.family.body};
    font-weight: 700;
    color: ${theme.colors.text.white};
    background: ${theme.colors.gradient};
    min-height: 5.3rem;
    min-width: 24.2rem;
    border-radius: 8px;
    letter-spacing: 0.05px;
    transition: all ${theme.transitions.default};

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:hover:not(&:disabled) {
      filter: brightness(0.9);
    }
  }
`}
`;
