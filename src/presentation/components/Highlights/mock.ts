import { generateID } from '@/utils/generate-id';

import { HighlightsProps } from '.';

export const highlightsMock: HighlightsProps = {
	items: [
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clw86qn1w07z108kjtro979ci',
				alt: 'Uma ilustração de uma pessoa subindo uma escada rumo a ganhar experiência',
			},
			title: 'Experiência real',
			description:
				'Você emulará o fluxo de trabalho de um desenvolvedor em uma empresa, resolvendo problemas complexos e do mundo real, ganhando a experiência necessária  para entrar no mercado preparado para os desafios do dia a dia de um desenvolvedor de software.',
		},
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clw86qmy607xh07lxelk3nqje',
				alt: 'Uma ilustração de uma pessoa estudando com um loop atrás',
			},
			title: 'Saia do loop de cursos',
			description:
				'Você termina um curso e já começa outro? Para se tornar um desenvolvedor pronto para o mercado, você precisa sair o quanto antes desse ciclo e começar a solucionar problemas do mundo real, para te ajudar nisso, criamos desafios baseado em teste técnicos reais de empresas.',
		},
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clw86qn2h07xm07lxrhlo9en4',
				alt: 'Uma ilustração de abas do navegador aberto',
			},
			title: 'Projetos reais',
			description:
				'Tenha em seu portfólio projetos reais que mostre para os recrutadores suas habilidades e conhecimento resolvendo problemas complexos e do mundo real, que vão te deixar mais próximo de conquistar uma oportunidade no mercado.',
		},
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clw86qn15085e07lv1tu3357o',
				alt: 'Uma ilustração de uma pessoa ajudando a outra',
			},
			title: 'Orientação',
			description:
				'Tenha seu desafio revisado por um desenvolvedor experiente e receba feedbacks que vão te fazer evoluir muito mais rápido e com qualidade na direção certa, fazendo você não desperdiçar tempo, dinheiro e esforço.',
		},
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clw86qnbc07xr07lxpddop3g7',
				alt: 'Uma ilustração de uma pessoa analisando o código',
			},
			title: 'Code review',
			description:
				'Receba code review dos seus Pull Request e faça code review no PR de outros desenvolvedores que estão participando da mesma trilha que você e melhore a qualidade do seu código.',
		},
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clw86qn1i07yx08kjeu0g3sdb',
				alt: 'Uma ilustração de uma pessoa com resiliência entregando uma nova funcionalidade após enfrentar grandes obstáculos',
			},
			title: 'Obstáculos do mundo real',
			description:
				'Com o tempo os projetos irão sofrer atualizações, sendo adicionado novas funcionalidades e requisitos para você ter a experiência completa de desenvolver um software do mundo real.',
		},
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clw86qn1w085j07lvtzn0wb7c',
				alt: 'Uma ilustração de uma pessoa aprendendo novas tecnologias',
			},
			title: 'Aprendizado sob demanda',
			description:
				'Ao longo dos desafios, vai ser necessário aprender novas tecnologias e ferramentas para conseguir concluir o desafio, para isso você vai ler documentação, assistir videos, ler artigos, assim como acontece no desenvolvimento real.',
		},
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clw8elxxx0cp108kjk425gkgg',
				alt: 'Uma ilustração de uma pessoa estudando em um ambiente profissional',
			},
			title: 'Ambiente imersivo',
			description:
				'Aprenda a simular o ambiente de uma empresa real, definindo metas e expectativas, utilizando ferramentas e metodologias utilizada pelas empresas para se preparar para as dinâmicas que você vai encontrar ao entrar em uma equipe profissional.',
		},
	],
};
