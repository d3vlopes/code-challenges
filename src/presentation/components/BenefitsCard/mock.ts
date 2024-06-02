import { generateID } from '@/utils/generate-id';

import { BenefitsCardProps } from '.';

export const benefitsCardMock: BenefitsCardProps = {
	items: [
		{
			id: generateID(),
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwwtdwil1dtd07lt7en7xt3s',
				alt: 'Logo do Github',
				title: 'Github',
			},
			name: 'Projetos legado',
			description:
				'Tenha acesso a projetos legado desenvolvido por outras pessoas e ganhe essa experiência essencial para quem quer entrar no mercado.',
			featureHeading: 'Com esses projetos, você vai:',
			features: [
				{
					id: generateID(),
					text: 'Aprender a ler código escrito por outra pessoa',
				},
				{
					id: generateID(),
					text: 'Adicionar novas funcionalidades em um projeto existente',
				},
				{
					id: generateID(),
					text: 'Fazer alterações no código para melhorar sua qualidade',
				},
				{
					id: generateID(),
					text: 'Se adaptar a arquitetura e as ferramentas do projeto',
				},
			],
		},
		{
			id: generateID(),
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwwtdwio1e0p07ly481d29hm',
				alt: 'Logo do Discord',
				title: 'Discord',
			},
			name: 'Comunidade exclusiva',
			description:
				'Uma comunidade no Discord para conhecer outros devs que estão no mesmo caminho que você, trocar conhecimentos e tirar dúvidas.',
			featureHeading: 'Na comunidade, você pode:',
			features: [
				{
					id: generateID(),
					text: 'Fazer networking',
				},
				{
					id: generateID(),
					text: 'Divulgar seus projetos',
				},
				{
					id: generateID(),
					text: 'Receber code review',
				},
				{
					id: generateID(),
					text: 'Tirar dúvidas',
				},
			],
		},
		{
			id: generateID(),
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwwtdwi71dsy06m1p61ku08j',
				alt: 'Logo do Notion',
				title: 'Notion',
			},
			name: 'Lista de recursos',
			description:
				'Uma lista enorme de recursos no Notion para te ajudar a evoluir ainda mais e se preparar para entrar no mercado preparado.',
			featureHeading: 'Você vai ter acesso:',
			features: [
				{
					id: generateID(),
					text: 'Cheatsheets de diversas ferramentas',
				},
				{
					id: generateID(),
					text: 'Modelo de currículo',
				},
				{
					id: generateID(),
					text: 'Modelo de carta de apresentação',
				},
				{
					id: generateID(),
					text: 'Dicas para se sair bem em entrevistas',
				},
			],
		},
	],
};
