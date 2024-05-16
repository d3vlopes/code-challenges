import type { Interpolation } from 'styled-components';
import type { Styles } from 'styled-components/dist/types';

export type Breakpoints = 'sm' | 'md' | 'lg' | 'xl';

export type Media = {
	[key in Breakpoints]: (
		literals: Styles<object>,
		...args: Interpolation<object>[]
	) => Interpolation<object>;
};
