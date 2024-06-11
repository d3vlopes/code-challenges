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
	],
};
