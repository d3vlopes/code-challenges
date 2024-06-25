'use client';

import { StepModel } from '@/domain/models/Step';

import { useAnimation } from '@/presentation/hooks/useAnimation';

import * as S from './styles';

export interface StepsProps {
	items: StepModel[];
}

export const Steps = ({ items }: StepsProps) => {
	const { ref, inView } = useAnimation();

	const animationVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<S.Wrapper>
			{items.map((item) => {
				return (
					<S.ItemWrapper
						key={item.id}
						ref={ref}
						initial="hidden"
						animate="visible"
						whileInView="visible"
						variants={animationVariants}
						transition={{ duration: 0.3 }}
						viewport={{
							once: true,
							amount: 'some',
						}}
					>
						<S.StepNumber>
							<span>{item.number}</span>
						</S.StepNumber>

						<S.TextWrapper
							ref={ref}
							initial="hidden"
							animate={inView ? 'visible' : 'hidden'}
							variants={animationVariants}
							whileInView="visible"
							transition={{ duration: 0.5, delay: 0.1, type: 'tween' }}
							viewport={{
								once: true,
								amount: 'all',
							}}
						>
							<p>{item.text}</p>
						</S.TextWrapper>
					</S.ItemWrapper>
				);
			})}
		</S.Wrapper>
	);
};
