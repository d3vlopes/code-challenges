import { HighlightsSectionModel } from '@/domain/models/Sections';

import { Highlights } from '@/presentation/components/Highlights';

import * as S from './styles';

export const HighlightsSection = ({
	heading,
	content,
}: HighlightsSectionModel) => {
	return (
		<S.Wrapper>
			<S.Title>{heading}</S.Title>

			<Highlights items={content} />
		</S.Wrapper>
	);
};
