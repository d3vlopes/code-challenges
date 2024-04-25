import { Interpolation } from 'styled-components';

export type Breakpoints = 'sm' | 'md' | 'lg' | 'xl';

export type Media = {
	[key in Breakpoints]: (
		literals: TemplateStringsArray,
		...args: unknown[]
	) => Interpolation<object>;
};
