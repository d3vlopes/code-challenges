'use client';

import Image from 'next/image';

import { ChallengeModel } from '@/domain/models/Challenge';

import { useAnimation } from '@/presentation/hooks/useAnimation';

import * as S from './styles';

export interface ChallengeCardProps extends ChallengeModel {
	animationDelay?: number;
}

export const ChallengeCard = ({
	title,
	technologies,
	description,
	animationDelay = 0,
}: ChallengeCardProps) => {
	const { ref, inView } = useAnimation();

	const animationVariants = {
		hidden: { opacity: 0, x: 10 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<S.Wrapper
			ref={ref}
			initial="hidden"
			whileInView="visible"
			animate={inView ? 'visible' : 'hidden'}
			variants={animationVariants}
			viewport={{ once: true, amount: 'some' }}
			transition={{
				duration: 0.5,
				delay: animationDelay,
				type: 'tween',
			}}
		>
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
		</S.Wrapper>
	);
};
