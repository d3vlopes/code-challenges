import { generateID } from '@/utils/generate-id';

import { ChallengeCardProps } from '.';

export const challengeMock: ChallengeCardProps = {
	title: 'Challenge 001',
	technologies: [
		{
			id: generateID(),
			name: 'React',
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjpvha0ae708lu2ktorlc5',
				alt: 'Logo do React',
			},
		},
		{
			id: generateID(),
			name: 'Typescript',
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkgpz09qb08kidk0v60d9',
				alt: 'Logo do Typescript',
			},
		},
		{
			id: generateID(),
			name: 'SASS',
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkgmm09q208ki1z4iq77m',
				alt: 'Logo do SASS',
			},
		},
		{
			id: generateID(),
			name: 'Storybook',
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkgmd0aad08lut0xe5li0',
				alt: 'Logo do Storybook',
			},
		},
		{
			id: generateID(),
			name: 'React Query',
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkfwm09w307lo9vg01928',
				alt: 'Logo do React Query',
			},
		},
		{
			id: generateID(),
			name: 'Framer Motion',
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkgmy09wi07loutn21te6',
				alt: 'Logo do Framer Motion',
			},
		},
		{
			id: generateID(),
			name: 'React Testing Library',
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkg5209wd07lo56k9w62e',
				alt: 'Logo do React Testing Library',
			},
		},
		{
			id: generateID(),
			name: 'Jest',
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfk1a6k09y108kinjpnl5yq',
				alt: 'Logo do Jest',
			},
		},
	],
	description:
		'Nesse desafio você deve construir uma aplicação que permita que os usuários possam encontrar novas pessoas, utilizando ferramentas modernas e boas práticas para criar um código de alta qualidade e escalabilidade.',
	buttonText: 'Visualizar detalhes',
	videoID: 'K4TOrB7at0Y',
	buttonModal: {
		text: 'Começar desafio',
		href: 'https://pay.hotmart.com/C92887324Y?checkoutMode=10',
	},
};
