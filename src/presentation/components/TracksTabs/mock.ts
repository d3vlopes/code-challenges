import { generateID } from '@/utils/generate-id';

import { TracksTabProps } from '.';

import { challengeMock } from '../ChallengeCard/mock';
import { headerMock } from '../Header/mock';

export const tracksMock: TracksTabProps = {
	tracks: [
		{
			id: generateID(),
			isNews: false,
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
							name: 'React Testing Library',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkg5209wd07lo56k9w62e',
								alt: 'Logo do React Testing Library',
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
							name: 'Node.js',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcnglb60aqh07lvvn8vpuwo',
								alt: 'Logo do Node.js',
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
			],
		},
		{
			id: generateID(),
			isNews: true,
			isReleased: true,
			name: 'Backend Developer',
			href: headerMock.navigationLinks[0].href,
			challenges: [
				{
					id: generateID(),
					title: 'Challenge 001',
					description:
						'Nesse desafio, você deve construir um sistema de gerenciamento de estoque de produtos, utilizando Layered Architecture. Você deve desenvolver uma aplicação robusta, bem organizada e que seja altamente escalável.',
					technologies: [
						{
							id: generateID(),
							name: 'Node.js',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcnglb60aqh07lvvn8vpuwo',
								alt: 'Logo do Node.js',
							},
						},
						{
							id: generateID(),
							name: 'Typescript',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiq9g0dme07kn9yu7a4js',
								alt: 'Logo do Typescript',
							},
						},
						{
							id: generateID(),
							name: 'Express',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiqzx0dmy07kn931ik4qy',
								alt: 'Logo do Express',
							},
						},
						{
							id: generateID(),
							name: 'Docker',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiqrz0dpe07ls83pgdc9q',
								alt: 'Logo do Docker',
							},
						},
						{
							id: generateID(),
							name: 'Prisma',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiqp30dzv07lt6gp4h32b',
								alt: 'Logo do Prisma',
							},
						},
						{
							id: generateID(),
							name: 'PostgreSQL',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfipkv0dm407kn4hsif3a6',
								alt: 'Logo do PostgreSQL',
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
						{
							id: generateID(),
							name: 'Swagger',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfipkr0dz407lt9hvu0xbq',
								alt: 'Logo do Swagger',
							},
						},
					],
				},
				{
					id: generateID(),
					title: 'Challenge 002',
					description:
						'Nesse desafio, você vai desenvolver um sistema de enquete em realtime, utilizando Arquitetura Limpa e conceitos de DDD. Você deve desenvolver uma aplicação de alta qualidade, utilizando princípios SOLID, design patterns e TDD.',
					technologies: [
						{
							id: generateID(),
							name: 'Node.js',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcnglb60aqh07lvvn8vpuwo',
								alt: 'Logo do Node.js',
							},
						},
						{
							id: generateID(),
							name: 'Fastify',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfipnc0dz907ltiszidm37',
								alt: 'Logo do Fastify',
							},
						},
						{
							id: generateID(),
							name: 'MongoDB',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfipnq0dm907kn8fauej9q',
								alt: 'Logo do MongoDB',
							},
						},
						{
							id: generateID(),
							name: 'Socket.IO',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiqa20doz07lshs9w6q07',
								alt: 'Logo do Socket.IO',
							},
						},
						{
							id: generateID(),
							name: 'Redis',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiq990dou07lse30p4c27',
								alt: 'Logo do Redis',
							},
						},
						{
							id: generateID(),
							name: 'JWT',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiqdp0dp407lsupu6kxfs',
								alt: 'Logo do JWT',
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
							name: 'Zod',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkg5x0aa808lu29h61xhc',
								alt: 'Logo do Zod',
							},
						},
					],
				},
				{
					id: generateID(),
					title: 'Challenge 003',
					description:
						'Nesse desafio, você deve desenvolver uma API para lidar com requisitos complexos de um ecommerce. Para esse desafio, você vai utilizar o framework Nest, junto com GraphQL para criar uma aplicação robusta para lidar com novos requisitos.',
					technologies: [
						{
							id: generateID(),
							name: 'Node.js',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxcnglb60aqh07lvvn8vpuwo',
								alt: 'Logo do Node.js',
							},
						},
						{
							id: generateID(),
							name: 'NestJS',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfipnn0don07ls3tx7fmls',
								alt: 'Logo do NestJS',
							},
						},
						{
							id: generateID(),
							name: 'TypeORM',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfipzc0dzf07ltsryay9bd',
								alt: 'Logo do TypeORM',
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
							name: 'Apollo',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwfjkh1i09qg08ki0pmn4lzw',
								alt: 'Logo do Apollo',
							},
						},
						{
							id: generateID(),
							name: 'MySQL',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiq9s0dzl07lt10omz1in',
								alt: 'Logo do MySQL',
							},
						},
						{
							id: generateID(),
							name: 'Lefthook',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfipk90doi07lsan0wvt8k',
								alt: 'Logo do Lefthook',
							},
						},
						{
							id: generateID(),
							name: 'Docker',
							icon: {
								src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm0yfiqrz0dpe07ls83pgdc9q',
								alt: 'Logo do Docker',
							},
						},
					],
				},
			],
		},
		{
			id: generateID(),
			isReleased: false,
			name: 'Mobile Developer',
		},
		{
			id: generateID(),
			isReleased: false,
			name: 'Web Designer',
		},
	],
};
