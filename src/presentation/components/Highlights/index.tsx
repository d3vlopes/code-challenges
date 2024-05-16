import Image from 'next/image';

import { HighlightModel } from '@/domain/models/Highlight';

import * as S from './styles';

export interface HighlightsProps {
	items: HighlightModel[];
}

export const Highlights = ({ items }: HighlightsProps) => {
	return (
		<S.Wrapper>
			{items.map((item) => {
				return (
					<S.HighlightWrapper key={item.id}>
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
