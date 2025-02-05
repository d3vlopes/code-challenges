'use client';

import { TestimonialModel } from '@/domain/models/Testimonial';

import { Avatar } from '@/presentation/components/Avatar';
import { SocialIcons } from '@/presentation/components/SocialIcons';

import { useAnimation } from '@/presentation/hooks/useAnimation';

import * as S from './styles';

export interface TestimonialProps {
	items: TestimonialModel[];
}

export const Testimonials = ({ items }: TestimonialProps) => {
	const { ref, inView } = useAnimation();

	const animationVariants = {
		hidden: { opacity: 0, x: 10 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<S.Wrapper>
			{items.map((item, index) => {
				const animationDelay = (index + 1) * 0.6;

				return (
					<S.ItemWrapper
						key={item.id}
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
						<Avatar image={item.image} />

						<S.ItemContent>
							<p>{item.text}</p>

							<h3>{item.name}</h3>

							<SocialIcons items={item.socials} />
						</S.ItemContent>
					</S.ItemWrapper>
				);
			})}
		</S.Wrapper>
	);
};
