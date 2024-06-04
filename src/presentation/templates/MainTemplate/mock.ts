import { benefitsCardMock } from '@/presentation/components/BenefitsCard/mock';
import { headerMock } from '@/presentation/components/Header/mock';
import { heroMock } from '@/presentation/components/Hero/mock';
import { highlightsMock } from '@/presentation/components/Highlights/mock';
import { stepsMock } from '@/presentation/components/Steps/mock';
import { tracksMock } from '@/presentation/components/TracksTabs/mock';

import { formatPrice } from '@/utils/format-price';
import { generateID } from '@/utils/generate-id';

import { paymentMethodsMock } from '@/presentation/components/PaymentMethods/mock';
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
	checkout: {
		id: 'checkout',
		badgeText: 'Promoção especial de lançamento ',
		heading: 'Assine hoje e garanta acesso a tudo isso!',
		features: [
			{
				id: generateID(),
				text: 'Desafios do mundo real',
			},
			{
				id: generateID(),
				text: 'Projetos legados',
			},
			{
				id: generateID(),
				text: 'Recursos complementares',
			},
			{
				id: generateID(),
				text: 'Mentoria',
			},
			{
				id: generateID(),
				text: 'Experiência real',
			},
			{
				id: generateID(),
				text: 'Ambiente imersivo',
			},
			{
				id: generateID(),
				text: 'Code review',
			},
			{
				id: generateID(),
				text: 'E muito mais!',
			},
		],
		originalPrice: formatPrice(129.9),
		salePrice: formatPrice(49.9),
		button: {
			text: 'Assinar agora',
			href: 'https://pay.hotmart.com/C92887324Y?checkoutMode=10',
		},
		warningText: 'Preço promocional por tempo limitado!',
		paymentMethods: paymentMethodsMock.items,
	},
};
