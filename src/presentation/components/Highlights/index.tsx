'use client';

import Image from 'next/image';

import { HighlightModel } from '@/domain/models/Highlight';

import { useAnimation } from '@/presentation/hooks/useAnimation';

import * as S from './styles';

export interface HighlightsProps {
	items: HighlightModel[];
}

export const Highlights = ({ items }: HighlightsProps) => {
	const { inView, ref } = useAnimation();

	const animationVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<S.Wrapper>
			{items.map((item) => {
				return (
					<S.HighlightWrapper
						key={item.id}
						ref={ref}
						initial="hidden"
						whileInView="visible"
						animate={inView ? 'visible' : 'hidden'}
						variants={animationVariants}
						viewport={{ once: true, amount: 'all' }}
						transition={{ duration: 0.5, type: 'tween' }}
					>
						<S.HighlightImageWrapper>
							<Image src={item.image.src} alt={item.image.alt} fill />
						</S.HighlightImageWrapper>

						<S.Content>
							<h2>{item.title}</h2>

							<p>{item.description}</p>
						</S.Content>
					</S.HighlightWrapper>
				);
			})}
		</S.Wrapper>
	);
};
