'use client';

import { useEffect, useState } from 'react';

import { HeroModel } from '@/domain/models/Hero';

import { Button } from '@/presentation/components/Button';
import { Modal } from '@/presentation/components/Modal';

import { animate, stagger } from '@/infra/libs/animations/framer-motion';
import { sanitizeHTMLFacade } from '@/infra/libs/sanitizers/sanitize-html';

import * as S from './styles';

export type HeroProps = HeroModel;

export const Hero = ({
	titleHTML,
	description,
	buttons,
	iframe,
	technologiesIcons,
}: HeroProps) => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const clearTitleHTML = sanitizeHTMLFacade(titleHTML);

	function handleToggleModal() {
		setIsOpenModal((prevState) => !prevState);
	}

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

			<S.ButtonsWrapper>
				<Button asChild>
					<a href={buttons.checkoutButton.href}>
						{buttons.checkoutButton.text}
					</a>
				</Button>

				<Button variant="outline" onClick={handleToggleModal}>
					{buttons.videoButton.text}
				</Button>
			</S.ButtonsWrapper>

			<S.TechnologiesBottomIcon>
				{technologiesIcons.slice(3, 6).map((item) => {
					return (
						<S.TechnologiesIconWrapper key={item.id} id="tech-icon">
							<img src={item.src} alt={item.alt} />
						</S.TechnologiesIconWrapper>
					);
				})}
			</S.TechnologiesBottomIcon>

			<Modal isOpen={isOpenModal} onRequestClose={handleToggleModal}>
				<S.ModalContent>
					<iframe
						src={iframe.src}
						title={iframe.title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						loading="lazy"
					/>
				</S.ModalContent>
			</Modal>
		</S.Wrapper>
	);
};
