import { generateID } from '@/utils/generate-id';

import { HeroProps } from '.';

export const heroMock: HeroProps = {
	titleHTML:
		'<h1>Ganhe experiência como desenvolvedor criando <strong>projetos do mundo real</strong></h1>',
	description:
		'Com as trilhas do Code Challenges, você ganha a experiência necessária para entrar no mercado preparado para os desafios que vai encontrar.',
	button: {
		text: 'Explorar trilhas',
		href: '#trilhas',
	},
	technologiesIcons: [
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvn86gft0frd07kgcq0meopa',
			alt: 'React',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvn86gge0frh07kgclgkzet2',
			alt: 'Figma',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvn86gfx0fl108lzx4z759nq',
			alt: 'Jest',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvn86gf60fkx08lzfw3k84nm',
			alt: 'Tailwind',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvn86gfa0frk07lqdoioqkfi',
			alt: 'GraphQL',
		},
		{
			id: generateID(),
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvn86gfd0fr907kglv3l6l02',
			alt: 'Redux',
		},
	],
};
