import { generateID } from '@/utils/generate-id';

import { TracksTabProps } from '.';

import { challengeMock } from '../ChallengeCard/mock';
import { headerMock } from '../Header/mock';

export const tracksMock: TracksTabProps = {
	tracks: [
		{
			id: generateID(),
			isReleased: true,
			name: 'Frontend Developer',
			href: headerMock.navigationLinks[0].href,
			challenges: [
				{
					id: generateID(),
					...challengeMock,
				},
				{
					id: generateID(),
					title: 'Challenge 002',
					description:
						'Nesse desafio você vai desenvolver um sistema de gerenciamento de estoque, fazendo integração com um backend existente, utilizando novas ferramentas e abordagens para desenvolver uma aplicação de alta qualidade do mundo real.',
					technologies: [
						{
							id: generateID(),
							name: 'Next.js',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkgn209q608kidnsvm1g3',
								alt: 'Logo do Next.js',
							},
						},
						{
							id: generateID(),
							name: 'Styled Components',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcmq7da0ahv07lvesq4jddu',
								alt: 'Logo do Styled Components',
							},
						},
						{
							id: generateID(),
							name: 'Redux',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjlvmr09qu08kilnen6pcc',
								alt: 'Logo do Redux',
							},
						},
						{
							id: generateID(),
							name: 'Zod',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkg5x0aa808lu29h61xhc',
								alt: 'Logo do Zod',
							},
						},
						{
							id: generateID(),
							name: 'Axios',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkgy209wn07loudptcd0m',
								alt: 'Logo do Axios',
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
							name: 'Vitest',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkfps09pr08ki8g10e2q5',
								alt: 'Logo do Vitest',
							},
						},
						{
							id: generateID(),
							name: 'Cypress',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcmq78w0afe07lsl5h7262h',
								alt: 'Logo do Cypress',
							},
						},
					],
				},
				{
					id: generateID(),
					title: 'Challenge 003',
					description:
						'Nesse desafio você vai criar uma aplicação para apresentar um novo produto relacionado a telefonia que vai permitir os usuários simularem o quanto eles vão pagar em cada plano. Para esse projeto você vai utilizar a arquitetura Jamstack.',
					technologies: [
						{
							id: generateID(),
							name: 'Next.js',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkgn209q608kidnsvm1g3',
								alt: 'Logo do Next.js',
							},
						},
						{
							id: generateID(),
							name: 'Tailwind CSS',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfk1aao0a4y07lol956lesd',
								alt: 'Logo do Tailwind CSS',
							},
						},
						{
							id: generateID(),
							name: 'GraphQL',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkg1g09pw08kirfxeux5x',
								alt: 'Logo do GraphQL',
							},
						},
						{
							id: generateID(),
							name: 'Radix UI',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkg0g0aa308luvij3r2s4',
								alt: 'Logo do Radix UI',
							},
						},
						{
							id: generateID(),
							name: 'Nodejs',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcnglb60aqh07lvvn8vpuwo',
								alt: 'Logo do Nodejs',
							},
						},
						{
							id: generateID(),
							name: 'Apollo',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkh1i09qg08ki0pmn4lzw',
								alt: 'Logo do Apollo',
							},
						},
						{
							id: generateID(),
							name: 'Vitest',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkfps09pr08ki8g10e2q5',
								alt: 'Logo do Vitest',
							},
						},
					],
				},
			],
		},
		{
			id: generateID(),
			isReleased: false,
			name: 'Backend Developer',
			challenges: [
				{
					id: generateID(),
					...challengeMock,
					title: 'Backend Challenge',
				},
			],
		},
		{
			id: generateID(),
			isReleased: false,
			name: 'Full Stack Developer',
		},
		{
			id: generateID(),
			isReleased: false,
			name: 'Mobile Developer',
		},
	],
};
