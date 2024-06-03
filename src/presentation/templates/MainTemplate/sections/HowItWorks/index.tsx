import { HowItWorkSectionModel } from '@/domain/models/Sections';

import { Steps } from '@/presentation/components/Steps';

import * as S from './styles';

export const HowItWorksSection = ({
	heading,
	content,
}: HowItWorkSectionModel) => {
	return (
		<S.Wrapper>
			<S.Title>{heading}</S.Title>

			<Steps items={content} />
		</S.Wrapper>
	);
};
