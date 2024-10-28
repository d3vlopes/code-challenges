import { generateID } from '@/utils/generate-id';

import { FaqAccordionProps } from '.';

export const faqAccordionMock: FaqAccordionProps = {
	items: [
		{
			id: generateID(),
			title: 'O pagamento é seguro?',
			content:
				'Todo o processo é feito pela Hotmart em um ambiente totalmente seguro.',
		},
		{
			id: generateID(),
			title: 'Como é feito o acesso aos desafios?',
			content:
				'Após o pagamento ser aprovado, você vai ter acesso a plataforma da Hotmart e por lá vai acessar um guia passo a passo mostrando como acessar os desafios.',
		},
		{
			id: generateID(),
			title: 'E se eu perceber que não era pra mim?',
			content:
				'Você tem 7 dias para experimentar nossa metologia de aprendizado e se decidir que não é pra você, basta pedir o reembolso na plataforma da Hotmart.',
		},
		{
			id: generateID(),
			title: 'Os desafios tem prazos de entrega?',
			content:
				'Não, mas recomendamos você mesmo estimar um prazo e iremos te mostrar como fazer isso de forma profissional, simulando o processo que acontece nas empresas.',
		},
		{
			id: generateID(),
			title: 'Vou ter acesso a solução do desafio?',
			content:
				'Qual a graça de fazer um desafio onde você tem acesso a resposta? Nosso objetivo é te desafiar e te colocar em situações do mundo real, onde você vai precisar solucionar problemas por conta própria, mas você não vai estar sozinho(a) durante os desafios, vamos estar junto com você!',
		},
		{
			id: generateID(),
			title: 'O preço vai aumentar?',
			content:
				'Sim, estamos oferecendo um valor especial para as primeiras pessoas a confiar e apoiar o Code Challenges, depois o valor vai aumentar consideravelmente.',
		},
		{
			id: generateID(),
			title: 'Vou ter acesso a todas as trilhas?',
			content:
				'Não, você vai ter acesso apenas a trilha que você escolheu. Nosso objetivo é que você se torne especialista na trilha que você escolher e ter foco é essencial para alcançar esse objetivo.',
		},
		{
			id: generateID(),
			title: 'Posso trocar de trilha?',
			content: 'Sim, você pode trocar de trilha após fazer a assinatura.',
		},
	],
};
