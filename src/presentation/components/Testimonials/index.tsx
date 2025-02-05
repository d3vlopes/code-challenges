import { TestimonialModel } from '@/domain/models/Testimonial';

import { Avatar } from '@/presentation/components/Avatar';
import { SocialIcons } from '@/presentation/components/SocialIcons';

import * as S from './styles';

export interface TestimonialProps {
	items: TestimonialModel[];
}

export const Testimonials = ({ items }: TestimonialProps) => {
	return (
		<S.Wrapper>
			{items.map((item) => {
				return (
					<S.ItemWrapper key={item.id}>
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
