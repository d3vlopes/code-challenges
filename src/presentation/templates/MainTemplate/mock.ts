import { headerMock } from '@/presentation/components/Header/mock';
import { heroMock } from '@/presentation/components/Hero/mock';
import { highlightsMock } from '@/presentation/components/Highlights/mock';

import { MainTemplateProps } from '.';

export const mainTemplateMock: MainTemplateProps = {
	header: headerMock,
	hero: heroMock,
	highlights: {
		content: highlightsMock.items,
	},
};
