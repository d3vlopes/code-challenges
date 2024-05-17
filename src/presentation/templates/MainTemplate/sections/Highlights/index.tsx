import { HighlightsSectionModel } from '@/domain/models/Sections';

import { Highlights } from '@/presentation/components/Highlights';

import * as S from './styles';

export const HighlightsSection = ({ content }: HighlightsSectionModel) => {
	return (
		<S.Wrapper>
			<Highlights items={content} />
		</S.Wrapper>
	);
};
