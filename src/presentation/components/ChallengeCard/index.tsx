'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ChallengeCardModel } from '@/domain/models/ChallengeCard';

import { Button } from '@/presentation/components/Button';
import { Modal } from '@/presentation/components/Modal';

import * as S from './styles';

export type ChallengeCardProps = ChallengeCardModel;

export const ChallengeCard = ({
	title,
	technologies,
	description,
	buttonText,
	videoID,
	buttonModal,
}: ChallengeCardProps) => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	function handleToggleModal() {
		setIsOpenModal((prevState) => !prevState);
	}

	return (
		<>
			<S.Wrapper>
				<S.Header>
					<S.Title>{title}</S.Title>

					<S.TechnologyWrapper>
						<h4>Stack que você vai utilizar</h4>

						<S.TechnologyIconsWrapper>
							{technologies.map((item) => {
								return (
									<Image
										key={item.id}
										src={item.icon.src}
										alt={item.icon.alt}
										title={item.name}
										width={25}
										height={25}
									/>
								);
							})}
						</S.TechnologyIconsWrapper>
					</S.TechnologyWrapper>
				</S.Header>

				<S.Description>{description}</S.Description>

				<Button onClick={handleToggleModal}>{buttonText}</Button>
			</S.Wrapper>

			<Modal isOpen={isOpenModal} onRequestClose={handleToggleModal}>
				<S.ModalWrapper>
					<header>
						<S.Title>{title}</S.Title>

						<S.TechnologyIconsWrapper data-testid="technologies-icons">
							{technologies.map((item) => {
								return (
									<Image
										key={item.id}
										src={item.icon.src}
										alt={item.icon.alt}
										title={item.name}
										width={30}
										height={30}
									/>
								);
							})}
						</S.TechnologyIconsWrapper>
					</header>

					<iframe
						data-testid="iframe-video"
						src={`https://www.youtube.com/embed/${videoID}`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						loading="lazy"
						allowFullScreen
					/>

					<Button asChild>
						<a href={buttonModal.href}>{buttonModal.text}</a>
					</Button>
				</S.ModalWrapper>
			</Modal>
		</>
	);
};
