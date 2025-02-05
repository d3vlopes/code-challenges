import { generateID } from '@/utils/generate-id';

import { socialIconsMock } from '../SocialIcons/mock';

import { TestimonialProps } from '.';

export const testimonialsMock: TestimonialProps = {
	items: [
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm6r11twp04m207lt5snaciw5',
				alt: 'Foto do aluno Vinícius Almeida',
			},
			text: 'Eu já fiz vários cursos, porém, sempre me senti distante de uma experiência mais próxima do que é o trabalho de dia a dia de um dev. Por isso, assinei rápido quando vi a oportunidade de mexer em um projeto e ainda ter feedback. Acho que os cursos cumprem um papel, mas eles vão até certo ponto.',
			name: 'Vinícius Almeida',
			socials: [
				{
					id: generateID(),
					name: 'Linkedin',
					href: 'https://www.linkedin.com/in/viniciusgalmeida',
					src: socialIconsMock.items[0].src,
					alt: `Logo do ${socialIconsMock.items[0].name}`,
				},
				{
					id: generateID(),
					name: 'Github',
					href: 'https://github.com/Viniciusgalmeida',
					src: socialIconsMock.items[1].src,
					alt: `Logo do ${socialIconsMock.items[1].name}`,
				},
			],
		},
		{
			id: generateID(),
			image: {
				src: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/cm6r11txm04l007lw9c0lls6s',
				alt: 'Imagem do aluno Lucas Lima',
			},
			text: 'Ao ler o site vi que era uma metodologia diferente de cursos convencionais e foi o que me chamou a atenção, e era algo que eu buscava, algo mais proximo do cotidiano de alguém que trabalha na area, e sem copiar e colar de cursos em video,  e resolvi arriscar, e como o preço estava bem em conta, vi como uma oportunidade!',
			name: 'Lucas Lima',
			socials: [
				{
					id: generateID(),
					name: 'Linkedin',
					href: 'https://www.linkedin.com/in/lucaslimacampos',
					src: socialIconsMock.items[0].src,
					alt: `Logo do ${socialIconsMock.items[0].name}`,
				},
				{
					id: generateID(),
					name: 'Github',
					href: 'https://github.com/LucaoCode',
					src: socialIconsMock.items[1].src,
					alt: `Logo do ${socialIconsMock.items[1].name}`,
				},
			],
		},
	],
};
