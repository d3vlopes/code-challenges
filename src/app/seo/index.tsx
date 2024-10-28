import { MainModel } from '@/domain/models/Main';

interface JsonLdProps {
	data: MainModel;
}

export const seoConfig = {
	title: 'Code Challenges - Experiência real para desenvolvedores',
	description:
		'O Code Challenges é um ambiente projetado para fornecer experiência real aos desenvolvedores através de desafios baseados em testes técnicos reais enfrentados em empresas. O objetivo é oferecer uma experiência prática e imersiva, permitindo aos desenvolvedores aprimorar suas habilidades em um contexto que simula desafios do mundo real.',
	url: 'https://www.codechallenges.com.br',
	alternateName: 'Code Challenges',
};

export function generateJSONLd(data: MainModel) {
	const organizationJSONLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		logo: data.header.logo.src,
		name: seoConfig.alternateName,
		url: seoConfig.url,
		email: 'contato.codechallenges@gmail.com',
		founder: {
			jobTitle: 'Founder | CEO',
			name: 'Leandro Lopes',
			email: 'contato.leandrolopes@outlook.com',
		},
	};

	const productJSONLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: `Trilha ${seoConfig.alternateName}`,
		description: seoConfig.description,
		offers: {
			'@type': 'Offer',
			url: 'https://pay.hotmart.com/C92887324Y?checkoutMode=10',
			priceCurrency: 'BRL',
			price: data.checkout.salePrice,
			availability: 'https://schema.org/InStock',
		},
	};

	return {
		organizationJSONLd,
		productJSONLd,
	};
}

export const JSONLd = ({ data }: JsonLdProps) => {
	const { organizationJSONLd, productJSONLd } = generateJSONLd(data);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJSONLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productJSONLd) }}
			/>
		</>
	);
};
