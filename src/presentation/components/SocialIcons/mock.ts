import { generateID } from '@/utils/generate-id';

import { SocialIconsProps } from '.';

export const socialIconsMock: SocialIconsProps = {
	items: [
		{
			id: generateID(),
			name: 'Linkedin',
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvfvldnh0soe07khnwtt8f1p',
			alt: 'Logo do Linkedin',
			href: 'https://www.linkedin.com/company/code-challenges',
		},
		{
			id: generateID(),
			name: 'Github',
			src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clvfvldj20sm608lqrmcvr8i1',
			alt: 'Logo do Github',
			href: 'https://github.com/code-challenges-org',
		},
	],
};
