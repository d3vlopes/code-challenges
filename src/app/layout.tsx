import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Rubik, Ubuntu } from 'next/font/google';

import StyledComponentsRegistry from '@/infra/libs/styling/styled-components/registry';

import { seoConfig } from './seo';

import { Providers } from './providers';

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['700'],
	display: 'swap',
	variable: '--font-highlight',
});

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: ['500', '700'],
	display: 'swap',
	variable: '--font-heading',
});

const beVietnamPro = Be_Vietnam_Pro({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-body',
});

export const metadata: Metadata = {
	title: seoConfig.title,
	description: seoConfig.description,
	keywords: [
		'Code Challenges',
		'desafios de programação',
		'experiência para desenvolvedores',
		'experiência para devs',
		'experiência para dev júnior',
		'Como ganhar experiência como desenvolvedor sem estar em uma empresa?',
		'Como ganhar experiência como desenvolvedor?',
		'teste técnicos de programação',
		'testes técnicos',
		'treinamento de desenvolvimento',
		'Mentoria para programadores',
		'comunidade para desenvolvedores júnior',
		'comunidade para dev júnior',
		'comunidade de desenvolvedores',
		'escola de programação',
		'treinamento prático',
		'networking de desenvolvedores',
	],
	metadataBase: new URL(seoConfig.url),
	openGraph: {
		type: 'website',
		title: seoConfig.title,
		description: seoConfig.description,
		url: seoConfig.url,
		siteName: seoConfig.alternateName,
		locale: 'pt-BR',
		images: [
			{
				url: 'https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clxdkxbcy03if07ka4lwsr9h4',
				alt: 'Banner Code Challenges',
				width: 1200,
				height: 627,
			},
		],
	},
};

const fonts = `${rubik.variable} ${ubuntu.variable} ${beVietnamPro.variable}`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</head>
			<body className={fonts}>
				<StyledComponentsRegistry>
					<Providers>{children}</Providers>
				</StyledComponentsRegistry>

				<div id="modal-root" />
			</body>
		</html>
	);
}
