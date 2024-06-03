import { generateID } from '@/utils/generate-id';

import { StepsProps } from '.';

export const stepsMock: StepsProps = {
	items: [
		{
			id: generateID(),
			number: 1,
			text: 'Você vai receber acesso a um repositório com as ferramentas já instaladas e configuradas para você.',
		},
		{
			id: generateID(),
			number: 2,
			text: 'Cada repositório contém diversas issues com todas as tarefas que você vai precisar entregar para concluir o desafio.',
		},
		{
			id: generateID(),
			number: 3,
			text: 'Você vai criar um Pull Request da issue para receber code review de outros devs.',
		},
		{
			id: generateID(),
			number: 4,
			text: 'Após fazer as alterações sugeridas e ter seu PR aprovado, você finaliza a task e faz o merge.',
		},
		{
			id: generateID(),
			number: 5,
			text: 'Após finalizar todas as issues, você pode enviar seu desafio para revisão para o time do Code Challenges.',
		},
	],
};
