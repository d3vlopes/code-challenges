'use client';

import styled, { css } from 'styled-components';

import { Wrapper as BadgeStyles } from '@/presentation/components/Badge/styles';
import { Wrapper as ChallengeCardStyles } from '@/presentation/components/ChallengeCard/styles';

import { media } from '@/presentation/styles/helpers/media';

interface TabProps {
	isActive: boolean;
}

export const TabButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.2rem;
  width: 100%;
  max-width: 67.7rem;
  justify-content: center;
  margin: 0 auto 4rem;
  align-items: end;
`;

export const TabButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;

  ${BadgeStyles} {
    position: relative;
    top: 10px;
    align-self: center;
  }
`;

export const TabButton = styled.button<TabProps>`
  ${({ theme, isActive }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${theme.colors.background[100]};
    background-color: ${theme.colors.background[300]};
    height: 5rem;
    min-width: 15.5rem;
    max-width:  15.9rem;

    span {
      background: ${isActive ? theme.colors.gradient : 'initial'};
      -webkit-background-clip: ${isActive ? 'text' : 'initial'};
      -webkit-text-fill-color:  ${isActive ? 'transparent' : 'initial'};
      color: ${isActive ? 'initial' : theme.colors.grey[400]};
      font-family: ${theme.fonts.family.body};
      font-weight: 500;
      font-size: ${theme.fonts.sizes.sm};
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;

export const TabContent = styled.div<TabProps>`
  ${({ isActive }) => css`
    display: ${isActive ? 'flex' : 'none'};
    justify-content: center;
  `}
`;

export const ChallengesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  max-height: 100%;
  overflow-y: auto;
  padding-bottom: 4rem;
  
  ${ChallengeCardStyles} {
    width: 33rem;
    max-width: 40rem;
  }
  
  @media (max-width: 375px) {
    height: 108.2rem;
  }

  ${media.md`
    gap: 3.2rem;
    height: auto;
    overflow: hidden;
    
    ${ChallengeCardStyles} {
      width: 35.2rem;
    }
  `}

  ${media.xl`
    justify-content: start;
    gap: 4rem;
    
    ${ChallengeCardStyles} {
      width: 40rem;
    }
  `}
`;
