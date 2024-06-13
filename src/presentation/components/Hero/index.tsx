'use client';

import { useEffect } from 'react';

import { HeroModel } from '@/domain/models/Hero';

import { Button } from '@/presentation/components/Button';

import { animate, stagger } from '@/infra/libs/animations/framer-motion';
import { sanitizeHTMLFacade } from '@/infra/libs/sanitizers/sanitize-html';

import * as S from './styles';

export type HeroProps = HeroModel;

export const Hero = ({
	titleHTML,
	description,
	button,
	technologiesIcons,
}: HeroProps) => {
	const clearTitleHTML = sanitizeHTMLFacade(titleHTML);

	useEffect(() => {
		const icons = document.querySelectorAll('#tech-icon');

		animate(
			icons,
			{
				y: [-3, 5, -3],
			},
			{
				ease: 'easeInOut',
				duration: 2.1,
				repeat: Number.POSITIVE_INFINITY,
				delay: stagger(0.2),
			},
		);
	}, []);

	return (
		<S.Wrapper>
			<S.TechnologiesTopIcon>
				{technologiesIcons.slice(0, 3).map((item) => {
					return (
						<S.TechnologiesIconWrapper key={item.id} id="tech-icon">
							<img src={item.src} alt={item.alt} />
						</S.TechnologiesIconWrapper>
					);
				})}
			</S.TechnologiesTopIcon>

			<S.Heading dangerouslySetInnerHTML={{ __html: clearTitleHTML }} />

			<S.Description>{description}</S.Description>

			<Button asChild>
				<a href={button.href}>{button.text}</a>
			</Button>

			<S.TechnologiesBottomIcon>
				{technologiesIcons.slice(3, 6).map((item) => {
					return (
						<S.TechnologiesIconWrapper key={item.id} id="tech-icon">
							<img src={item.src} alt={item.alt} />
						</S.TechnologiesIconWrapper>
					);
				})}
			</S.TechnologiesBottomIcon>
		</S.Wrapper>
	);
};
