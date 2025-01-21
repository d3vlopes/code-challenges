import { benefitsCardMock } from '@/presentation/components/BenefitsCard/mock';
import { faqAccordionMock } from '@/presentation/components/FaqAccordion/mock';
import { footerMock } from '@/presentation/components/Footer/mock';
import { headerMock } from '@/presentation/components/Header/mock';
import { heroMock } from '@/presentation/components/Hero/mock';
import { highlightsMock } from '@/presentation/components/Highlights/mock';
import { paymentMethodsMock } from '@/presentation/components/PaymentMethods/mock';
import { stepsMock } from '@/presentation/components/Steps/mock';
import { tracksMock } from '@/presentation/components/TracksTabs/mock';

import { formatPrice } from '@/utils/format-price';
import { generateID } from '@/utils/generate-id';

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
				'<p>Assine hoje por menos de <strong>R$1,80</strong> por dia</p>',
			button: {
				text: 'Quero assinar agora',
				href: '#checkout',
			},
		},
	},
	howItWorks: {
		id: 'como-funciona',
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
		badgeText: 'Promoção especial',
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
		buttonText: 'Assinar agora',
		buttonURL: 'https://pay.hotmart.com/C92887324Y',
		warningText: 'Garantia de 7 dias para experimentar',
		paymentMethods: paymentMethodsMock.items,
		planHighlight: {
			heading: 'Cancele quando quiser',
			text: 'No Code Challenges, você tem liberdade para decidir quando encerrar sua assinatura. Com o nosso plano mensal, você não fica preso por 12 meses, aqui você só continua se realmente sentir que está evoluindo e atingindo seus objetivos como desenvolvedor.',
		},
	},
	newsletter: {
		titleHTML:
			'<h2>Quer ficar por dentro das novidades do <strong>Code Challenges?</strong></h2>',
		description:
			'Assine nossa newsletter e fique sabendo quando for disponibilizado novas trilhas, promoções e muito mais!',
		buttonText: 'Assinar',
		tracks: tracksMock.tracks,
	},
	faq: {
		id: 'duvidas',
		heading: 'Perguntas frequentes',
		content: faqAccordionMock.items,
	},
	footer: footerMock,
};
