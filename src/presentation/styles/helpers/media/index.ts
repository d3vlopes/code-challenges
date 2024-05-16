import { css } from 'styled-components';
import type { Interpolation } from 'styled-components';
import type { Styles } from 'styled-components/dist/types';

import { Breakpoints, Media } from './types';

import { sizes } from './sizes';

export const media: Media = Object.keys(sizes).reduce<Media>((acc, label) => {
	acc[label as Breakpoints] = (
		literals: Styles<object>,
		...args: Interpolation<object>[]
	) => css`
      @media (min-width: ${sizes[label as Breakpoints]}px) {
        ${css(literals, ...args)};
      }
    `;
	return acc;
}, {} as Media);
