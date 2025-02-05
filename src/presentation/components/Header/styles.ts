'use client';

import styled, { css } from 'styled-components';

import { media } from '@/presentation/styles/helpers/media';

import { Container as ContainerBase } from '@/presentation/styles/container';

interface MenuProps {
	isOpen: boolean;
}

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    background-color: ${theme.colors.background[500]};
    z-index: ${theme.layers.alwaysOnTop};
    padding: 1.2rem 0;

    ${media.md`
      padding: 1.6rem 0;
    `}
  `} 
`;

export const Container = styled(ContainerBase)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 0;
  margin-left: 0;

  ${media.md`
    margin: 0 auto;
    gap: 4rem;
    flex-wrap: initial;
    margin-right: auto;
    margin-left: auto;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav<MenuProps>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    height: ${isOpen ? 'inherit' : 0};
    padding: 0;
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    overflow: hidden;
    transition: all 0.35s ease;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      padding: 2rem 0;

      a {
        font-family: ${theme.fonts.family.heading};
        font-size: ${theme.fonts.sizes.lg};
        font-weight: 500;
        color: ${theme.colors.text.white};
        text-rendering: optimizeLegibility;
        transition: all 0.35s ease-in-out;

        ${media.lg`
          font-size: ${theme.fonts.sizes['2xl']};
        `}

        &:hover,
        .active {
          background: ${theme.colors.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        li {
          padding: 0;
          margin: 0;
          border: none;
        }
      }
    }

    ${media.md`
      & {
        width: initial;
        opacity: initial;
        visibility: initial;
        overflow: initial;
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1.6rem;
          padding: 0;
        }
      }
    `}
  `}
`;

export const HamburgerButton = styled.button<MenuProps>`
  ${({ isOpen, theme }) => css`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    outline: none;
    background: none;
    transform: rotate(0deg);
    transition: 0.35s ease-in-out;
    display: block;
    opacity: 1;
    visibility: visible;

    span {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      border: none;
      outline: none;
      opacity: 1;
      border-radius: 4px;
      background: ${theme.colors.gradient};
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: ${isOpen ? '2rem' : 0};
        left: ${isOpen ? '50%' : 0};
        width: ${isOpen ? '0%' : 'inherit'};
      }

      &:nth-child(2) {
        top: 0.8rem;
        transform: ${isOpen ? 'rotate(45deg)' : ''};
      }

      &:nth-child(3) {
        top: 0.8rem;
        transform: ${isOpen ? 'rotate(-45deg)' : ''};
      }

      &:nth-child(4) {
        top: 1.6rem;
        width: ${isOpen ? '0%' : 'inherit'};
        left: ${isOpen ? '50%' : 0};
      }
    }

    ${media.md`
      & {
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    `}
  `}
`;

export const SocialWrapper = styled.div<MenuProps>`
  ${({ isOpen }) => css`
    display: ${isOpen ? 'flex' : 'none'};

    ${media.md`
      display: flex;
    `}
  `}
`;
