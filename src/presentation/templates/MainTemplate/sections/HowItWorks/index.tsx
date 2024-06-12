import { HowItWorkSectionModel } from '@/domain/models/Sections';

import { Steps } from '@/presentation/components/Steps';

import * as S from './styles';

export const HowItWorksSection = ({
	id,
	heading,
	content,
}: HowItWorkSectionModel) => {
	return (
		<S.Wrapper id={id}>
			<S.Title>{heading}</S.Title>

			<Steps items={content} />
		</S.Wrapper>
	);
};
