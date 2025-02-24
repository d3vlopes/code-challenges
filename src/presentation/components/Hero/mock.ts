import { generateID } from '@/utils/generate-id';

import { HeroProps } from '.';

export const heroMock: HeroProps = {
	titleHTML:
		'<h1>Ganhe experiência como desenvolvedor criando <strong>projetos do mundo real</strong></h1>',
	description:
		'Com as trilhas do Code Challenges, você ganha a experiência necessária para entrar no mercado preparado para os desafios que vai encontrar.',
	buttons: {
		checkoutButton: {
			text: 'Começar agora',
			href: 'https://pay.hotmart.com/C92887324Y',
		},
		videoButton: {
			text: 'Demonstração',
		},
	},
	iframe: {
		title: 'Demonstração do Code Challenges',
		src: 'https://www.youtube.com/embed/9SOmj7Y-mLU?si=4ksapLl8hS1W0akP',
	},
	technologiesIcons: [
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm23wk87f0k6a07keuiiepp40',
			alt: 'Logo do Node.js',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm23wix7u0k4e08kk5pp0tdll',
			alt: 'Logo do Docker',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm23wix6r0k5g07keazwv56ak',
			alt: 'Logo do NestJS',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm23wix5o0k5b07kecdmqqi5w',
			alt: 'Logo do PostgreSQL',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvn86gfa0frk07lqdoioqkfi',
			alt: 'GraphQL',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm23wix710jvb0dkdl3zazgzf',
			alt: 'Logo do Redis',
		},
	],
};
