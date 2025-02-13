import { SectionModel } from '@/domain/models/Section';

import * as S from './styles';

interface MentorSectionModel extends SectionModel {}

export const MentorSection = ({ heading }: MentorSectionModel) => {
	return (
		<S.Wrapper>
			<S.Title>{heading}</S.Title>
		</S.Wrapper>
	);
};
