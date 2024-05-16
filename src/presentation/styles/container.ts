'use client';

import styled from 'styled-components';
import { media } from './helpers/media';

export const Container = styled.div`
  max-width: 128rem;
  padding: 0 1.6rem;

  ${media.xl`
    padding: 0;
  `}
`;
