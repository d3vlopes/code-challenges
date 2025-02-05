import { TestimonialsSectionModel } from '@/domain/models/Sections';

import { Testimonials } from '@/presentation/components/Testimonials';

import * as S from './styles';

export const TestimonialsSection = ({
	id,
	heading,
	testimonials,
}: TestimonialsSectionModel) => {
	return (
		<S.Wrapper id={id}>
			<S.Title>{heading}</S.Title>

			<S.TestimonialsWrapper>
				<Testimonials items={testimonials} />
			</S.TestimonialsWrapper>
		</S.Wrapper>
	);
};
