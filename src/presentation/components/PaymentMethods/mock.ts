import { generateID } from '@/utils/generate-id';

import { PaymentMethodsProps } from '.';

export const paymentMethodsMock: PaymentMethodsProps = {
	items: [
		{
			id: generateID(),
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clx0lncdt00s807ltypib5o2v',
				alt: 'Ícone de um cartão de crédito',
				title: 'Cartão',
			},
			name: 'Cartão',
		},
		{
			id: generateID(),
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clx0lncde00sc08kid3s81t67',
				alt: 'Ícone do Pix',
				title: 'Pix',
			},
			name: 'Pix',
		},
		{
			id: generateID(),
			icon: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clx0lncd700s808kir89c9gvx',
				alt: 'Ícone do boleto',
				title: 'Boleto',
			},
			name: 'Boleto',
		},
	],
};
