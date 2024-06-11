import { FaqSectionModel } from '@/domain/models/Sections';

import { Container } from '@/presentation/styles/container';

import { FaqAccordion } from '@/presentation/components/FaqAccordion';

import * as S from './styles';

export const FaqSection = ({ id, heading, content }: FaqSectionModel) => {
	return (
		<S.Wrapper id={id}>
			<Container>
				<S.Title>{heading}</S.Title>

				<FaqAccordion items={content} />
			</Container>
		</S.Wrapper>
	);
};
