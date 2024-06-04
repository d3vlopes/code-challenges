'use client';

import styled from 'styled-components';

import { media } from './helpers/media';

export const Container = styled.div`
  max-width: 128rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(32px / 2);
  padding-right: calc(32px / 2);

  ${media.xl`
    padding-left: initial;
    padding-right: initial;
  `}
`;
