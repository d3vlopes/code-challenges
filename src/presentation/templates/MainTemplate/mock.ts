import { benefitsCardMock } from '@/presentation/components/BenefitsCard/mock';
import { headerMock } from '@/presentation/components/Header/mock';
import { heroMock } from '@/presentation/components/Hero/mock';
import { highlightsMock } from '@/presentation/components/Highlights/mock';
import { stepsMock } from '@/presentation/components/Steps/mock';
import { tracksMock } from '@/presentation/components/TracksTabs/mock';

import { MainTemplateProps } from '.';

export const mainTemplateMock: MainTemplateProps = {
	header: headerMock,
	hero: heroMock,
	highlights: {
		content: highlightsMock.items,
	},
	tracks: {
		id: 'trilhas',
		heading: 'Trilhas',
		content: tracksMock.tracks,
		cta: {
			textHTML:
				'<p>Assinando hoje você recebe um <strong>super desconto.</strong></p>',
			button: {
				text: 'Quero assinar com desconto',
				href: '#checkout',
			},
		},
	},
	howItWorks: {
		heading: 'Como funciona',
		content: stepsMock.items,
	},
	benefits: {
		id: 'beneficios',
		heading: 'Benefícios',
		content: benefitsCardMock.items,
	},
};
