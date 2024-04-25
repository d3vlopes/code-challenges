import { css } from 'styled-components';

import { Breakpoints, Media } from './types';

import { sizes } from './sizes';

export const media: Media = Object.keys(sizes).reduce<Media>((acc, label) => {
	acc[label as Breakpoints] = (
		literals: TemplateStringsArray,
		...args: unknown[]
	) => css`
      @media (min-width: ${sizes[label as Breakpoints]}px) {
        ${
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					css(literals, ...(args as any))
				};
      }
    `;
	return acc;
}, {} as Media);
